"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initOutlineModel = void 0;
const sequelize_1 = require("sequelize");
const initOutlineModel = (sequelize) => {
    const Outline = sequelize.define("outlines", {
        outline_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        content: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
    }, {
        timestamps: true
    });
    return Outline;
};
exports.initOutlineModel = initOutlineModel;
