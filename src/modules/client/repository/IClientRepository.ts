import { Client } from "../../../../database/infra/typeorm/src/entity/clients/Client";
import { ICreateClientDTO } from "../DTOs/ICreateClientDTO";

interface IClientRepository {
    createAndSave({ name, tel, email, cpf, address }: ICreateClientDTO): Promise<void>;
    listAllClient(): Promise<Client[]>;
}


export { IClientRepository }