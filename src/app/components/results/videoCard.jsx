"use client"
import Image from "next/image"
import Link from "next/link"
import Button from "../Button"
export default function VideoCard({video}) {
  let imageVideo=video?.snippet?.thumbnails.high
  return (
    <Link href={`/watch/${video?.id?.videoId}`} className="flex gap-2">
      <div className=" relative w-1/3 aspect-video rounded-lg  overflow-hidden">
        <Image
        src={`${imageVideo.url}`}
         fill
         alt="video image"
         className="object-cover"
        />
      </div>
      <div className=" w-2/3 -700 flex flex-col gap-2">
        <div>
           <h3 className=" text-white text-lg">{`${video?.snippet?.title}`}</h3>
           <p className=" text-gray-400">{video.snippet.publishTime}</p> 
        </div>
        <div className="flex gap-1 items-center">
           <div className=" w-8 h-8 bg-gray-600 relative rounded-full overflow-hidden">
              {/* <Image
              src={"/test2.jpg"}
              fill
              /> */}
           </div>
           <p className=" text-gray-400">{`${video?.snippet?.channelTitle}`}</p> 
        </div>
        <div className=" relative max-w-full ">
          <p className=" w-full relative text-white whitespace-nowrap overflow-hidden text-ellipsis  ">
            {`${video?.snippet?.description}`}
          </p>
        </div>
      </div>
    </Link>
  )
}
