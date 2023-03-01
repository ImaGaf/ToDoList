const express = require("express");
const PORT = 8000;
const db = require('./utils/dataBase');
const listRoutes = require ('./routes/list.route');
const cors = require('cors');
const List = require("./models/todo.models");

const app = express();

app.use(cors());
app.use(express.json());
app.use(listRoutes)

List;



db.authenticate()
 .then(()=>{
    console.log("Conexión a base de datos Ok")
 })
 .catch((error)=>{
    console.log(error)
 })


db.sync()
 .then(()=>{
    console.log("Base de datos sincronizada")
 })
 .catch((error)=>{
    console.log(error)
 })



app.get('/', (req,res)=>{
    res.send("Bienvenido a mi servidor")
})

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})