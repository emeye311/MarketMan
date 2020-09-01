var express = require('express');
const { route } = require('./users');
var router = express.Router();

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

router.get('/products', (req, res) => {
    MongoClient.connect(url, (err, client) => {
        if (err) {
            throw err;
        }

        //יצירת דאט באס
        const superDB = client.db('SuperDB', (err) => {
            if (err) {
                throw err;
            }
        });

        //יצירת טבלה בדאט באס
        let productsCollection = superDB.collection('products', (err) => {
            if (err) {
                throw err;
            }
        });

        productsCollection.find().toArray()
            .then((val) => {
                res.render('allProducts', {
                    products: val
                })
            })
            .catch((error) => {
                console.log('Oy va avoy!');
                throw error;
            })
            .finally(() => {
                client.close();
            });
    })
});

module.exports = router;