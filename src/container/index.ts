
import { container } from "tsyringe";
import { IClientRepository } from "../modules/client/repository/IClientRepository";
import { ClientRepository } from "../modules/client/repository/implementations/ClientRepository";

container.registerSingleton<IClientRepository>("ClientRepository", ClientRepository);