"use client"
import Category from "./Category"
import VideoCard from "./videoCard"
import { useState,useEffect } from "react"
import { Search } from ".."
export default function HomeContent({intiData}) {
  let [category,setCategory]=useState("")
  let [data,setData]=useState(intiData)
  let changeCatoogary=(category)=>{
    return setCategory(category)
  }
  console.log(intiData);
   useEffect(()=>{
    Search(category).then(res=>res.json()).then(res=>setData(res.items))
    
   },[category]) 
  return (
    <div className="  flex flex-col gap-2">
      <Category changeCatoogary={changeCatoogary}/>
      <div className="w-full grid gap-2 justify-center 
     grid-cols-[minmax(250px,400px)] 
     sm:grid-cols-2
     md:grid-cols-3 
     
      ">
        {!data? <p className=" text-red-800 text-center text-3xl">error404</p>:data.map(el=><VideoCard videoInfo={el}/>)}
      </div>
    </div>
  )
}
