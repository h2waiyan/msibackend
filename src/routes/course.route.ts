import { Router } from 'express';
import * as courses from '../controller/course.controller';

const router = Router();

router.post("/login", courses.login);

router.post("/create", courses.create);

router.get("/getall", courses.findAll);

router.get("/getone/:id", courses.findOne);

router.put("/update/:id", courses.update);

router.delete("/delete/:id", courses.remove);

export default router;
