"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initCourseModel = void 0;
const sequelize_1 = require("sequelize");
const initCourseModel = (sequelize) => {
    const Course = sequelize.define("courses", {
        course_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        course_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
        },
        course_fb_url: { type: sequelize_1.DataTypes.STRING },
        image_url: { type: sequelize_1.DataTypes.TEXT },
        duration: { type: sequelize_1.DataTypes.STRING },
        fees: { type: sequelize_1.DataTypes.STRING },
    }, {
        timestamps: true
    });
    return Course;
};
exports.initCourseModel = initCourseModel;
