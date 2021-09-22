
export default function messageCategory() {



    const SUCCESS = {
        create!: {
            message: "Categoria registrada com sucesso !",
        },
        update!: {
            message: "Categoria atualizada com sucesso !",
        }
    }




    const ERROR = {
        create!: {
            message: "Erro ao tentar registrar categoria !",
        },
        update!: {
            message: "Erro ao tentar atualizar categoria !",
        }
    }




    const ALERT = {
        create!: {
            message: "Categoria já possui registro !",
        }
    }


    

    return { SUCCESS, ERROR, ALERT };

}