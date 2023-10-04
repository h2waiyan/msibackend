"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const index_1 = __importDefault(require("../models/index"));
const Story = index_1.default.stories;
const create = (req, res) => {
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
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Story."
        });
    });
};
exports.create = create;
const findAll = (req, res) => {
    Story.findAll()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "error occurred in Story"
        });
    });
};
exports.findAll = findAll;
const findOne = (req, res) => {
    const id = req.params.id;
    Story.findByPk(id)
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find story with id=${id}.`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving story with id=" + id
        });
    });
};
exports.findOne = findOne;
const update = (req, res) => {
    Story.update(req.body, {
        where: { story_id: req.params.id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Story was updated successfully."
            });
        }
        else {
            res.send({
                message: `Cannot update Story with id=${req.params.id}. Maybe Story was not found or req.params is empty!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error updating Story with id=" + req.params.id
        });
    });
};
exports.update = update;
const remove = (req, res) => {
    const id = req.params.id;
    Story.destroy({
        where: { story_id: id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Story was deleted successfully!"
            });
        }
        else {
            res.send({
                message: `Cannot delete Story with id=${id}. Maybe Story was not found!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Could not delete Story with id=" + id
        });
    });
};
exports.remove = remove;
