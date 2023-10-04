"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const index_1 = __importDefault(require("../models/index"));
const Section = index_1.default.sections;
const create = (req, res) => {
    const section = {
        name: req.body.name,
    };
    Section.create(section)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Section."
        });
    });
};
exports.create = create;
const findAll = (req, res) => {
    Section.findAll()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "error occurred in Section"
        });
    });
};
exports.findAll = findAll;
const findOne = (req, res) => {
    const id = req.params.id;
    Section.findByPk(id)
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Section with id=${id}.`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Section with id=" + id
        });
    });
};
exports.findOne = findOne;
const update = (req, res) => {
    Section.update(req.body, {
        where: { section_id: req.params.id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Section was updated successfully."
            });
        }
        else {
            res.send({
                message: `Cannot update Section with id=${req.params.id}. Maybe Section was not found or req.params is empty!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error updating Section with id=" + req.params.id
        });
    });
};
exports.update = update;
const remove = (req, res) => {
    const id = req.params.id;
    Section.destroy({
        where: { section_id: id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Section was deleted successfully!"
            });
        }
        else {
            res.send({
                message: `Cannot delete Section with id=${id}. Maybe Section was not found!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Could not delete Section with id=" + id
        });
    });
};
exports.remove = remove;
