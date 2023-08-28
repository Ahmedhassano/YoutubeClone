import Button from "../Button" 
import ChannalDetails from "../channalDetails"
import { videoContext } from "@/app/watch/[id]/page"
import { useContext } from "react"
export default function InteractionBarLeft() {
  let video=useContext(videoContext)
  return (
    <div className="flex gap-2">
      <div className="">
        {/* <ChannalDetails channalId={video?.items[0].snippet.channelId}/> */}
      </div>
      <div className="flex gap-2">
        <Button className={`py-1 px-3 bg-black border border-solid border-gray-500 text-white rounded-full hover:bg-[#80808062] `}>
          join
        </Button>
        <Button className={`py-1 px-5 bg-white border border-solid border-gray-500 text-black rounded-full hover:bg-gray-200 `}>
          subscribe
        </Button>
      </div>
    </div>
  )
}
