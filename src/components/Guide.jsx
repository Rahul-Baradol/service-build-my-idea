import * as React from "react";
import tablepeople from '../assets/tablepeople.svg'
import { useState } from "react";

function Guide(props) {
   const [tab, setTab] = useState(0);
   
   const tabInfo = [
      ["Our mission is to empower through innovation, turning app ideas into impactful solutions that drive success."],
      ["Our Vision is being determined...."],
      ["Our value is increasing..."]
   ]

   return (
      <div className="px-16 py-12 bg-white max-md:px-5">
         <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
               <img
                  loading="lazy"
                  src={tablepeople}
                  className="mt-4 w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
               />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
               <div className="flex flex-col self-stretch my-auto font-semibold capitalize text-slate-900 max-md:mt-10 max-md:max-w-full">
                  <div className="text-5xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                     Guiding your business towards triumph, one app at a time.
                  </div>
                  <div className="flex gap-5 justify-between pr-20 mt-7 text-lg leading-6 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                     <button onClick={() => {
                        setTab(0)
                     }} className={`grow justify-center p-2.5 rounded-2xl ${tab === 0 ? "text-white bg-slate-900" : ""}`}>
                        Our Mission
                     </button>
                     <button onClick={() => {
                        setTab(1)
                     }} className={`grow justify-center p-2.5 rounded-2xl ${tab === 1 ? "text-white bg-slate-900" : ""}`}>
                        Our Vision
                     </button>
                     <button onClick={() => {
                        setTab(2)
                     }} className={`grow justify-center p-2.5 rounded-2xl ${tab === 2 ? "text-white bg-slate-900" : ""}`}>
                        Our Value
                     </button>
                  </div>

                  <div className="mt-7 text-lg leading-7 text-black max-md:max-w-full">
                     {
                        `${tabInfo[tab]}`
                     }
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Guide;