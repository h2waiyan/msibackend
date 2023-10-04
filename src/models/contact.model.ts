import { Sequelize, DataTypes, Model } from 'sequelize';

export const initContactModel = (sequelize: Sequelize) => {
  const Contact = sequelize.define('contacts',
    {
      contact_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      location: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );

  return Contact;
};
