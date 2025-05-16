//Define un método apropiado para hacer hash a las contraseñas (añadiendo una sal diferente a cada contraseña).
//Actualiza las contraseñas de la base de datos.
//Actualiza los métodos para guardar usuarios nuevos y para comparar (login) las credenciales.

import crypto from 'crypto';

export const getSalt = () => {
    return crypto
        .randomBytes(50)
        .toString('base64url')
        .substring(0, process.env.SALT_SIZE);
};

export const hashPassword = (text, salt) => {
    const hashing = crypto.createHash('sha512');
    return hashing.update(salt + text).digest('base64url');
};
