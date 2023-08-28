"use cleint"
import Button from "../Button"
import {AiOutlineLike} from "react-icons/ai"
import {BiDislike} from "react-icons/bi"
import {BsThreeDots} from "react-icons/bs"
import {TbShare3} from "react-icons/tb"
import { videoContext } from "@/app/watch/[id]/page"
import {numberCategory} from "../../index"
import { useContext } from "react"
export default function InteractionBarRight() {
  let video=useContext(videoContext)
  let statistics=video?.items[0]?.statistics
 
  return (
    <div className="flex gap-2 ">
       <div className="flex ">
         <Button className={`flex items-center icon gap-2 group h-10 px-2 text-white bg-zinc-700 hover:bg-[#5c5c5cfc] rounded-l-full`}>
           <AiOutlineLike size={20} color="white"/>
            {numberCategory(+statistics?.likeCount)}
            <span className="icon-text">i like this</span>
         </Button>
         <Button className={`flex items-center icon group h-10  px-3 bg-zinc-700 hover:bg-[#5c5c5cfc] rounded-r-full`}>
            <BiDislike size={20} color="white"/>
             <span className="icon-text">i dislike this</span>
         </Button>
       </div>
         <Button className={`flex items-center gap-1 icon group h-10  px-3 bg-zinc-700 hover:bg-[#5c5c5cfc] rounded-full`}>
            <TbShare3 size={20} color="white"/>
            <span className="icon-text">share</span>
            share
         </Button>
         <Button className={`flex items-center gap-1 icon group h-10  px-3 bg-zinc-700 hover:bg-[#5c5c5cfc] rounded-full`}>
            <BsThreeDots size={20} color="white"/>
         </Button>
    </div>
  )
}
