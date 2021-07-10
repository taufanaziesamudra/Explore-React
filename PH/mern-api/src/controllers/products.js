exports.createProduct = (req, res, next) => {
    const name = req.body.name
    const price = req.body.price
    res.json(
        {
            mesaage: "Create Product Succes!!!!!",
            data: {
                id: 1,
                name: name,
                price: price
            }
        }
    )
    next()
}

exports.getAllProducts =  (req, res, next) => {
    res.json(
        {
            mesaage: "Get All Products Succes",
            data: [
                {
                    id: 1,
                    name: "Sari Gandum",
                    price: 81000
                }
            ]
        }
    )
    next()
}