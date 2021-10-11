import { container } from 'tsyringe';
import { ICategoryRepository } from '../modules/category/repository/ICategoryRepository';
import { CategoryRepository } from '../modules/category/repository/implementations/CategoryRepository';
import { ICustomerRepository } from '../modules/customer/repository/ICustomerRepository';
import { CustomerRepository } from '../modules/customer/repository/implementations/CustomerRepository';
import { ProductRepository } from '../modules/product/repository/implementations/ProductRepository';
import { IProductRepository } from '../modules/product/repository/IProductRepository';

import '../container/provider';
import { IStorageProduct } from '../modules/storageProduct/repository/IStorageProduct';
import { StorageProductRepository } from '../modules/storageProduct/repository/implementations/StorageProductRepository';

container.registerSingleton<ICustomerRepository>(
    'CustomerRepository',
    CustomerRepository
);

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository',
    CategoryRepository
);

container.registerSingleton<IProductRepository>(
    'ProductRepository',
    ProductRepository
);

container.registerSingleton<IStorageProduct>(
    'StorageProductRepository',
    StorageProductRepository
);
