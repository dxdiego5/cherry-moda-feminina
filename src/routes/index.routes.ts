import { Router } from "express";
import { clientRoutes } from "./clients/clients.routes";
import usersRoutes from "./usersRoutes/users.routes";


const routes = Router();


routes.use("/client", clientRoutes);
routes.use("/account", usersRoutes);



export default routes;