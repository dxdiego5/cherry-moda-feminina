import { Router } from "express";
import { categoryRoutes } from "./categorysRoutes/categorys.routes";
import { clientRoutes } from "./clientsCategorys/clients.routes";
import usersRoutes from "./usersRoutes/users.routes";


const routes = Router();

routes.use("/account", usersRoutes);
routes.use("/client", clientRoutes);
routes.use("/category", categoryRoutes);



export default routes;