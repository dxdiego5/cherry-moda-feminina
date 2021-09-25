import { getRepository, Repository } from "typeorm";
import { Customer } from "../../../../../database/infra/typeorm/src/entity/customers/Customer";
import { ICreateCustomerDTO } from "../../../DTOs/ICreateCustomerDTO";
import { ICustomerRepository } from "../ICustomerRepository";

class CustomerRepository implements ICustomerRepository {

    private repository: Repository<Customer>;

    constructor() {
        // start repository client
        this.repository = getRepository(Customer);
    }

    /**
     * find client by ID
     */
    async findByCustomerId(id: string): Promise<Customer> {
        return await this.repository.findOne(id);
    }

    /**
     * Update client
     */
    async update(customer: Customer): Promise<Customer> {
        return await this.repository.save(customer);
    }

    /**
     * searching client exits register with cpf or email
     */
    async findByCustomerExists({ email, cpf }): Promise<Customer[]> {
        const client = await this.repository.find({
            where: [{ email: email }, { cpf: cpf }],
        });
        return client;
    }

    /**
     * list all clients
     */
    async listAllCustomer(): Promise<Customer[]> {
        return await this.repository.find();
    }

    /**
     * creating customer and then saving to database
     */
    async createAndSave({ name, phone, email, cpf, address }: ICreateCustomerDTO): Promise<void> {
        const customer = this.repository.create({ name, phone, email, cpf, address });
        await this.repository.save(customer);
    }
}

export { CustomerRepository }