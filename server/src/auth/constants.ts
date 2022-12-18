require('dotenv').config();
export const jwtConstants = {
    secret: process.env.BACKEND_SECRETKEY,
};
