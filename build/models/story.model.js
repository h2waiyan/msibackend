"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initStoryModel = void 0;
const sequelize_1 = require("sequelize");
const initStoryModel = (sequelize) => {
    const Story = sequelize.define("stories", {
        story_id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        type: { type: sequelize_1.DataTypes.STRING },
        content: { type: sequelize_1.DataTypes.TEXT },
        profile_img_url: { type: sequelize_1.DataTypes.TEXT },
        story_img_url1: { type: sequelize_1.DataTypes.TEXT },
        story_img_url2: { type: sequelize_1.DataTypes.TEXT },
        profile_fb_url: { type: sequelize_1.DataTypes.STRING },
        story_fb_url1: { type: sequelize_1.DataTypes.STRING },
        story_fb_url2: { type: sequelize_1.DataTypes.STRING },
    }, {
        timestamps: true
    });
    return Story;
};
exports.initStoryModel = initStoryModel;
