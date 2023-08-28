import Image from "next/image"

export default function NotFound() {
  return (
    <div className=' relative w-full h-[100vh] '>
       <Image
        fill
        src={"/not_found_results.png"}
       />
    </div>
  )
}
