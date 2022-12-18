require('dotenv').config();
module.exports = {
    development: {
        username: +process.env.DATABASE_USER,
        password: +process.env.DATABASE_PASS,
        database: +process.env.DATABASE_DB,
        host: +process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        dialect: "postgres",
    },
    test: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_DB,
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        dialect: "postgres",
    },
    production: {
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_DB,
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        dialect: "postgres",
    },
};