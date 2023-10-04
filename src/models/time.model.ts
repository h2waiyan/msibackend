import { Sequelize, DataTypes, Model } from 'sequelize';

export const initTimeModel = (sequelize: Sequelize) => {
  const Time = sequelize.define("times", {
    time_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
      timestamps: true
  });

  return Time;
};
