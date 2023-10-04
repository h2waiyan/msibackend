"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const jwt_1 = __importDefault(require("./helpers/jwt"));
const models_1 = __importDefault(require("./models"));
const path = __dirname + '/views/';
const app = (0, express_1.default)();
const corsOptions = { origin: '*' };
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, jwt_1.default)());
app.use(express_1.default.static(path));
models_1.default.sequelize.sync()
    .then(() => {
    console.log('Synced db.');
})
    .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
});
const course_route_1 = __importDefault(require("./routes/course.route"));
const instructor_route_1 = __importDefault(require("./routes/instructor.route"));
const story_route_1 = __importDefault(require("./routes/story.route"));
const enroll_route_1 = __importDefault(require("./routes/enroll.route"));
const time_route_1 = __importDefault(require("./routes/time.route"));
const section_route_1 = __importDefault(require("./routes/section.route"));
const contact_route_1 = __importDefault(require("./routes/contact.route"));
app.use('/api/courses', course_route_1.default);
app.use('/api/instructors', instructor_route_1.default);
app.use('/api/stories', story_route_1.default);
app.use('/api/enrolls', enroll_route_1.default);
app.use('/api/times', time_route_1.default);
app.use('/api/sections', section_route_1.default);
app.use('/api/contacts', contact_route_1.default);
app.get("/", (req, res) => {
    res.sendFile(path + "index.html");
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
