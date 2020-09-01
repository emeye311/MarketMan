const pug = require('pug');
const MongoClient = require('mongodb').MongoClient;
 //const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'marketDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true} );

// Use connect method to connect to the Server
client.connect(function(err) {
  //assert.equal(null, err);
  if(err){
    console.log(err);
  }
  else{
    console.log("Connected successfully to server");

  const db = client.db(dbName);
  const prodacts=  db.collection("prodacts")

     dbName.find({}).toArray((err,res)=>{
        
        if(err){
            throw err;
        }
        console.log(res)
    });
       


  //console.log(prodacts.find({_id:5}));
 // const query = { _id:5 };
 
// return prodacts.find({})
//   .toArray()
//   .then(result => {
//     if(result) {
      
//        // Compile the source code
// // const compiledFunction = pug.compileFile("./views/allProducts.pug");
//  // Render a set of data
//     //  console.log(compiledFunction({
//     //  products:result
//     //  }));
//       console.log(`Successfully found document: ${result}`);
//     } else {
//       console.log("No document matches the provided query.");
//     }
//     return result;
//   })
//   .catch(err => console.error(`Failed to find document: ${err}`));

  
//   //  prodacts.insertMany(
//   //    [
//   //     {_id:4,name:"sushi",price:45},
//   //     {_id:5,name:"braed",price:8},
//   //     {_id:6,name:"ice cream",price:8},
//   //    ]
    
//   //    ,()=>{
//   //    console.log("prodact add");
//   //    client.close();

//   //  });
  
  }
 
});
