import { Customer } from "../../../../database/infra/typeorm/src/entity/customers/Customer";
import { ICreateCustomerDTO } from "../../DTOs/ICreateCustomerDTO";

interface ICustomerRepository {
    createAndSave({ name, phone, email, cpf, address }: ICreateCustomerDTO): Promise<void>;
    listAllCustomer(): Promise<Customer[]>;
    findByCustomerExists({ email, cpf }): Promise<Customer[]>;
    findByCustomerId(id: string): Promise<Customer>;
    update(customer: Customer): Promise<Customer>;
}


export { ICustomerRepository }