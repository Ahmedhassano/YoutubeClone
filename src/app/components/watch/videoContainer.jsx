import InteractionBarVideo from "./InteractionBar"
import DescriptionVideo from "./DescriptionVideo"
import { useContext } from "react"
import { videoContext } from "@/app/watch/[id]/page"
export default function VideoContainer({id}) {
   let video=useContext(videoContext)
    let title=video?.items[0]?.snippet?.title
  return (
   
     <div style={{gridArea:"video"}} className=" flex gap-2 flex-col p-2">
      <iframe className="flex-1 aspect-video" src={`https://www.youtube.com/embed/${id}`}/>
       <h2 className=" text-white text-xl font-medium ">{title}</h2>
       <InteractionBarVideo/>
       <DescriptionVideo Details={video?.items[0]}/>
    </div>
    )
}
