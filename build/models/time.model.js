"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTimeModel = void 0;
const sequelize_1 = require("sequelize");
const initTimeModel = (sequelize) => {
    const Time = sequelize.define("times", {
        time_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: true
    });
    return Time;
};
exports.initTimeModel = initTimeModel;
