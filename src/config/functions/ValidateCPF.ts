const ValidateCPF = async function (strCPF: string) {

    /**
     * Removing errors and dirt from the cpf
     */
    let cpfResolve = "";
    for (let index = 0; index < strCPF.length; index++) {

        if (Number(parseInt(strCPF[index])) || strCPF[index] === "0") {
            cpfResolve = cpfResolve + strCPF[index];
        }
    }

    strCPF = cpfResolve;

    let Soma: number;
    let Resto: any;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return strCPF;
}

export { ValidateCPF }