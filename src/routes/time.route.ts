import { Router } from 'express';
import * as times from '../controller/time.controller';

const router = Router();

router.post("/create", times.create);

router.get("/getall", times.findAll);

router.get("/getone/:id", times.findOne);

router.put("/update/:id", times.update);

router.delete("/delete/:id", times.remove);

export default router;
