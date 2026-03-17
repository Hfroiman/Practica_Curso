import { Router } from "express";
import * as controller from '../controlers/carts.controllers.js'

const routercart = Router();
routercart.get('/', controller.getall);
//Pedidos
routercart.post('/', controller.create);
routercart.get('/:cid', controller.getbyid);
routercart.post('/:id/product/:pid', controller.update);
///Entrega 2
routercart.delete('/:cid/product/:pid', controller.removeSelect); //OK
routercart.put('/:cid/product/:pid', controller.updatexSelect);//OK
routercart.delete('/:cid', controller.remove);//OK


export default routercart;