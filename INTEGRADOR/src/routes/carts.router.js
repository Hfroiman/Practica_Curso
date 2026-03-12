import { Router } from "express";
import * as controller from '../controlers/carts.controllers.js'

const routercart = Router();
routercart.get('/', controller.getall);
routercart.delete('/:id', controller.remove);
//Pedidos
routercart.post('/', controller.create);
routercart.get('/:id', controller.getbyid);
routercart.post('/:id/product/:pid', controller.update);

export default routercart;