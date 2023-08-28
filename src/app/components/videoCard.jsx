"use client"
import Link from "next/link"
import Image from "next/image"
export default function videoCard({videoInfo}) {

  return (
    <Link 
    href={`/watch/${videoInfo.id.videoId}`}
    className=" group p-2 bg-black">  
       <div className=" w-full aspect-video relative rounded-lg group-hover:rounded-none duration-200 overflow-hidden">
        <Image
          fill
          className=" object-cover"
          src={`${videoInfo?.snippet?.thumbnails?.high.url}`}
        />
       </div> 
       <div className="">
         <p className="max-h-[50px] text-white overflow-hidden">{videoInfo?.snippet?.title}</p>
         <p className=" text-sm text-zinc-400">{videoInfo?.channelTitle}</p> 
         <p className="text-sm text-zinc-400">1.1m</p>
       </div>
    </Link>
    
  )
}
