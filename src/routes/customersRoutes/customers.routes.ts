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

// get all customers 
customerRoutes.get("/", listCustomerController.handle);

// // create and save customer
// customerRoutes.post("/", createAndSaveCustomerController.handle);

 // update customer
 customerRoutes.put("/:id", updateCustomerController.handle);


export { customerRoutes }