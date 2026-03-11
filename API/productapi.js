import exp from 'express'
export const productApp=exp.Router()
let product = [];

// Get all products
productApp.get('/product', (req, res) => {
    res.json({ message: "all product details", payload: product });
});

// Get product by brand
productApp.get('/product/:brand', (req, res) => {
    let brandOfUrl = req.params.brand;

    let pro = product.find(prodObj => prodObj.brand === brandOfUrl);

    if (pro === undefined) {
        return res.json({ message: "product not found" });
    }

    res.json({ message: "details of product", payload: pro });
});

// Create product
productApp.post('/product', (req, res) => {
    const newProduct = req.body;

    product.push(newProduct);

    res.json({ message: "product is created" });
});

// Update product
productApp.put('/product', (req, res) => {

    let modifiedProduct = req.body;

    let index = product.findIndex(prodObj => prodObj.id === modifiedProduct.id);

    if (index === -1) {
        return res.json({ message: "product not found" });
    }

    product.splice(index, 1, modifiedProduct);

    res.json({ message: "product updated" });
});

// Delete product
productApp.delete('/product/:productId', (req, res) => {

    let idOfProduct = Number(req.params.productId);

    let index = product.findIndex(prodObj => prodObj.productId === idOfProduct);

    if (index === -1) {
        return res.json({ message: "product not found to delete" });
    }

    product.splice(index, 1);

    res.json({ message: "product removed" });
});


//create products API with below operations
//create new product({productId,name,brand,price})
//read all the products
//read all products by brand
//update a product
//delete a product by id
