import { connectDB } from "../../../util/database";

export default async function handler(요청, 응답) {
    if (요청.method=='POST'){
        if (요청.body.title == '' || 요청.body.content == ''){
            return 응답.status(500).json('내용을 입력해주세요')
        }
        try{
        const db = (await connectDB).db('forum')
        let result = await db.collection('post').insertOne(요청.body)
        return 응답.status(200).redirect('/list')}
        catch(error){
            return 응답.status(500).json('저장에 실패했습니다.')
        }
    }
}