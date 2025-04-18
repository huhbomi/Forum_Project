import { connectDB } from "../../../util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
  if (요청.method === "POST") {
    if (!요청.body.title || !요청.body.content) {
      return 응답.status(400).json("내용을 입력해주세요.");
    }

    try {
      // 1️⃣ 기존 string _id 제거
      delete 요청.body._id;

      const doc = {
        ...요청.body,
        _id: new ObjectId(), // 2️⃣ 새로운 ObjectId 생성
      };

      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne(doc);

      console.log("삽입된 문서:", result);

      return 응답.redirect(302, "/list");
    } catch (err) {
      console.error(err);
      return 응답.status(500).json("서버 오류 발생");
    }
  }
}