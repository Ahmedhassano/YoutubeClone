"use client"
import {BsFillMicFill} from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import Link from "next/link"
import { useState } from "react"
export default function SearchBar() {
  let [inputValue,setInputValue]=useState("")
  let [inputfocus,setInputfocus]=useState(false)

  return (
    <div className="flex-1 flex items-center justify-center gap-2">
     <BsFillMicFill size={25} color="white" cursor={"pointer"}/>
     <div className="flex items-stretch flex-1  max-w-md  ">
     <input
      className={`${inputfocus?"border-sky-600 ":"border-zinc-600 "}
      w-full  border-2 border-solid 
      rounded-l-full p-2 px-3
      bg-black text-white`}
      type="text" 
      onChange={(e)=>setInputValue(e.target.value)}
      onFocus={()=>setInputfocus(true)} 
      onBlur={()=>setInputfocus(false)} 
      /> 
      <Link
        href={`/results/${inputValue}`}
        className=" flex justify-center items-center group icon w-11  bg-zinc-600 rounded-r-full">
        <BiSearch size={25}/>
       <span className="icon-text">search</span>
      </Link>
     </div>
    </div>
  )
}
