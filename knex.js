//require('dotenv').config(); // -r dotenv/config を使っていたらいらない　https://www.npmjs.com/package/dotenv
//connection between knex< ====> DB  
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',//jibunnno local no server
        user: process.env.DB_USER, //process.env はpcに入っている環境変数の入っているオブジェクト
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    },
    migrations: {
        directory: __dirname + '/db/migrations',// where the migration file is 
    },
    seeds: {
        directory: __dirname + '/db/seeds',
    }
});

module.exports = knex