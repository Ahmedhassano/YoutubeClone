"use client"
import { useState } from "react"
import Logo from "./Logo"
import SearchBar from "./searchBar"
import AsideBar from "./asideBar"
import {AiOutlineBell} from "react-icons/ai"
import {BiVideoPlus} from "react-icons/bi"
import {FiMenu} from "react-icons/fi"
export default function Header() {
  let [openAside,setOpenaside]=useState(false)
  function handleMenu(){
   return setOpenaside((prev)=>!prev)
  }
  return (
    <header className="w-full h-14 sticky top-0 py-4 px-6 bg-black  flex items-center justify-between z-30">
    {/* left header */}
    <div className="flex  items-center  ">
      <FiMenu
       cursor={"pointer"} 
       size={25} 
       color="white"
       onClick={()=>handleMenu()}
       />
       <Logo/>
     </div>
     {/* searchbar  */}
   
     <SearchBar/>
   
     {/* right header */}
     <div className="flex items-center gap-2">
      <div className="w-8 h-8  rounded-full bg-gray-500 cursor-pointer"></div>
      <div className="icon group">
       <AiOutlineBell size={25} color="white"/> 
       <span className="icon-text">naviga</span>
      </div>
      <div className="icon group">
       <BiVideoPlus size={25} color="white"/> 
       <span className="icon-text">build</span>
      </div>
     </div>
     <AsideBar open={openAside} handleClick={handleMenu}/>
     <div className={`${openAside?"inline-block":"hidden"} overly`} onClick={()=>handleMenu()}></div>
    </header>
  )
}
