import { Router } from "express";
import productsRoutes from "./productsRoutes/products.routes";
import usersRoutes from "./usersRoutes/users.routes";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/account", usersRoutes);

export default routes;