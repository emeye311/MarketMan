const mongodb = require('mongodb');
//נותן את האפשרות ליצור חיבור לדאטבאס במונגו
const MongoClient = mongodb.MongoClient;
//הנתיב
const url = 'mongodb://localhost:27017';
const db = 'SuperDB';

const getAllProducts = async () => {
    let products = [];

    MongoClient.connect(url, (err, client) => {
        if (err) {
            throw err;
        }

        //יצירת דאט באס
        const superDB = client.db(db, (err) => {
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
                return val ;
            })
            .catch((error) => {
                console.log('Oy va avoy!');
                throw error;
            })
            .finally(() => {
                client.close();
            });
    });

    return products;
}


module.exports = {
    getAllProducts
}