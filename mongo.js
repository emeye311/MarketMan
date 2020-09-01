const mongodb = require("mongodb");
//נותן את האפשרות ליצור חיבור לדאטבאס במונגו
const MongoClient = mongodb.MongoClient;
//הנתיב
const url = "mongodb://localhost:27017";
const dbName = "SuperDB";

// Marking a function as async means 2 things:
// 1. Will return a Promise
// 2. Can "await" other async (functions returning a Promise) functions

const getAllProducts = async () => {
  let client;
  try {
    client = await MongoClient.connect(url, { useUnifiedTopology: true });
  } catch (error) {
    console.log(error);
    throw new Error("Could not connect to database");
  }

  try {
    const db = client.db(dbName);

    const collection = db.collection("products");

    return await collection.find().toArray();
  } catch (error) {
    console.log(error);
    throw new error("Could not fetch data from collection");
  }
};

module.exports = {
  getAllProducts,
};
