"use client"
import Image from "next/image"
import Button from "../Button"
import { getCommentInfo } from "@/app"
import { useState ,useEffect} from "react"
import {AiOutlineLike} from "react-icons/ai"
import {BiDislike} from "react-icons/bi"
import {BsThreeDotsVertical} from "react-icons/bs"
export default function Comment({id}) {
   let [commentDetails,setCommentDetails]=useState({}) 
   useEffect(()=>{
      getCommentInfo(id).then(res=>res.json()).then(res=>setCommentDetails(res))
     
   },[])
   useEffect(()=>{
   },[commentDetails])
  return (
    <div className="flex gap-1 ">
       <div className="w-10 min-w-[40px] h-10 max-h-[40px] relative cursor-pointer rounded-full bg-gray-700 ">
           {/* <Image
            fill
            src={`${commentDetails?.snippet?.authorProfileImageUrl}`}
           /> */}
       </div>
       <div className="">
         <div className="flex items-center justify-between ">
            <div className="flex gap-2 text-sm">
            <p className=" text-white">{``}</p>
            <p className=" text-gray-400">{"2025/10/23"}</p>
            </div>
            <Button className={"p-2  text-white rounded-full "} >
              <BsThreeDotsVertical size={17} />   
            </Button>
         </div>
         <p className=" text-white">
          {/* content */}
         </p>
         <div className="flex gap-2 items-center">
            <Button className={'text-white min-w-4 min-h-4 p-1 flex items-center justify-center rounded-full  bg-zinc-800 hover:bg-zinc-700'}>
               <AiOutlineLike size={17}/> 
            </Button>
            <Button className={'text-white min-w-4 min-h-4 p-1 flex items-center justify-center  rounded-full  bg-zinc-800 hover:bg-zinc-700'}>
               <BiDislike size={17}/> 
            </Button>
            <Button className={'text-white p-2 rounded-full text-sm  '}>
               replay
            </Button>
         </div>
       </div>
    </div>
  )
}
