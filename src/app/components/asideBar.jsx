import Logo from "./Logo"
import {AiFillHome,AiOutlineHistory} from "react-icons/ai"
import {BiLibrary} from "react-icons/bi"
import {CgGames} from "react-icons/cg"
import {FiMenu} from "react-icons/fi"
import {FaMusic} from "react-icons/fa"
import {HiTrendingUp} from "react-icons/hi"
import {MdOutlineSubscriptions,MdOutlineWatchLater,MdLiveTv} from "react-icons/md"
import {GoVideo} from "react-icons/go"
import {LuFileVideo} from "react-icons/lu"
export default function AsideBar({open,handleClick}) {
  return (
    <aside className={`${open?"translate-x-0":"-translate-x-full "}
    w-[250px] bg-black px-2  duration-150
    fixed left-0 top-0 h-screen 
    overflow-y-auto z-40`}>
     <div className="flex items-center border-b border-solid border-b-gray-400 rtl:flex-row-reverse  ">
         <FiMenu 
          cursor={"pointer"} 
          size={25} 
          color="white"
          onClick={handleClick}
          />
           <Logo/>
     </div>
     <div className="py-2 border-b border-solid border-b-gray-400 text-white ">
       <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <AiFillHome  size={20}/>
        <span >home</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <GoVideo  size={20}/>
        <span >shorts</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <MdOutlineSubscriptions  size={20}/>
        <span >Subscript</span>
      </div>
     </div>
     <div className="py-2 border-b border-solid border-b-gray-400 text-white ">
     <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <BiLibrary  size={20}/>
        <span >Library</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <AiOutlineHistory size={20}/>
        <span >history</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <LuFileVideo  size={20}/>
        <span >you video</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <MdOutlineWatchLater  size={20}/>
        <span >show later</span>
      </div>
     </div>
     <div className="py-2 text-white ">
        <h3>exploration</h3>
        <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <HiTrendingUp  size={20}/>
        <span >trending</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <FaMusic  size={20}/>
        <span >Music</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <MdLiveTv  size={20}/>
        <span >live</span>
      </div>
      <div className="flex items-center gap-2 py-2 px-1  cursor-pointer effect-hover rounded-md rtl:flex-row-reverse ">
        <CgGames  size={20}/>
        <span >Games</span>
      </div>
     </div>
      </aside>
  )
}
