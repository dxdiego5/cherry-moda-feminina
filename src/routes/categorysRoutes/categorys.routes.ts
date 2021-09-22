import { Router } from "express";
import { ListCategoryController } from "../../modules/category/service/ListCategoryController";


const categoryRoutes = Router();


const listCategoryController = new ListCategoryController();


// List all categorys
categoryRoutes.get("/", listCategoryController.handle);



export { categoryRoutes }