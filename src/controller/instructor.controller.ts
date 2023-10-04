import { Request, Response } from 'express';
import db from '../models/index'; 
const Instructor = db.instructors;
const Skill = db.skills;

export const create = async (req: Request, res: Response) => {
    const { name, profile_img_url, profile_fb_url, type, facebook, gmail, twitter, linkedin, skills } = req.body;
  
    try {
      // Create the instructor
      const instructor = await Instructor.create({
        name,
        profile_img_url,
        profile_fb_url,
        type,
        facebook,
        gmail,
        twitter,
        linkedin,
      });
  
      // Retrieve the created instructor's instructor_id
      const instructorId = instructor.instructor_id;
  
      // Create the associated skills
      if (skills && skills.length > 0) {
        const skillData = skills.map((skill: any) => ({
          name: skill.name,
          content: skill.content,
          skill_img_url: skill.skill_img_url,
          skill_fb_url: skill.skill_fb_url,
          instructor_id: instructorId, // Set the instructor_id for each skill
        }));
  
        await Skill.bulkCreate(skillData);
      }
  
      res.send(instructor);
    } catch (err: any) {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Instructor and skills.",
      });
    }
};
  

export const findAll = (req: Request, res: Response) => {
    Instructor.findAll({
        include: [{ model: Skill, as: 'skills' }]
    })
    .then((data: any) => {
        res.send(data);
    })
    .catch((err: any) => {
        res.status(500).send({
            message: err. message || "error occurred in Instructors"
        })
    })
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

    Instructor.findByPk(id, {
        include: [{ model: Skill, as: 'skills' }]
    })
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Instructor with id=${id}.`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving Instructor with id=" + id
      });
    })
};

export const update = async (req: Request, res: Response) => {
  const instructorId = req.params.id;
  const { name, profile_img_url, profile_fb_url, type, facebook, gmail, twitter, linkedin, skills } = req.body;

  try {
    // Update the instructor information
    const [numUpdated] = await Instructor.update(
      {
        name,
        profile_img_url,
        profile_fb_url,
        type,
        facebook,
        gmail,
        twitter,
        linkedin,
      },
      {
        where: { instructor_id: instructorId },
      }
    );

    if (numUpdated === 0) {
      return res.status(404).send({
        message: `Cannot update Instructor with id=${instructorId}. Instructor not found.`,
      });
    }

    // Retrieve the associated skills
    const existingSkills = await Skill.findAll({
      where: { instructor_id: instructorId },
    });

    // Update or create skills based on skill_id
    if (skills && skills.length > 0) {
      const updatedSkills: any = [];
      const newSkills: any = [];

      skills.forEach((skill: any) => {
        const skillData = {
          name: skill.name,
          content: skill.content,
          skill_img_url: skill.skill_img_url,
          skill_fb_url: skill.skill_fb_url,
          instructor_id: instructorId,
        };

        const existingSkill = existingSkills.find((s: any) => s.skill_id === skill.skill_id);

        if (existingSkill) {
          // Update existing skill
          updatedSkills.push(existingSkill.update(skillData));
        } else {
          // Create new skill
          newSkills.push(Skill.create(skillData));
        }
      });

      // Wait for all updates and creations to finish
      await Promise.all([...updatedSkills, ...newSkills]);
    }

    res.send({
      message: "Instructor and skills were updated successfully.",
    });
  } catch (err: any) {
    res.status(500).send({
      message: "Error updating Instructor and skills: " + err.message,
    });
  }
};

export const remove = async (req: Request, res: Response) => {
    const instructorId = req.params.id;
    try {
      // Delete associated skills first
      await Skill.destroy({
        where: { instructor_id: instructorId },
      });
  
      // Now, delete the instructor
      const numDeleted = await Instructor.destroy({
        where: { instructor_id: instructorId },
      });
  
      if (numDeleted === 1) {
        res.send({
          message: "instructor and its skills were deleted successfully!",
        });
      } else {
        res.status(404).send({
          message: `Cannot delete instructor with id=${instructorId}. Maybe instructor was not found!`,
        });
      }
    } catch (err: any) {
      res.status(500).send({
        message: "Could not delete instructor and its skills: " + err.message,
      });
    }
};
