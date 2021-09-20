import { Router } from "express";
import { CreateAndSaveClientController } from "../../modules/client/services/CreateAndSaveClientController";
import { ListClientController } from "../../modules/client/services/ListClientController";

const clientRoutes = Router();

/**
 * Initialize controllers
 */
const listClientController = new ListClientController();
const createAndSaveClientController = new CreateAndSaveClientController();

// get all clients 
clientRoutes.get("/", listClientController.handle);

// create and save client
clientRoutes.post("/", createAndSaveClientController.handle);


export { clientRoutes }
