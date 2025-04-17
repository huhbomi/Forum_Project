import { connectDB } from "../../util/database";

export default async function handler(요청, 응답){
    const client = await connectDB;
    const db = client.db("forum"); // DB 이름: forum
    
    if(요청.method == 'POST'){
        return 응답.status(200).json('응답메세지')
    }
    else if(요청.method == 'GET'){
        const result = await db.collection("post").find().toArray();
        return 응답.status(200).json({result})
    }
}