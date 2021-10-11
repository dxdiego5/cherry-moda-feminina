import { Router } from 'express';
import { StorageProductController } from '../../modules/storageProduct/services/StorageProductController';

const storageProductRoutes = Router();

/**
 * Initialize controllers products
 */
const storageProductController = new StorageProductController();

// Lis all inputs and outputs storages products
storageProductRoutes.get('/', storageProductController.handle);

// create and save input or output storage products
storageProductRoutes.post('/', storageProductController.handle);

export default storageProductRoutes;
