import { Router, Request, Response } from 'express';
import { ListAllProductController } from '../../modules/product/services/ListAllProductController';

const productRoutes = Router();

/**
 * Initialize controllers products
 */
const listAllProductController = new ListAllProductController();


// List all products
productRoutes.get('/', listAllProductController.handle);

export default productRoutes;