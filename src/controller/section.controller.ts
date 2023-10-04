import { Request, Response } from 'express';
import db from '../models/index'; 
const Section = db.sections;

export const create = (req: Request, res: Response) => {  
    const section = {
      name: req.body.name,
    };
  
    Section.create(section)
      .then((data: any) => {
        res.send(data);
      })
      .catch((err: any) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Section."
        });
    });
};

export const findAll = (req: Request, res: Response) => {
    Section.findAll()
    .then((data: any) => {
        res.send(data);
    })
    .catch((err: any) => {
        res.status(500).send({
            message: err. message || "error occurred in Section"
        })
    })
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

    Section.findByPk(id)
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Section with id=${id}.`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving Section with id=" + id
      });
    })
};

export const update = (req: Request, res: Response) => {
  Section.update(req.body, {
    where: { section_id: req.params.id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Section was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Section with id=${req.params.id}. Maybe Section was not found or req.params is empty!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error updating Section with id=" + req.params.id
      });
  });
};

export const remove = (req: Request, res: Response) => {
  const id = req.params.id;
  Section.destroy({
    where: { section_id: id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Section was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Section with id=${id}. Maybe Section was not found!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Could not delete Section with id=" + id
      });
  });
};