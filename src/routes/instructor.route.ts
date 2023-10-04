import { Router } from 'express';
import * as instructors from '../controller/instructor.controller';

const router = Router();

router.post("/create", instructors.create);

router.get("/getall", instructors.findAll);

router.get("/getone/:id", instructors.findOne);

router.put("/update/:id", instructors.update);

router.delete("/delete/:id", instructors.remove);

export default router;
