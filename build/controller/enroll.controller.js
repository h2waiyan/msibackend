"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const index_1 = __importDefault(require("../models/index"));
const Enroll = index_1.default.enrolls;
const create = (req, res) => {
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
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Enroll."
        });
    });
};
exports.create = create;
const findAll = (req, res) => {
    Enroll.findAll()
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "error occurred in Enroll"
        });
    });
};
exports.findAll = findAll;
const findOne = (req, res) => {
    const id = req.params.id;
    Enroll.findByPk(id)
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Enroll with id=${id}.`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Enroll with id=" + id
        });
    });
};
exports.findOne = findOne;
const update = (req, res) => {
    Enroll.update(req.body, {
        where: { enroll_id: req.params.id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Enroll was updated successfully."
            });
        }
        else {
            res.send({
                message: `Cannot update Enroll with id=${req.params.id}. Maybe Enroll was not found or req.params is empty!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error updating Enroll with id=" + req.params.id
        });
    });
};
exports.update = update;
const remove = (req, res) => {
    const id = req.params.id;
    Enroll.destroy({
        where: { enroll_id: id }
    })
        .then((num) => {
        if (num == 1) {
            res.send({
                message: "Enroll was deleted successfully!"
            });
        }
        else {
            res.send({
                message: `Cannot delete Enroll with id=${id}. Maybe Enroll was not found!`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Could not delete Enroll with id=" + id
        });
    });
};
exports.remove = remove;
