"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initContactModel = void 0;
const sequelize_1 = require("sequelize");
const initContactModel = (sequelize) => {
    const Contact = sequelize.define('contacts', {
        contact_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        location: {
            type: sequelize_1.DataTypes.STRING,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        timestamps: true,
    });
    return Contact;
};
exports.initContactModel = initContactModel;
