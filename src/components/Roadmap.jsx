import Image from "next/image";
import React from "react";



const Roadmap = () => {
  return (
      <div class="bg-paragraph w-full h-48 ">
        <div class="grid grid-cols-12 ">
          <div class="col-span-12 flex justify-around ">
            <div class="bg-white opacity-30 h-6 w-1/6"></div>
            <div class="bg-white opacity-30 h-6 w-1/6"></div>
            <div class="bg-white opacity-30 h-6 w-1/6"></div>
            <div class="bg-white opacity-30 h-6 w-1/6"></div>
          </div>
        </div>

        <div class="grid grid-cols-12 ">
          <div class="col-span-12 flex justify-around ">
            <div className="text-white opacity-40 font-bold text-6xl" >1</div>            
            <div className="text-white opacity-100 font-bold text-6xl" >2</div>            
            <div className="text-white opacity-40 font-bold text-6xl" >3</div>            
            <div className="text-white opacity-40 font-bold text-6xl" >4</div>            
            
          </div>
        </div>


        <div class="grid grid-cols-12 ">
          <div class="col-span-12 flex justify-around ">
          <Image
                  src="/images/pin.png"
                  alt="Picture of the author"
                  style={{
                    width: 120,
                    height: '100%',
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />            
          <Image
                  src="/images/pin.png"
                  alt="Picture of the author"
                  style={{
                    width: 120,
                    height: '100%',
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />            
          <Image
                  src="/images/pin.png"
                  alt="Picture of the author"
                  style={{
                    width: 120,
                    height: '100%',
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />            
          <Image
                  src="/images/pin.png"
                  alt="Picture of the author"
                  style={{
                    width: 120,
                    height: '100%',
                    objectFit: "cover",
                  }}
                  width={1500}
                  height={1500}
                  quality={100}
                />            
          </div>
        </div>
      </div>

  );
};

export default Roadmap;
