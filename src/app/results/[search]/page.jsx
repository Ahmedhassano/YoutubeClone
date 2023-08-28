import VideoCard from "@/app/components/results/videoCard"
import {Search} from "../../index"
import NotFound from "../../components/notFound"
export default async function results({params}) {
  let searchValue=params.search
  let res=await Search(searchValue)
  let data=await res.json()
 
  return (
    <section className="w-full h-full p-2 flex flex-col gap-2 items-stretch overflow-x-hidden ">
      {!data.items?<h1 className=" text-red-800 text-3xl"><NotFound/></h1>:data.items.map(el=><VideoCard video={el}/>)}
    </section>
  )
}
