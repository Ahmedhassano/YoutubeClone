"use client"
import Image from "next/image"
import { useEffect, useState,useContext } from "react"
import { numberCategory } from "../index"
import {getchannalDetails} from "../index"
export default function channalDetails({channalId}) {
  let [Details,setDetails]=useState()
  
  useEffect(()=>{
    getchannalDetails(channalId).then(res=>res.json()).then(res=>setDetails(res))
  },[])
 
  return (
    <div className="flex items-center gap-1">
      <div className=" relative w-8 h-8 rounded-full overflow-hidden">
        <Image
        fill
        src={Details?.items[0].snippet?.thumbnails.default.url}
        />
      </div> 
       <div className="  ">
         <h6 className="text-white ">{Details?.items[0].snippet?.title}</h6>
         <h6 className="text-gray-400 text-xs  whitespace-nowrap overflow-ellipsis overflow-hidden ">
          {numberCategory(+Details?.items[0]?.statistics?.subscriberCount)}
           subscribers
         </h6>
       </div>
    </div>
  )
}
