
export default function messageCustomer() {

    //success message
    const SUCCESS = {
        create!: {
            message: "Customer registered successfully!",
        },
        update!: {
            message: "Customer updated successfully!",
        }
    }

    //error message
    const ERROR = {
        create!: {
            message: "Error trying to register customer!",
        },
        update!: {
            message: "Error trying to update client!",
        },
        cpfIvalid!: {
            message: "CPF is not valid!",
        },
        customerNotExists!: {
            message: "Customer does not have registration!",
        },
        statusIncorrect!: {
            message: "Customer status is incorrect!"
        },
        DateOfBirthNotValid!: {
            message: "Date of birth is not valid!"
        }
    }

    //alert message
    const ALERT = {
        customerExists!: {
            message: "Customer already has registration!",
        },
        customerNotFound!: {
            message: "No customer record found!"
        }
    }
    
    return { SUCCESS, ERROR, ALERT };
}