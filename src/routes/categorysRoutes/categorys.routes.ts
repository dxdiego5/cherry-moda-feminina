import { Router } from "express";
import { ListCategoryController } from "../../modules/category/service/ListCategoryController";
import { UpdateCategoryController } from "../../modules/category/service/UpdateCategoryController";


const categoryRoutes = Router();

/**
 * Initialize controllers categorys
 */
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();


// List all categorys
categoryRoutes.get("/", listCategoryController.handle);

// Update category
categoryRoutes.put("/:id", updateCategoryController.handle);



export { categoryRoutes }