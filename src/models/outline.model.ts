import { Sequelize, DataTypes, Model } from 'sequelize';

export const initOutlineModel = (sequelize: Sequelize) => {
  const Outline = sequelize.define("outlines", {
    outline_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
      timestamps: true
  });

  return Outline;
};
