import { Router } from "express";
import { CreateAndSaveClientController } from "../../modules/client/services/CreateAndSaveClientController";
import { ListClientController } from "../../modules/client/services/ListClientController";
import { UpdateClientController } from "../../modules/client/services/UpdateClientController";

const clientRoutes = Router();

/**
 * Initialize controllers
 */
const listClientController = new ListClientController();
const createAndSaveClientController = new CreateAndSaveClientController();
const updateClientController = new UpdateClientController();

// get all clients 
clientRoutes.get("/", listClientController.handle);

// create and save client
clientRoutes.post("/", createAndSaveClientController.handle);

// update client
clientRoutes.put("/", updateClientController.handle);


export { clientRoutes }
