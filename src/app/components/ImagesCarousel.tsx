"use client"

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import banner from "../../../public/banner.jpg"

export default function ImagesCarousel() {
   const settings = {
      infiniteLoop: true,
      autoPlay: true,
      showThumbs: false,
      interval: 3000,
      transitionTime: 1000,
      showArrows: false,
      showStatus: false,
      showIndicators: true,
      stopOnHover: false,
   }

   const images = [
      banner,
      banner,
      banner,
      banner
   ]


   return (
      <Carousel {...settings} className='flex flex-col items-center justify-center w-full h-[180px]'>
         {images.map((image, index) => (
            <div key={index} className='flex justify-center items-center w-full'>
               <Image src={image.src} alt='image' className='w-full max-w-[1280px] h-auto max-h-[475px]' width={1440}
                  height={475} />
            </div>
         ))}
      </Carousel>
   )
}
