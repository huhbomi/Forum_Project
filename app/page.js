// app/page.js
import { connectDB } from "../util/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum"); // DB 이름: forum
  const result = await db.collection("post").find().toArray();

  console.log(result)

  return (
    <div>
      <h1>게시글 리스트</h1>
      {result.length > 0 ? (
        result.map((item, idx) => (
          <div key={idx}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
          </div>
        ))
      ) : (
        <p>데이터 없음</p>
      )}
    </div>
  );
}
