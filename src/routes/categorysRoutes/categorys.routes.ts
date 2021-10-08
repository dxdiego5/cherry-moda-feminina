import { Router } from 'express';
import { CreateAndSaveCategoryController } from '../../modules/category/service/CreateAndSaveCategoryController';
import { ListCategoryController } from '../../modules/category/service/ListCategoryController';
import { UpdateCategoryController } from '../../modules/category/service/UpdateCategoryController';

const categoryRoutes = Router();

/**
 * Initialize controllers categorys
 */
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const createAndSaveCategoryController = new CreateAndSaveCategoryController();

// List all categorys
categoryRoutes.get('/', listCategoryController.handle);

// create and save category
categoryRoutes.post('/', createAndSaveCategoryController.handle);

// Update category
categoryRoutes.put('/:id', updateCategoryController.handle);

export { categoryRoutes };
