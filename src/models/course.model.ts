import { Sequelize, DataTypes, Model } from 'sequelize';

export const initCourseModel = (sequelize: Sequelize) => {
  const Course = sequelize.define("courses", {
    course_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    course_fb_url: {type: DataTypes.STRING},
    image_url: {type: DataTypes.TEXT},
    duration: {type: DataTypes.STRING},
    fees: {type: DataTypes.STRING},

   }, 
   {
      timestamps: true
    }
  );

  return Course;
};
