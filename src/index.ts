import express from 'express';
import cors from 'cors';
import authJwt from './helpers/jwt';
import db from './models';

const path = __dirname + '/views/';

const app = express();
const corsOptions = { origin: '*' };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authJwt());
app.use(express.static(path));

db.sequelize.sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err: any) => {
    console.log('Failed to sync db: ' + err.message);
  });



import courseRoutes from './routes/course.route';
import instructorRoutes from './routes/instructor.route';
import storyRoutes from './routes/story.route';
import enrollRoutes from './routes/enroll.route';
import timeRoutes from './routes/time.route';
import sectionRoutes from './routes/section.route';
import contactRoutes from './routes/contact.route';

app.use('/api/courses', courseRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api/enrolls', enrollRoutes);
app.use('/api/times', timeRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/contacts', contactRoutes);

app.get("/", (req, res) => {
  res.sendFile(path + "index.html");
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
