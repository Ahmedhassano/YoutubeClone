 import './globals.css'
import Header from "./components/Header"
import LeftBar from './components/LeftBar'
export const metadata = {
  title: 'youtube clone',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"   >
      <body className=" bg-black">
        <Header/>
        <main className="w-full relative flex gap-2 ">
        <LeftBar/> 
         {children}
        
        </main>
      </body>
    </html>
  )
}
