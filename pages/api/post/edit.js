import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method == "POST") {
    let 바꿀내용 = {
      title: 요청.body.title,
      content: 요청.body.content,
    };

    console.log(요청.body._id)

    const db = (await connectDB).db("forum");

    let result = await db.collection("post").updateOne(
      { _id: new ObjectId(요청.body._id) },
      { $set: 바꿀내용 }
    );

    return 응답.redirect(302, "/list");
  }
}