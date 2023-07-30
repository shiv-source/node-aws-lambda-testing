
const express = require("express");
const cors  = require("cors");


const app = express();

app.use(cors());
app.get('/', async(req, res, err) => {
    
    return res.status(200).send(`<h1> Home routes are working </h1>`)
})

app.get('/demo', async(req, res, err) => {
    
    return res.status(200).send(`<h1> Demo routes are working </h1>`)
})

module.exports = app;

