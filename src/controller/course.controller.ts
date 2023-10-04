import { Request, Response } from 'express';
import db from '../models/index';
const Course = db.courses;
const Outline = db.outlines;
const jwt = require("jsonwebtoken");

export const login = (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username == "msi2022" && password == "msi@2022") {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    var token = jwt.sign(
      {
        name: username,
        exp: exp.getTime() / 1000,
      },
      // config.jwtSecret,
      "p4sta.w1th-b0logn3s3-s@uce"
    );

    const res_data = {
      returncode: "300",
      token: token,
    };
    // print(token);
    res.send(res_data);
  } else {
    const res_data = {
      returncode: "200",
    };
    res.send(res_data);
  }
};

export const create = async (req: Request, res: Response) => {
  const { course_name, description, course_fb_url, image_url, duration, fees, outlines } = req.body;

  try {
    // Create the course
    const course = await Course.create({
      course_name,
      description,
      course_fb_url,
      image_url,
      duration,
      fees,
    });

    // Create the associated outlines
    if (outlines && outlines.length > 0) {
      const outlineData = outlines.map((outlineContent: any) => ({
        content: outlineContent,
        course_id: course.course_id, // Set the course_id for each outline
      }));

      await Outline.bulkCreate(outlineData);
    }

    res.send(course);
  } catch (err: any) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Course and Outlines.",
    });
  }
};

export const findAll = (req: Request, res: Response) => {
  Course.findAll({
    include: [{
      model: Outline,
      as: 'outlines',
      order: [['createdAt', 'ASC']]
    }]
  })
    .then((data: any) => {
      res.send(data);
    })
    .catch((err: any) => {
      res.status(500).send({
        message: err.message || "error occurred in Courses"
      })
    })
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

  Course.findByPk(id, {
    include: [{ model: Outline, as: 'outlines' }]
  })
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Course with id=${id}.`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving Course with id=" + id
      });
    })
};

export const update = async (req: Request, res: Response) => {
  const courseId = req.params.id;
  const { course_name, description, course_fb_url, image_url, duration, fees, outlines } = req.body;

  try {
    // Update the course information
    const [numUpdated] = await Course.update(
      {
        course_name,
        description,
        course_fb_url,
        image_url,
        duration,
        fees,
      },
      {
        where: { course_id: courseId },
      }
    );

    if (numUpdated === 0) {
      return res.status(404).send({
        message: `Cannot update Course with id=${courseId}. Course not found.`,
      });
    }

    // Retrieve the associated outlines
    const existingOutlines = await Outline.findAll({
      where: { course_id: courseId },
    });

    // Update or create new outlines
    if (outlines && outlines.length > 0) {
      const outlineData = outlines.map((outlineContent: any) => ({
        content: outlineContent,
        course_id: courseId,
      }));

      // Update existing outlines or create new ones
      await Promise.all(
        outlineData.map(async (data: any, index: number) => {
          if (existingOutlines[index]) {
            // Update existing outline
            await existingOutlines[index].update(data);
          } else {
            // Create new outline
            await Outline.create(data);
          }
        })
      );
    }

    res.send({
      message: "Course and outlines were updated successfully.",
    });
  } catch (err: any) {
    res.status(500).send({
      message: "Error updating Course and outlines: " + err.message,
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  const courseId = req.params.id;
  try {
    // Delete associated outlines first
    await Outline.destroy({
      where: { course_id: courseId },
    });

    // Now, delete the course
    const numDeleted = await Course.destroy({
      where: { course_id: courseId },
    });

    if (numDeleted === 1) {
      res.send({
        message: "Course and its outlines were deleted successfully!",
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Course with id=${courseId}. Maybe Course was not found!`,
      });
    }
  } catch (err: any) {
    res.status(500).send({
      message: "Could not delete Course and its outlines: " + err.message,
    });
  }
};
