"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSectionModel = void 0;
const sequelize_1 = require("sequelize");
const initSectionModel = (sequelize) => {
    const Section = sequelize.define("sections", {
        section_id: {
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
    return Section;
};
exports.initSectionModel = initSectionModel;
