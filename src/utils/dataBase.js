const {prototype} = require("pg-pool");
const {password} = require("pg/lib/defaults");
const {Sequelize} = require("sequelize");

const db = new Sequelize({
    database: "todolist",
    port: 5432,
    host: "localhost",
    username: "postgres",
    password: "Trabatrix2",
    dialect: "postgres"
})

module.exports = db;
