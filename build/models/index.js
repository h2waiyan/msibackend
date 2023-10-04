"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const contact_model_1 = require("./contact.model");
const course_model_1 = require("./course.model");
const enroll_model_1 = require("./enroll.model");
const instructor_model_1 = require("./instructor.model");
const outline_model_1 = require("./outline.model");
const section_model_1 = require("./section.model");
const skill_model_1 = require("./skill.model");
const story_model_1 = require("./story.model");
const time_model_1 = require("./time.model");
// Import your Sequelize configuration
const db_config_1 = require("../config/db.config");
// Initialize Sequelize
const sequelize = new sequelize_1.Sequelize(db_config_1.dbConfig.DB, db_config_1.dbConfig.USER, db_config_1.dbConfig.PASSWORD, {
    host: db_config_1.dbConfig.HOST,
    dialect: "postgres",
    operatorsAliases: false,
    pool: {
        max: db_config_1.dbConfig.pool.max,
        min: db_config_1.dbConfig.pool.min,
        acquire: db_config_1.dbConfig.pool.acquire,
        idle: db_config_1.dbConfig.pool.idle,
    },
});
// Create an object to store models
const db = {};
// Create instances of models
db.contacts = (0, contact_model_1.initContactModel)(sequelize);
db.courses = (0, course_model_1.initCourseModel)(sequelize);
db.enrolls = (0, enroll_model_1.initEnrollModel)(sequelize);
db.instructors = (0, instructor_model_1.initInstructorModel)(sequelize);
db.outlines = (0, outline_model_1.initOutlineModel)(sequelize);
db.sections = (0, section_model_1.initSectionModel)(sequelize);
db.skills = (0, skill_model_1.initSkillModel)(sequelize);
db.stories = (0, story_model_1.initStoryModel)(sequelize);
db.times = (0, time_model_1.initTimeModel)(sequelize);
// Define associations
db.courses.hasMany(db.outlines, { as: 'outlines', foreignKey: 'course_id' });
db.outlines.belongsTo(db.courses, { foreignKey: 'course_id' });
db.instructors.hasMany(db.skills, { as: 'skills', foreignKey: 'instructor_id' });
db.skills.belongsTo(db.instructors, { foreignKey: 'instructor_id' });
// Add Sequelize and DataTypes to the db object
db.sequelize = sequelize;
db.DataTypes = sequelize_1.DataTypes;
exports.default = db;
