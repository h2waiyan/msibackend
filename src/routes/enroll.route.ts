import { Router } from 'express';
import * as enrolls from '../controller/enroll.controller';

const router = Router();

router.post("/create", enrolls.create);

router.get("/getall", enrolls.findAll);

router.get("/getone/:id", enrolls.findOne);

router.put("/update/:id", enrolls.update);

router.delete("/delete/:id", enrolls.remove);

export default router;