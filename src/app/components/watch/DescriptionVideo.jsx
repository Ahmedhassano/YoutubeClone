"use client"
import { useState,useEffect } from "react"
import { numberCategory } from "@/app"
export default function DescriptionVideo({Details}) {
    let  discription=Details?.snippet?.description
    let  viewCount=Details?.statistics?.viewCount
    let [openDescribe,setOpenDescribe]=useState(false)
    function handleClick() {
      return  setOpenDescribe((prev)=>!prev)
    }
  return (
    <div onClick={handleClick} className={`${!openDescribe?" max-h-[109px] ":" max-h-fit "} p-2  bg-zinc-700 hover:bg-zinc-600 cursor-pointer rounded-lg overflow-hidden`}>
       <p className=" text-white">{numberCategory(viewCount)} views</p>
       <p  className="relative p-2 text-white overflow-hidden" >
       {discription}
       </p>
    </div>
  )
}
