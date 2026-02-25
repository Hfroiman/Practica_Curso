import { Router } from "express";
import * as controller from '../controlers/products.controllers.js'

const router = Router();

router.get('/', controller.getall);
router.get('/:id', controller.getByID);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;