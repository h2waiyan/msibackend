
import { Sequelize, DataTypes, Model } from 'sequelize';
import { initContactModel } from './contact.model';
import { initCourseModel } from './course.model';
import { initEnrollModel } from './enroll.model';
import { initInstructorModel } from './instructor.model';
import { initOutlineModel } from './outline.model';
import { initSectionModel } from './section.model';
import { initSkillModel } from './skill.model';
import { initStoryModel } from './story.model';
import { initTimeModel } from './time.model';

// Import your Sequelize configuration
import { dbConfig } from '../config/db.config';

// Initialize Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: "postgres",
  operatorsAliases: false as any,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// Create an object to store models
const db: Record<string, any> = {};

// Create instances of models
db.contacts = initContactModel(sequelize);
db.courses = initCourseModel(sequelize);
db.enrolls = initEnrollModel(sequelize);
db.instructors = initInstructorModel(sequelize);
db.outlines = initOutlineModel(sequelize);
db.sections = initSectionModel(sequelize);
db.skills = initSkillModel(sequelize);
db.stories = initStoryModel(sequelize);
db.times = initTimeModel(sequelize);

// Define associations
db.courses.hasMany(db.outlines, { as: 'outlines', foreignKey: 'course_id' });
db.outlines.belongsTo(db.courses, { foreignKey: 'course_id' });

db.instructors.hasMany(db.skills, { as: 'skills', foreignKey: 'instructor_id' });
db.skills.belongsTo(db.instructors, { foreignKey: 'instructor_id' });

// Add Sequelize and DataTypes to the db object
db.sequelize = sequelize;
db.DataTypes = DataTypes;

export default db;
