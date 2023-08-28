"use client"
import { catogary } from "../constants"
import Button from "./Button"
import { useEffect,useState } from "react"
export default function Category({changeCatoogary}) {
 let [activeCatoogary,setActiveCatoogary]=useState(catogary[0].title)
 useEffect(()=>{
  changeCatoogary(activeCatoogary)
 },[activeCatoogary])
 return (
    <div className="  flex-1 flex gap-2 max-h-[50px] p-1 overflow-x-auto ">
      {catogary.map(el=>
           <Button 
             className={`${activeCatoogary==el.title?" text-black bg-white hover:bg-slate-100":" text-white bg-zinc-700 hover:bg-zinc-600"} py-1 px-2 rounded-sm `}
             handleClick={()=>setActiveCatoogary(el.title)} >
                {el.title}
          </Button>)}
    </div>
  )
}
