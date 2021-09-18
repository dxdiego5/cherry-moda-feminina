import "reflect-metadata";


import { createConnection } from "typeorm";
import { hashPassword } from "../../../../../src/config/functions/HahsFunctions";
import { User } from "../../src/entity/users/User";

createConnection().then(async connection => {

    console.log("Inserting a new client into the database...");
    const user = new User();
    user.name = "Diego Felipe";
    user.email = "dxdiegofelipe@hotmail.com";

    // encrypt password
    user.password = await hashPassword("12345");

    user.isAdmin = true;
    user.status = 1;

    await connection.manager.save(user);

    console.log("Saved a new user with id: " + user.id);

}).catch(error => console.log(error));