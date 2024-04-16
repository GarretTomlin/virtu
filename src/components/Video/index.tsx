"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";


const Video = () => {

  return (
    <div>
    <section className=" text-gray-200 bg-gray-900">
      <div className="max-w-6xl mx-auto px-5 py-24 ">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">          Modules
</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">
</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-300 p-6 rounded-lg">
              <div className="w-full h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4">
                    </div>
                    <Image
                  src="/images/em.jpg"
                  alt="logo"
                  width={150}
                  height={160}
                  className="rounded"
                />       
              <h2 className="text-lg  font-medium title-font mb-2"> VirtuClassroom</h2>
              <p className="leading-relaxed text-base">A VR-BASED PLATFORM THAT ALLOWS ​TEACHERS TO CONDUCT CLASSES IN A FULLY ​IMMERSIVE 3D ENVIRONMENT</p>
              
              <div className="text-center mt-2 leading-none flex justify-between w-full">
                
              </div>

            </div>
          </div>


          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border  p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full text-indigo-500 mb-4 italic">
                <span className="font-bold text-sm ">
                </span>
              </div>
              <Image
                  src="/images/em.jpg"
                  alt="logo"
                  width={150}
                  height={160}
                  className="rounded"
                />       
              <h2 className="text-lg  font-medium title-font mb-2">VirtuLab</h2>
              <p className="leading-relaxed text-base">COST-EFFECTIVE VIRTUAL LABORATORY TO ​ERFORM SCIENTIFIC EXPERIMENTS IN AN ​ENTIRELY SIMULATED 3D ENVIRONMENT</p>

              <div className="text-center mt-2 leading-none flex justify-between w-full">
               
              </div>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border 300 p-6 rounded-lg">
            <a href="https://codepen.io/garrettomlin/full/bGJxmKB">

              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4">
              </div>
              <Image
                  src="/images/em.jpg"
                  alt="logo"
                  width={150}
                  height={160}
                  className="rounded"
                  
                />       
              <h2 className="text-lg  font-medium title-font mb-2">VirtuQuest</h2>
              <p className="leading-relaxed text-base">A SERIES OF EDUCATIONAL GAMES SET IN A ​VARIETY OF VIRTUAL WORLDS, WHERE ​QUESTS ARE COMPLETED TO ADVANCE</p>
              
              <div className="text-center mt-2 leading-none flex justify-between w-full">
                <span className=" mr-3 inline-flex items-center leading-none text-sm  py-1 ">
                 
                </span>
                <span className=" inline-flex items-center leading-none text-sm">
            
                  
                </span>
              </div>
</a>
            </div>
          </div>
        </div>
      </div>
    </section>

</div>
       
  );
};

export default Video;
