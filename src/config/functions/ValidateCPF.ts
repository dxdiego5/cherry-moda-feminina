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

    return cpfResolve;
}

export { ValidateCPF }