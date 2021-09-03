//require('dotenv').config();　// -r dotenv/config を使っていたらいらない　https://www.npmjs.com/package/dotenv

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.DB_USER, //process.env はpcに入っている環境変数の入っているオブジェクト
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    }
});

module.exports = knex