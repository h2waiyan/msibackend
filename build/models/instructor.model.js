"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initInstructorModel = void 0;
const sequelize_1 = require("sequelize");
const initInstructorModel = (sequelize) => {
    const Instructor = sequelize.define("instructors", {
        instructor_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        type: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        profile_fb_url: { type: sequelize_1.DataTypes.STRING },
        profile_img_url: {
            type: sequelize_1.DataTypes.TEXT
        },
        facebook: { type: sequelize_1.DataTypes.STRING },
        gmail: { type: sequelize_1.DataTypes.STRING },
        twitter: { type: sequelize_1.DataTypes.STRING },
        linkedin: { type: sequelize_1.DataTypes.STRING },
    }, {
        timestamps: true
    });
    return Instructor;
};
exports.initInstructorModel = initInstructorModel;
