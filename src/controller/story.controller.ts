import { Request, Response } from 'express';
import db from '../models/index'; 
const Story = db.stories;

export const create = (req: Request, res: Response) => {  
    const story = {
      name: req.body.name,
      position: req.body.position,
      type: req.body.type,
      content: req.body.content,
      profile_img_url: req.body.profile_img_url,
      story_img_url1: req.body.story_img_url1,
      story_img_url2: req.body.story_img_url2,
      profile_fb_url: req.body.profile_fb_url,
      story_fb_url1: req.body.story_fb_url1,
      story_fb_url2: req.body.story_fb_url2,
    };
  
    Story.create(story)
      .then((data: any) => {
        res.send(data);
      })
      .catch((err: any) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Story."
        });
    });
};

export const findAll = (req: Request, res: Response) => {
    Story.findAll()
    .then((data: any) => {
        res.send(data);
    })
    .catch((err: any) => {
        res.status(500).send({
            message: err. message || "error occurred in Story"
        })
    })
};

export const findOne = (req: Request, res: Response) => {
  const id = req.params.id;

    Story.findByPk(id)
    .then((data: any) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find story with id=${id}.`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error retrieving story with id=" + id
      });
    })
};

export const update = (req: Request, res: Response) => {
  Story.update(req.body, {
    where: { story_id: req.params.id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Story was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Story with id=${req.params.id}. Maybe Story was not found or req.params is empty!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Error updating Story with id=" + req.params.id
      });
  });
};

export const remove = (req: Request, res: Response) => {
  const id = req.params.id;
  Story.destroy({
    where: { story_id: id }
  })
    .then((num: any) => {
      if (num == 1) {
        res.send({
          message: "Story was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Story with id=${id}. Maybe Story was not found!`
        });
      }
    })
    .catch((err: any) => {
      res.status(500).send({
        message: "Could not delete Story with id=" + id
      });
  });
};