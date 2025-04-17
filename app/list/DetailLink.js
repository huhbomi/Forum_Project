'use client'

import { useRouter } from "next/navigation"

export default function DetailLink({id}){
    let router = useRouter()
    console.log(id)
    return (
        <button onClick = {()=>{
            router.push(`/detail/${id}`);
        }}>수정</button>
    )
}