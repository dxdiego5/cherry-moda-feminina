import { Router, Request, Response } from 'express';
import { CreateAndSaveProductController } from '../../modules/product/services/CreateAndSaveProductController';
import { ListAllProductController } from '../../modules/product/services/ListAllProductController';
import { UpdateProductController } from '../../modules/product/services/UpdateProductController';

const productRoutes = Router();

/**
 * Initialize controllers products
 */
const listAllProductController = new ListAllProductController();
const createAndSaveProductController = new CreateAndSaveProductController();
const updateProductController = new UpdateProductController();

// List all products
productRoutes.get('/', listAllProductController.handle);

//Create and save products
productRoutes.post('/', createAndSaveProductController.handle);

// Update products
productRoutes.put('/:id', updateProductController.handle);

export default productRoutes;
