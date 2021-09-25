import { Router } from "express";
import { CreateAndSaveCustomerController } from "../../modules/customer/services/CreateAndSaveCustomerController";
import { ListCustomerController } from "../../modules/customer/services/ListCustomerController";
import { UpdateCustomerController } from "../../modules/customer/services/UpdateCustomerController";

const customerRoutes = Router();

/**
 * Initialize controllers
 */
const listCustomerController = new ListCustomerController();
const createAndSaveCustomerController = new CreateAndSaveCustomerController();
const updateCustomerController = new UpdateCustomerController();

// get all clients 
customerRoutes.get("/", listCustomerController.handle);

// create and save client
customerRoutes.post("/", createAndSaveCustomerController.handle);

// update client
customerRoutes.put("/", updateCustomerController.handle);


export { customerRoutes }
