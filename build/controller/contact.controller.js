"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = void 0;
const index_1 = __importDefault(require("../models/index"));
const Contact = index_1.default.contacts;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { location, email, phone } = req.body;
        const contact = yield Contact.create({ location, email, phone });
        res.send(contact);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Contact.",
        });
    }
});
exports.create = create;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contacts = yield Contact.findAll();
        res.send(contacts);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Error occurred while retrieving Contacts.",
        });
    }
});
exports.findAll = findAll;
const findOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const contact = yield Contact.findByPk(id);
        if (contact) {
            res.send(contact);
        }
        else {
            res.status(404).send({
                message: `Cannot find Contact with id=${id}.`,
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Error retrieving Contact.",
        });
    }
});
exports.findOne = findOne;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const { location, email, phone } = req.body;
        const [numUpdated] = yield Contact.update({ location, email, phone }, { where: { contact_id: id } });
        if (numUpdated === 1) {
            res.send({
                message: "Contact was updated successfully.",
            });
        }
        else {
            res.status(404).send({
                message: `Cannot update Contact with id=${id}. Maybe Contact was not found or req.params is empty!`,
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Error updating Contact.",
        });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const numDeleted = yield Contact.destroy({ where: { contact_id: id } });
        if (numDeleted === 1) {
            res.send({
                message: "Contact was deleted successfully!",
            });
        }
        else {
            res.status(404).send({
                message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`,
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Could not delete Contact.",
        });
    }
});
exports.remove = remove;
