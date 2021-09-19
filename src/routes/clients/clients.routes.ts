import { Router } from "express";
import { ListClientController } from "../../modules/client/services/ListClientController";

const clientRoutes = Router();


/**
 * Initialize controllers
 */
const listClientController = new ListClientController();

// get all clients 
clientRoutes.get("/", listClientController.handle);
clientRoutes.post("/", listClientController.handle);


export { clientRoutes }
