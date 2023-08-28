"use client"
import { getVideoDetails } from "@/app"
import { createContext, useEffect, useState } from "react"
import SuggesteVideoContainer from "@/app/components/watch/SuggesteVideoContainer"
import CommentsContainer from "@/app/components/watch/commentsContainer"
import VideoContainer from "@/app/components/watch/videoContainer"
export const videoContext = createContext() 
export default function watch({params}) {
  let id=params.id
  let [VideoDetails,setVideoDetails]=useState()
  useEffect(()=>{
    getVideoDetails(id).then(res=>res.json()).then(res=>setVideoDetails(res))
  },[]) 
  
  return (
    <section
     className="w-full relative p-2 bg-zinc-950  overflow-x-hidden 
     grid gap-2 watchPage-grid-for-screen sm:watch-Grid 
     grid-cols-3
     sm:grid-rows-[auto_1fr]
     grid-rows-[repeat(3,auto)]
    ">
      <videoContext.Provider value={VideoDetails}>
        <VideoContainer id={id}/>
        <CommentsContainer id={id} commentsCount={VideoDetails?.items[0]?.statistics.commentCount}/>
        <SuggesteVideoContainer id={id}/>
     </videoContext.Provider>       
    </section>
  )
}
