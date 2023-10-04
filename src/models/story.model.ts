import { Sequelize, DataTypes, Model } from 'sequelize';

export const initStoryModel = (sequelize: Sequelize) => {
  const Story = sequelize.define("stories", {
    story_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {type: DataTypes.STRING},
    content: {type: DataTypes.TEXT},
    profile_img_url: {type: DataTypes.TEXT},
    story_img_url1: {type: DataTypes.TEXT},
    story_img_url2: {type: DataTypes.TEXT},
    profile_fb_url: {type: DataTypes.STRING},
    story_fb_url1: {type: DataTypes.STRING},
    story_fb_url2: {type: DataTypes.STRING},
  }, {
      timestamps: true
  });

  return Story;
};
