import Image from "next/image";
import cart from "../../../public/cart.png"
import eye from "../../../public/eye.png"

export default function Card(productData: any) {
   const product = productData.productData;

   return (
      <div className="h-[524px] w-[200px] bg-white-1 font-montserrat  overflow-hidden relative shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-s-sm">
         <Image src={product.image} alt="image" className="w-[200px] h-[306px] border border-white-1" />
         <div className="size-[35px] p-1 absolute top-2.5 right-[15px] bg-custom-gradient border border-white-1 rounded-full cursor-pointer">
            <Image src={cart} height={35} width={35} alt="cart" className="size-5 m-0.5" />
         </div>
         <div className="px-2">

            <p className="text-[15px] mt-2 ">{product.name}</p>
            <p className="text-2xl">$ {product.price}</p>
            <p className="font-medium text-xs mt-4">{product.installment} <span className="font-normal text-xs">cuotas sin interés de</span> ${product.installmentValue}</p>
            <button className="text-xs h-11 w-full flex items-center px-[38.5px] border border-black-1 mt-2 rounded-sm cursor-pointer">
               <Image src={eye} alt="eye" className="w-[19.5px] h-[13.5px] mr-1" />
               Ver producto
            </button>
            <button className="bg-custom-gradient text-white-1 text-xs font-semibold h-11 w-full mt-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-sm cursor-pointer">
               Comprar
            </button>
         </div>

      </div>
   )
}