import { Router } from 'express';
import * as stories from '../controller/story.controller';

const router = Router();

router.post("/create", stories.create);

router.get("/getall", stories.findAll);

router.get("/getone/:id", stories.findOne);

router.put("/update/:id", stories.update);

router.delete("/delete/:id", stories.remove);

export default router;
