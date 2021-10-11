export default function messageUser() {
    //success message
    const SUCCESS = {
        create: {
            message: 'User registered successfully!',
        },
        update: {
            message: 'User updated successfully!',
        },
    };

    //error message
    const ERROR = {
        userNotExists: {
            message: 'User does not have registration!',
        },
    };

    //alert message
    const ALERT = {};

    return { SUCCESS, ERROR, ALERT };
}
