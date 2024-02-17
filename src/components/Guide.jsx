import * as React from "react";
import tablepeople from '../assets/tablepeople.svg'
import { useState } from "react";
import '../App.css'

function Guide(props) {
   const [tab, setTab] = useState(0);
   
   const tabInfo = [
      ["Our mission is to empower through innovation, turning app ideas into impactful solutions that drive success."],
      ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab velit architecto totam molestias cumque iusto nisi."],
      ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quia unde, dolore harum itaque optio ducimus ullam. Nemo, debitis enim."]
   ]

   return (
      <div className="px-16 py-12 bg-white max-lg:px-5">
         <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
            <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
               <img
                  loading="lazy"
                  src={tablepeople}
                  className="mt-4 w-full aspect-[1.25] max-lg:mt-10 max-lg:max-w-full"
               />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
               <div className="flex flex-col self-stretch my-auto font-semibold capitalize text-slate-900 max-lg:mt-10 max-lg:max-w-full">
                  <div className="lg:text-4xl lg:leading-[52px] max-lg:max-w-full text-3xl leading-[50px]">
                     Guiding your business towards triumph, one app at a time.
                  </div>
                  <div className="flex gap-5 justify-between pr-20 mt-7 text-lg leading-6 whitespace-nowrap max-lg:flex-wrap max-lg:pr-5 max-lg:max-w-full">
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

                  <div className="mt-7 text-lg leading-7 text-black max-lg:max-w-full">
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