
import { container } from "tsyringe";
import { ICategoryRepository } from "../modules/category/repository/ICategoryRepository";
import { CategoryRepository } from "../modules/category/repository/implementations/CategoryRepository";
import { ICustomerRepository } from "../modules/customer/repository/ICustomerRepository";
import { CustomerRepository } from "../modules/customer/repository/implementations/CustomerRepository";

container.registerSingleton<ICustomerRepository>("CustomerRepository", CustomerRepository);

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);

