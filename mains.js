const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product');

/** 
 * App Variables--משתנים
 */
//ופע של האקספר דרכו אני נגשת לכל הפונקציות של האקספרס
const app = express()
//
const port = 3000;

//App Configuration--יצירת הAPP והגדרתוץ
//מגדיר לי איזה דף אני רוצה להציג מכל הדפים שיש לי בתוך ה-views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug"); //שימוש במנוע פאג להרצת תצוגה מונעת מידע
app.use(express.static(path.join(__dirname, "public"))); //מחזיר את הקובץ בלי שום שינוי
app.use(bodyParser.urlencoded({ extended: false }));//לוקח את הבקשה וממיר 
app.use(bodyParser.json());//לןקח בקשה וממיר לגסון
app.use(productRouter);

// const mongodb = require('mongodb');
// //נותן את האפשרות ליצור חיבור לדאטבאס במונגו
// const MongoClient = mongodb.MongoClient;
// //הנתיב
// const url = 'mongodb://localhost:27017';
// //החיבור
// //חיבור לדאט באס גם מבחוץ לפונקציה
// let DB;
// MongoClient.connect(url, { useUnifiedTopology: true }, (err, dataBase) => {
//     if (err) {
//         throw err;
//     }
//     DB = dataBase;
//     //יצירת דאט באס
//     const SuperDB = dataBase.db('SuperDB', (err) => {
//         if (err) {
//             throw err;
//         }
//     });
//     //console.log('usercollction seccess');
//     //יצירת טבלה בדאט באס
//     var productsCollaction = SuperDB.collection('products', (err) => {
//         if (err) {
//             throw err;
//         }

//         // productsCollaction.insertMany(
//         // [
//         //     { _id: 1, name: "strawberry", price:15 },
//         //     { _id: 2, name: "watermelon", price: 23 },
//         //     { _id: 3, name: "Apple", price: 16 },
//         //     { _id: 4, name: "melon", price: 19 },
//         //     { _id: 5, name: "Grapes", price: 23 },
//         //     { _id: 6, name: "orange", price: 8 },
//         // ]

//     });
//     var listProducts = productsCollaction.find().toArray();



//     // productscollction.find({}).toArray((err,res)=>{

//     //     if(err){
//     //         throw err;
//     //     }
//     //     console.log(res)
//     //     console.log('find all products')
//     // });

//     // var products={_id:4 ,name:'melon',price:13}
//     // productscollction.insertOne(products,(err)=>{
//     //     if(err){
//     //         throw err;
//     //     }
//     // });
//     //console.log('add more row')
//     dataBase.close();
// });


app.listen(port);


// // function findAllFromDB(SuperDB) {
// //     SuperDB.find().toArray((err, res) => {

// //         if (err) {
// //             throw err;
// //         }
// //         console.log(res);
// //     });
// // }


