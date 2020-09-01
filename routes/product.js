var express = require("express");
const { route } = require("./users");
var router = express.Router();

const mongo = require("../mongo");

/*
    CreateReadUpdateDelete (CRUD)

    Web API (Web Apllication Programming Interface)

    HTPP Verbs:
        POST (Create): /products {name: 'ball', price: 20}
        GET (Read)
        PUT (Update) /products/:{id} {name: 'couch'}
        DELETE (Delete) /products/:{id}
*/

// Client (GET http://localhost:3000/products) =>
// mains.js (express.use(productsRouter)) =>
// product.js (router.get('/products'))

router.get("/products", async (req, res) => {
  const products = await mongo.getAllProducts();

  res.render("allProducts", {
    products: products,
  });
});

module.exports = router;
