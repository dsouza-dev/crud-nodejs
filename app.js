const express = require('express');
const app = express();
const cors = require('cors');
const { randomUUID } = require('crypto');

const products = [];

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    return res.json({ 'dev': 'dsouza-dev' })
})

// Create - Crud
app.post('/products', (req, res) => {
    const { name, price } = req.body
    let id_gerado = randomUUID()
    products.push({ "id": id_gerado, "name": name, "price": price })
    return res.json({ "success": true, "return": { "id": id_gerado, "name": name, "price": price } })
})

// Read - cRud
app.get('/products', (req, res) => {
    return res.json(products)
})

// Read for id - cRud
app.get('/products/:id', (req, res) => {
    const { id } = req.params
    const product = products.find(product => product.id === id)
    return res.json(product)
})

// Update -- crUd
app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { name, price } = req.body
    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex] = {
        ...products[productIndex],
        name,
        price
    }
    return res.json({ "success": true, "message": "Produto alterado com sucesso!" })
})

// Delete -- cruD
app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    const productIndex = products.findIndex(product => product.id === id);
    products.splice(productIndex, 1)
    return res.json({ "success": true, "message": "Produto excluído com sucesso!" })
});




app.listen(9000, () => {
    console.log("servidor rodando na porta 9000")
})