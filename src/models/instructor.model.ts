import { Sequelize, DataTypes, Model } from 'sequelize';

export const initInstructorModel = (sequelize: Sequelize) => {
  const Instructor = sequelize.define("instructors", {
    instructor_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {type: DataTypes.STRING, allowNull: true},
    profile_fb_url: {type: DataTypes.STRING},
    profile_img_url: {
        type: DataTypes.TEXT
    },
    facebook: {type: DataTypes.STRING},
    gmail: {type: DataTypes.STRING},
    twitter: {type: DataTypes.STRING},
    linkedin: {type: DataTypes.STRING},
  }, {
      timestamps: true
  });

  return Instructor;
};
