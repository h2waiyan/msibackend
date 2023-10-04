"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initEnrollModel = void 0;
const sequelize_1 = require("sequelize");
const initEnrollModel = (sequelize) => {
    const Enroll = sequelize.define("enrolls", {
        enroll_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        education: { type: sequelize_1.DataTypes.STRING },
        mobile: { type: sequelize_1.DataTypes.STRING },
        email: { type: sequelize_1.DataTypes.STRING },
        course: { type: sequelize_1.DataTypes.STRING },
        time: { type: sequelize_1.DataTypes.STRING },
        days: { type: sequelize_1.DataTypes.STRING },
    }, {
        timestamps: true
    });
    return Enroll;
};
exports.initEnrollModel = initEnrollModel;
