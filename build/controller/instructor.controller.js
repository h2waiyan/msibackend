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
const Instructor = index_1.default.instructors;
const Skill = index_1.default.skills;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, profile_img_url, profile_fb_url, type, facebook, gmail, twitter, linkedin, skills } = req.body;
    try {
        // Create the instructor
        const instructor = yield Instructor.create({
            name,
            profile_img_url,
            profile_fb_url,
            type,
            facebook,
            gmail,
            twitter,
            linkedin,
        });
        // Retrieve the created instructor's instructor_id
        const instructorId = instructor.instructor_id;
        // Create the associated skills
        if (skills && skills.length > 0) {
            const skillData = skills.map((skill) => ({
                name: skill.name,
                content: skill.content,
                skill_img_url: skill.skill_img_url,
                skill_fb_url: skill.skill_fb_url,
                instructor_id: instructorId, // Set the instructor_id for each skill
            }));
            yield Skill.bulkCreate(skillData);
        }
        res.send(instructor);
    }
    catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Instructor and skills.",
        });
    }
});
exports.create = create;
const findAll = (req, res) => {
    Instructor.findAll({
        include: [{ model: Skill, as: 'skills' }]
    })
        .then((data) => {
        res.send(data);
    })
        .catch((err) => {
        res.status(500).send({
            message: err.message || "error occurred in Instructors"
        });
    });
};
exports.findAll = findAll;
const findOne = (req, res) => {
    const id = req.params.id;
    Instructor.findByPk(id, {
        include: [{ model: Skill, as: 'skills' }]
    })
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).send({
                message: `Cannot find Instructor with id=${id}.`
            });
        }
    })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Instructor with id=" + id
        });
    });
};
exports.findOne = findOne;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instructorId = req.params.id;
    const { name, profile_img_url, profile_fb_url, type, facebook, gmail, twitter, linkedin, skills } = req.body;
    try {
        // Update the instructor information
        const [numUpdated] = yield Instructor.update({
            name,
            profile_img_url,
            profile_fb_url,
            type,
            facebook,
            gmail,
            twitter,
            linkedin,
        }, {
            where: { instructor_id: instructorId },
        });
        if (numUpdated === 0) {
            return res.status(404).send({
                message: `Cannot update Instructor with id=${instructorId}. Instructor not found.`,
            });
        }
        // Retrieve the associated skills
        const existingSkills = yield Skill.findAll({
            where: { instructor_id: instructorId },
        });
        // Update or create skills based on skill_id
        if (skills && skills.length > 0) {
            const updatedSkills = [];
            const newSkills = [];
            skills.forEach((skill) => {
                const skillData = {
                    name: skill.name,
                    content: skill.content,
                    skill_img_url: skill.skill_img_url,
                    skill_fb_url: skill.skill_fb_url,
                    instructor_id: instructorId,
                };
                const existingSkill = existingSkills.find((s) => s.skill_id === skill.skill_id);
                if (existingSkill) {
                    // Update existing skill
                    updatedSkills.push(existingSkill.update(skillData));
                }
                else {
                    // Create new skill
                    newSkills.push(Skill.create(skillData));
                }
            });
            // Wait for all updates and creations to finish
            yield Promise.all([...updatedSkills, ...newSkills]);
        }
        res.send({
            message: "Instructor and skills were updated successfully.",
        });
    }
    catch (err) {
        res.status(500).send({
            message: "Error updating Instructor and skills: " + err.message,
        });
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const instructorId = req.params.id;
    try {
        // Delete associated skills first
        yield Skill.destroy({
            where: { instructor_id: instructorId },
        });
        // Now, delete the instructor
        const numDeleted = yield Instructor.destroy({
            where: { instructor_id: instructorId },
        });
        if (numDeleted === 1) {
            res.send({
                message: "instructor and its skills were deleted successfully!",
            });
        }
        else {
            res.status(404).send({
                message: `Cannot delete instructor with id=${instructorId}. Maybe instructor was not found!`,
            });
        }
    }
    catch (err) {
        res.status(500).send({
            message: "Could not delete instructor and its skills: " + err.message,
        });
    }
});
exports.remove = remove;
