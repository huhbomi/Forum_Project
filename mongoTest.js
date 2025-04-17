import { MongoClient } from "mongodb";

const uri = 'mongodb+srv://bofinal:mongodb1234@cluster0.jihdatw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function run() {
  try {
    const client = await new MongoClient(uri).connect();
    console.log("✅ 연결 성공!");
    await client.close();
  } catch (err) {
    console.error("❌ 연결 실패:", err.message);
  }
}

run();
