import { hash } from 'bcrypt';

/**
 * Creating password encryption using hash
 */
const hashPassword = async function (password: string) {
    return await hash(password, 8);
};

export { hashPassword };
