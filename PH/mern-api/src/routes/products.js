const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')

// CREATE -> POST : loacalhost:4000/v1/customer/product
router.post('/product', productsController.createProduct) 

// READ -< GET : localhost:4000/v1/customer/products
router.get('/products', productsController.getAllProducts)

/* router.put('/products', (req, res, next) => {
    res.json({name: "Taufan Ajie Samudro", email: "Taufaaziesamudra@gmail.com"})
    next()
}) */

/* router.delete('/products', (req, res, next) => {
    res.json({name: "Taufan Ajie Samudro", email: "Taufaaziesamudra@gmail.com"})
    next()
}) */

module.exports = router