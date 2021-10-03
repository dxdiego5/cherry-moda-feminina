import { Router, Request, Response } from 'express';
import { CreateAndSaveProductController } from '../../modules/product/services/CreateAndSaveProductController';
import { ListAllProductController } from '../../modules/product/services/ListAllProductController';

const productRoutes = Router();

/**
 * Initialize controllers products
 */
const listAllProductController = new ListAllProductController();
const createAndSaveProductController = new CreateAndSaveProductController();


// List all products
productRoutes.get('/', listAllProductController.handle);

//Create and save products
productRoutes.post('/', createAndSaveProductController.handle);

export default productRoutes;