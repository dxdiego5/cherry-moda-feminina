import "reflect-metadata";
import { createConnection } from "typeorm";
import { Client } from "../../src/entity/clients/Client";


createConnection().then(async connection => {

    console.log("Inserting a new client into the database...");
    const client = new Client();
    client.name = "Diego Felipe da Silva Bez";
    client.tel = "66996882190";
    client.email = "dxdiegofelipe@hotmail.com";
    client.cpf = "05911129140";
    client.address = "Rua santa barbara n 1531 bairro village Sorriso-MT CEP 78891-046";
    client.status = 1;

    await connection.manager.save(client);


    console.log("Saved a new client with id: " + client.id);

}).catch(error => console.log(error));
