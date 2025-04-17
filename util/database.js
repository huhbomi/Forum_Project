import { MongoClient } from "mongodb";

const uri = 'mongodb+srv://bofinal:mongodb1234@cluster0.jihdatw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let client;
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    client = new MongoClient(uri);
    global._mongo = client.connect();
  }
  connectDB = global._mongo;
} else {
  client = new MongoClient(uri);
  connectDB = client.connect();
}

export { connectDB };
