import { Request, Response } from 'express';
import db from '../models/index'; 
const Enroll = db.enrolls;

export const create = (req: Request, res: Response) => {  
    const enroll = {
      name: req.body.name,
      education: req.body.education,
      mobile: req.body.mobile,
      email: req.body.email,
      course: req.body.course,
      time: req.body.time,
      days: req.body.days,
    };
  
    Enroll.create(enroll)
      .then((data: any) => {
        res.send(data);
      })
      .catch((err: any) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Enroll."
        });
    });
};

export const findAll = (req: Request, res: Response) => {
    Enroll.findAll()
    .then((data: any) => {
        res.send(data);
    })
    .catch((err: any) => {
        res.status(500).send({
            message: err. message || "error occurred in Enroll"
        })
    })
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

    Enroll.findByPk(id)
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Enroll with id=${id}.`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving Enroll with id=" + id
      });
    })
};

export const update = (req: Request, res: Response) => {
  Enroll.update(req.body, {
    where: { enroll_id: req.params.id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Enroll was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Enroll with id=${req.params.id}. Maybe Enroll was not found or req.params is empty!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error updating Enroll with id=" + req.params.id
      });
  });
};

export const remove = (req: Request, res: Response) => {
  const id = req.params.id;
  Enroll.destroy({
    where: { enroll_id: id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Enroll was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Enroll with id=${id}. Maybe Enroll was not found!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Could not delete Enroll with id=" + id
      });
  });
};