
import { container } from "tsyringe";
import { ICategoryRepository } from "../modules/category/repository/ICategoryRepository";
import { CategoryRepository } from "../modules/category/repository/implementations/CategoryRepository";
import { IClientRepository } from "../modules/client/repository/IClientRepository";
import { ClientRepository } from "../modules/client/repository/implementations/ClientRepository";

container.registerSingleton<IClientRepository>("ClientRepository", ClientRepository);

container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);