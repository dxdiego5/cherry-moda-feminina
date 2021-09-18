import { Router, Request, Response } from 'express';

const productsRoutes = Router();

productsRoutes.get('/', (req: Request, res: Response) => {
    return res.status(200).send('products index list all');
});

export default productsRoutes;