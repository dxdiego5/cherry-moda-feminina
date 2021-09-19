import { Router, Request, Response } from 'express';


const usersRoutes = Router();

usersRoutes.get('/', (req: Request, res: Response) => {
    return res.status(200).send('user index account logins');
});

export default usersRoutes;