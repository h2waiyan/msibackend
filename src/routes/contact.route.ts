import { Router } from 'express';
import * as contacts from '../controller/contact.controller';

const router = Router();

router.post("/create", contacts.create);

router.get("/getall", contacts.findAll);

router.get("/getone/:id", contacts.findOne);

router.put("/update/:id", contacts.update);

router.put("/delete/:id", contacts.remove);

export default router;
