import { Sequelize, DataTypes, Model } from 'sequelize';

export const initSectionModel = (sequelize: Sequelize) => {
  const Section = sequelize.define("sections", {
    section_id: {
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

  return Section;
};
