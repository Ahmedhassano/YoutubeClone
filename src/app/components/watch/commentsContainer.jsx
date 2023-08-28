"use client"
import Comment from "./comment"
import {  useEffect, useState } from "react"
import { numberCategory,getComments} from "@/app"
export default function CommentsContainer({id,commentsCount}) {
  let [comment,setComment]=useState([])
  useEffect(()=>{
    getComments(id).then(res=>res.json()).then(res=>setComment(res.items))

  },[])
 
  return (
    <div style={{gridArea:"Comments"}} className="">
      <div className=" text-white">
        <p className="">{numberCategory(+commentsCount)} Comments</p>
      </div>
      <div className="flex flex-col gap-3">
        {!comment? <p className=" text-white">not comments</p>:comment.map(el=> <Comment id={el.id}/>)}
      </div>
    </div>
  )
}
