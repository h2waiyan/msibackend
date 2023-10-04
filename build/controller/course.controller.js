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
exports.remove = exports.update = exports.findOne = exports.findAll = exports.create = exports.login = void 0;
const index_1 = __importDefault(require("../models/index"));
const Course = index_1.default.courses;
const Outline = index_1.default.outlines;
const jwt = require("jsonwebtoken");
const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username == "msi2022" && password == "msi@2022") {
        const today = new Date();
        const exp = new Date(today);
        exp.setDate(today.getDate() + 60);
        var token = jwt.sign({
            name: username,
            exp: exp.getTime() / 1000,
        }, 
        // config.jwtSecret,
        "p4sta.w1th-b0logn3s3-s@uce");
        const res_data = {
            returncode: "300",
            token: token,
        };
        // print(token);
        res.send(res_data);
    }
    else {
        const res_data = {
            returncode: "200",
        };
        res.send(res_data);
    }
};
exports.login = login;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { course_name, description, course_fb_url, image_url, duration, fees, outlines } = req.body;
    try {
        // Create the course
        const course = yield Course.create({
            course_name,
            description,
            course_fb_url,
            image_url,
            duration,
            fees,
        });
        // Create the associated outlines
        if (outlines && outlines.length > 0) {
            const outlineData = outlines.map((outlineContent) => ({
                content: outlineContent,
                course_id: course.course_id, // Set the course_id for each outline
            }));
            yield Outline.bulkCreate(outlineData);
        }
        res.send(course);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Course and Outlines.",
        });
    }
});
exports.create = create;
const findAll = (req, res) => {
    Course.findAll({
        include: [{
                model: Outline,
                as: 'outlines',
                order: [['createdAt', 'ASC']]
            }]
    })
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "error occurred in Courses"
        });
    });
};
exports.findAll = findAll;
const findOne = (req, res) => {
    const id = req.params.id;
    Course.findByPk(id, {
        include: [{ model: Outline, as: 'outlines' }]
    })
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Course with id=${id}.`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Course with id=" + id
        });
    });
};
exports.findOne = findOne;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.id;
    const { course_name, description, course_fb_url, image_url, duration, fees, outlines } = req.body;
    try {
        // Update the course information
        const [numUpdated] = yield Course.update({
            course_name,
            description,
            course_fb_url,
            image_url,
            duration,
            fees,
        }, {
            where: { course_id: courseId },
        });
        if (numUpdated === 0) {
            return res.status(404).send({
                message: `Cannot update Course with id=${courseId}. Course not found.`,
            });
        }
        // Retrieve the associated outlines
        const existingOutlines = yield Outline.findAll({
            where: { course_id: courseId },
        });
        // Update or create new outlines
        if (outlines && outlines.length > 0) {
            const outlineData = outlines.map((outlineContent) => ({
                content: outlineContent,
                course_id: courseId,
            }));
            // Update existing outlines or create new ones
            yield Promise.all(outlineData.map((data, index) => __awaiter(void 0, void 0, void 0, function* () {
                if (existingOutlines[index]) {
                    // Update existing outline
                    yield existingOutlines[index].update(data);
                }
                else {
                    // Create new outline
                    yield Outline.create(data);
                }
            })));
        }
        res.send({
            message: "Course and outlines were updated successfully.",
        });
    }
    catch (err) {
        res.status(500).send({
            message: "Error updating Course and outlines: " + err.message,
        });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courseId = req.params.id;
    try {
        // Delete associated outlines first
        yield Outline.destroy({
            where: { course_id: courseId },
        });
        // Now, delete the course
        const numDeleted = yield Course.destroy({
            where: { course_id: courseId },
        });
        if (numDeleted === 1) {
            res.send({
                message: "Course and its outlines were deleted successfully!",
            });
        }
        else {
            res.status(404).send({
                message: `Cannot delete Course with id=${courseId}. Maybe Course was not found!`,
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Could not delete Course and its outlines: " + err.message,
        });
    }
});
exports.remove = remove;
