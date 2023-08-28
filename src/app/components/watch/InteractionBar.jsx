import InteractionBarLeft from "./InteractionBarLeft"
import InteractionBarRight from "./InteractionBarRight"
export default function InteractionBarVideo() {
  return (
    <div className="flex gap-2 justify-between flex-col md:flex-row">
        <InteractionBarLeft/>
        <InteractionBarRight/>
    </div>
  )
}
