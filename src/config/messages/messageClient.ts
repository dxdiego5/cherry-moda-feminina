
export default function messageClient() {

    const SUCCESS = {
        create!: {
            message: "Cliente registrada com sucesso !",
        },
        update!: {
            message: "Cliente atualizada com sucesso !",
        }
    }

    const ERROR = {
        create!: {
            message: "Erro ao tentar registrar cliente !",
        },
        update!: {
            message: "Erro ao tentar atualizar cliente !",
        },
        cpfIvalid!: {
            message: "CPF não é valido !",
        },
        clientNotExists!: {
            message: "Cliente não possui registro !",
        }
    }

    const ALERT = {
        clientExists!: {
            message: "Cliente já possui registro !",
        }
    }

    return { SUCCESS, ERROR, ALERT };

}