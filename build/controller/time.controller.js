"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const index_1 = __importDefault(require("../models/index"));
const Time = index_1.default.times;
const create = (req, res) => {
    const time = {
        name: req.body.name,
    };
    Time.create(time)
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Time."
        });
    });
};
exports.create = create;
const findAll = (req, res) => {
    Time.findAll()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "error occurred in Time"
        });
    });
};
exports.findAll = findAll;
const findOne = (req, res) => {
    const id = req.params.id;
    Time.findByPk(id)
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Time with id=${id}.`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Time with id=" + id
        });
    });
};
exports.findOne = findOne;
const update = (req, res) => {
    Time.update(req.body, {
        where: { time_id: req.params.id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Time was updated successfully."
            });
        }
        else {
            res.send({
                message: `Cannot update Time with id=${req.params.id}. Maybe Time was not found or req.params is empty!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error updating Time with id=" + req.params.id
        });
    });
};
exports.update = update;
const remove = (req, res) => {
    const id = req.params.id;
    Time.destroy({
        where: { time_id: id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Time was deleted successfully!"
            });
        }
        else {
            res.send({
                message: `Cannot delete Time with id=${id}. Maybe Time was not found!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Could not delete Time with id=" + id
        });
    });
};
exports.remove = remove;
