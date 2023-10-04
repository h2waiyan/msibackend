import { Router } from 'express';
import * as sections from '../controller/section.controller';

const router = Router();

router.post("/create", sections.create);

router.get("/getall", sections.findAll);

router.get("/getone/:id", sections.findOne);

router.put("/update/:id", sections.update);

router.delete("/delete/:id", sections.remove);

export default router;
