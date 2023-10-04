import { Sequelize, DataTypes, Model } from 'sequelize';

export const initSkillModel = (sequelize: Sequelize) => {
  const Skill = sequelize.define("skills", {
    skill_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {type: DataTypes.TEXT},
    skill_fb_url: {type: DataTypes.STRING},
    skill_img_url: {type: DataTypes.TEXT},
  }, {
      timestamps: true
  });

  return Skill;
};
