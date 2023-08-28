"use client"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getSuggestedVideos } from "@/app";
export default function SuggesteVideoContainer({id}) {
  let [data,setData]=useState([])
  useEffect(()=>{
    getSuggestedVideos(id).then(res=>res.json()).then(res=>setData(res.items))
    
  },[])
  
  return (
    <div style={{gridArea:"SuggestedVideos"}} className="w-full space-y-4 ">
      {data?.map(el=>
      <Link href={`/watch/${el?.id?.videoId}`} className="w-full  relative  grid grid-cols-2 gap-2 overflow-hidden">
        <div className=" relative aspect-video rounded-lg overflow-hidden ">
            <Image
            src={`${el?.snippet?.thumbnails?.high.url}`}
            fill
             className=" object-cover "
            /> 
        </div>
        <div className="">
          <h3 className=" text-white max-h-[50px] overflow-hidden ">{el?.snippet?.title}</h3>
          <p className=" text-zinc-400">{el?.snippet?.channelTitle}</p>
        </div>    
      </Link>)}
    </div>
  )
}
