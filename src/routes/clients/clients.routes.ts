import { Request, Response, Router } from "express";


const clientRoutes = Router();


clientRoutes.get("/", (req: Request, res: Response) => {
    return res.send("page index client");
});


export { clientRoutes }
