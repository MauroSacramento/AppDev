const express = require('express');
const app = express()
const routes = require('./router')
const mongoose = require('mongoose');

//9Dfm33gHpdSa3eJ
mongoose.connect("mongodb+srv://omnistack:9Dfm33gHpdSa3eJ@cluster0.pny26.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.use(express.json());
app.use("/api", routes)


app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333");
})