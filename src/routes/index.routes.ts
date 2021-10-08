import { Router } from 'express';
import { categoryRoutes } from './categorysRoutes/categorys.routes';
import { customerRoutes } from './customersRoutes/customers.routes';
import productRoutes from './productsRoutes/products.routes';
import usersRoutes from './usersRoutes/users.routes';

const routes = Router();

routes.use('/account', usersRoutes);
routes.use('/customer', customerRoutes);
routes.use('/category', categoryRoutes);
routes.use('/product', productRoutes);

export default routes;
