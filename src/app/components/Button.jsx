"use client"
export default function Button({className,handleClick,children}) {
  return (
    <button
    onClick={()=>handleClick&&handleClick()}
    className={`font-bold whitespace-nowrap first-letter:uppercase ${className}`}>
      {children}
    </button>
  )
}
