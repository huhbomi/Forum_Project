import { connectDB } from "../../../util/database";
import { ObjectId } from 'mongodb'

export default async function Edit(props) {
    const client = await connectDB;
    const db = client.db("forum");
    const result = await db.collection("post").findOne({
      _id: new ObjectId(props.params.id),
    });

    console.log(props)

    

    return (
        <div className='p-20'>
            <h4>글 수정</h4>
            <form action='/api/post/edit' method='POST'>
                <input name='title' defaultValue={result.title} className="form-control"/>
                <input name='content' defaultValue={result.content} className="form-control"/>
                <input type='hidden' name='_id' defaultValue={result._id.toString()}/>
                <button type='submit' className="form-control">수정</button>
            </form>
        </div>
    )
}
