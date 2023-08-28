import Image from "next/image"
export default function Logo() {
  return (
    <div className="flex items-center ">
        <Image
        width={110}
        height={70}
        src={"/YouTube-White.svg"}
        alt="logo"
         />
    </div>
  )
}
