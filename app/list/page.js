import { connectDB } from "../../util/database";
import Link from 'next/link'
import DetailLink from "./DetailLink";

export default async function List() {
    const client = await connectDB;
    const db = client.db("forum"); // DB 이름: forum
    const result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            <Post post={result}></Post>
        </div>
    )
}

function Post({ post }) {

    console.log(post[0]._id)
    return (
        post.map((item) => {
            return (
                <div className="list-item" key={item._id}>

                    <div >
                        <Link href={`/detail/${item._id}`}>
                            <h4>{item.title}</h4>
                        </Link>
                        <p>{item.content}</p>

                    </div>
                    <Link href={`/edit/${item._id}`} title={item.title} content={item.content}>수정</Link>
                </div>
            )
        })
    )
}