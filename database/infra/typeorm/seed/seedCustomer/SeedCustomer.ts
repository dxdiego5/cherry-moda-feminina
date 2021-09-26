import "reflect-metadata";

import { createConnection } from "typeorm";
import faker from 'faker';
import { Customer } from "../../src/entity/customers/Customer";

createConnection().then(async connection => {

    for (var index = 0; index <= 3; index++) {

        console.log("Inserting a new CUSTOMER into the database...");

        const customer = new Customer();

        customer.name = faker.name.firstName();
        customer.phone = faker.phone.phoneNumber();
        customer.email = faker.internet.email();
        customer.cpf = "39988513054";
        customer.address = faker.address.streetAddress();
        customer.status = "active";
        customer.birth_date = faker.date.past();

        await connection.manager.save(customer);
        console.log("-PROCESS-");
        console.log(`SAVED ${index} / 3 Customers`);
        console.log("Saved a new customer with id: " + customer.id);
        console.log("---");

    }

    console.log("--> SUCCESSFUL SEEDER SAVE CUSTOMER <-- 😃 👍 ");

}).catch(error => console.log(error));