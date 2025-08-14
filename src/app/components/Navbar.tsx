import Image from "next/image";
import logo from "../../../public/logo.png"
import menu from "../../../public/menuDots.png"
import magnifyingGlass from "../../../public/magnifyingGlass.png"

export default function Navbar() {
   return (
      <div className="bg-[#F9F9F9] w-full h-[87px] flex flex-row items-center justify-between px-4">
         <div className="size-[55px]">
            <Image className="size-full" src={logo} alt="" />
         </div>
         <div className="w-[49%] h-12 flex flex-row items-center justify-between rounded-3xl border border-brown-1 p-2">
            <input type="text" className="w-full text-gray-1 text-xl font-montserrat" placeholder="Buscar" />
            <div className="size-8">
               <Image className="size-8" alt="" src={magnifyingGlass} />
            </div>
         </div>
         <div className="size-12">
            <Image className="size-full" src={menu} alt="" />
         </div>
      </div>
   )
}
