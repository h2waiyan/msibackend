import { Request, Response } from 'express';
import db from '../models/index'; 
const Contact = db.contacts;

export const create = async (req: Request, res: Response) => {
  try {
    const { location, email, phone } = req.body;
    const contact = await Contact.create({ location, email, phone });
    res.send(contact);
  } catch (err:any) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Contact.",
    });
  }
};

export const findAll = async (req: Request, res: Response) => {
  try {
    const contacts = await Contact.findAll();
    res.send(contacts);
  } catch (err:any) {
    res.status(500).send({
      message: err.message || "Error occurred while retrieving Contacts.",
    });
  }
};

export const findOne = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findByPk(id);
    if (contact) {
      res.send(contact);
    } else {
      res.status(404).send({
        message: `Cannot find Contact with id=${id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Contact.",
    });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { location, email, phone } = req.body;
    const [numUpdated] = await Contact.update(
      { location, email, phone },
      { where: { contact_id: id } }
    );
    if (numUpdated === 1) {
      res.send({
        message: "Contact was updated successfully.",
      });
    } else {
      res.status(404).send({
        message: `Cannot update Contact with id=${id}. Maybe Contact was not found or req.params is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Contact.",
    });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const numDeleted = await Contact.destroy({ where: { contact_id: id } });
    if (numDeleted === 1) {
      res.send({
        message: "Contact was deleted successfully!",
      });
    } else {
      res.status(404).send({
        message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Contact.",
    });
  }
};
