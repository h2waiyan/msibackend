import { Sequelize, DataTypes, Model } from 'sequelize';

export const initEnrollModel = (sequelize: Sequelize) => {
  const Enroll = sequelize.define("enrolls", {
    enroll_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    education: {type: DataTypes.STRING},
    mobile: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    course: {type: DataTypes.STRING},
    time: {type: DataTypes.STRING},
    days: {type: DataTypes.STRING},
  }, {
      timestamps: true
  });

  return Enroll;
};
