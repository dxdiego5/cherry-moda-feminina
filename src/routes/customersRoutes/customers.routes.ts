import { Router } from 'express';
import { CreateAndSaveCustomerController } from '../../modules/customer/service/CreateAndSaveCustomerController';
import { ListCustomerController } from '../../modules/customer/service/ListCustomerController';
import { UpdateCustomerController } from '../../modules/customer/service/UpdateCustomerController';

const customerRoutes = Router();

/**
 * Initialize controllers
 */
const listCustomerController = new ListCustomerController();
const createAndSaveCustomerController = new CreateAndSaveCustomerController();
const updateCustomerController = new UpdateCustomerController();

// get all customers
customerRoutes.get('/', listCustomerController.handle);

// create and save customer
customerRoutes.post('/', createAndSaveCustomerController.handle);

// update customer
customerRoutes.put('/:id', updateCustomerController.handle);

export { customerRoutes };
