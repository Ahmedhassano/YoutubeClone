
import HomeContent from "./components/HomeContent"
import { Search } from "."
export default async function Home() {
  let res=await Search("games")
  let data=await res.json()

  return (
    <section className=" relative min-h-screen flex-1  p-2 overflow-x-hidden ">
       <HomeContent intiData={data.items}/>
    </section>
  )
}
