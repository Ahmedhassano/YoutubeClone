import {AiFillHome} from "react-icons/ai"
import {MdOutlineSubscriptions,MdVideoLibrary} from "react-icons/md"
import {LuLibrary} from "react-icons/lu"
export default function LeftBar() {
  return (
    <div className="w-fit h-full hidden md:flex flex-col gap-2 sticky top-14 p-2 px-3 text-white">
      <div className="flex flex-col gap-1 items-center">
       <AiFillHome size={25}/> 
       <span className=" text-xs">home</span>  
      </div>
      <div className="flex flex-col gap-1 items-center">
       <MdOutlineSubscriptions size={25}/> 
       <span className=" text-xs">Subscript</span>  
      </div>
      <div className="flex flex-col gap-1 items-center">
       <MdVideoLibrary size={25}/> 
       <span className=" text-xs">shorts</span>  
      </div>
      <div className="flex flex-col gap-1 items-center">
       <LuLibrary size={25}/> 
       <span className=" text-xs">Library</span>  
      </div>
    </div>
  )
}
