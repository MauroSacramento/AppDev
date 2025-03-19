const express = require('express');
const app = express()
const routes = require('./router')
const mongoose = require('mongoose');

//mongoose.connect()

app.use(express.json());
app.use("/api", routes)


app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
})