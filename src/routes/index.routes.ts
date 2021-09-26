import { Router } from "express";
import { categoryRoutes } from "./categorysRoutes/categorys.routes";
import { customerRoutes } from "./customersRoutes/customers.routes";
import usersRoutes from "./usersRoutes/users.routes";

const routes = Router();

routes.use("/account", usersRoutes);
routes.use("/customer", customerRoutes);
routes.use("/category", categoryRoutes);

export default routes;