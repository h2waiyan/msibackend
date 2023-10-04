import { Request, Response } from 'express';
import db from '../models/index'; 
const Time = db.times;

export const create = (req: Request, res: Response) => {  
    const time = {
      name: req.body.name,
    };
  
    Time.create(time)
      .then((data: any) => {
        res.send(data);
      })
      .catch((err: any) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Time."
        });
    });
};

export const findAll = (req: Request, res: Response) => {
    Time.findAll()
    .then((data: any) => {
        res.send(data);
    })
    .catch((err: any) => {
        res.status(500).send({
            message: err. message || "error occurred in Time"
        })
    })
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

    Time.findByPk(id)
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Time with id=${id}.`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving Time with id=" + id
      });
    })
};

export const update = (req: Request, res: Response) => {
  Time.update(req.body, {
    where: { time_id: req.params.id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Time was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Time with id=${req.params.id}. Maybe Time was not found or req.params is empty!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error updating Time with id=" + req.params.id
      });
  });
};

export const remove = (req: Request, res: Response) => {
  const id = req.params.id;
  Time.destroy({
    where: { time_id: id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Time was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Time with id=${id}. Maybe Time was not found!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Could not delete Time with id=" + id
      });
  });
};