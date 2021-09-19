import { Router } from "express";
import { clientRoutes } from "./clients/clients.routes";


const routes = Router();


routes.use("/client", clientRoutes);



export default routes;