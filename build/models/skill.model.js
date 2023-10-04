"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSkillModel = void 0;
const sequelize_1 = require("sequelize");
const initSkillModel = (sequelize) => {
    const Skill = sequelize.define("skills", {
        skill_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        content: { type: sequelize_1.DataTypes.TEXT },
        skill_fb_url: { type: sequelize_1.DataTypes.STRING },
        skill_img_url: { type: sequelize_1.DataTypes.TEXT },
    }, {
        timestamps: true
    });
    return Skill;
};
exports.initSkillModel = initSkillModel;
