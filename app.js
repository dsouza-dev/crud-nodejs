const express = require('express');
const app = express();
const productos = [];


app.get('/', (req, res) => {
    return res.json({'dev': 'dsouza-dev'})
})

app.post('/products', (req, res) => {
    const { nome, preco } = req.body
})

app.listen(9000, () => {
    console.log("servidor rodando na porta 9000")
})