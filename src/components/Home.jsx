import * as React from "react";
import { useState } from "react";
import leftphone from '../assets/leftphone.svg'
import centerphone from '../assets/centerphone.svg'
import rightphone from '../assets/rightphone.svg'
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import '../App.css'

function Home(props) {
   const [page, setPage] = useState(0);
   const maxPage = 3;

   const [pagesClassnames, setPagesClassnames] = useState([
      [leftphone, centerphone, rightphone],
      [rightphone, centerphone, leftphone],
      [centerphone, centerphone, centerphone],
   ])

   return (
      <>
         <div className="main bg-center sm:bg-right-top flex overflow-hidden relative flex-col justify-start text-white capitalize min-h-[769px]">
            <div className="px-12 flex relative top-20 flex-col items-start w-full max-lg:max-w-full">
               <div className="text-7xl leading-[105px] w-[678px] max-lg:mt-10 max-lg:max-w-full max-lg:text-4xl ">
                  <span className="font-semibold text-white capitalize">
                     Fostering Innovation for{" "}
                  </span>
                  <span className="font-semibold text-white capitalize underline decoration-emerald-300">
                     Your App Ideas
                  </span>
               </div>
               <div className="mt-5 text-lg leading-7 w-[556px] max-lg:max-w-full">
                  Turning your app ideas into reality. Our team crafts tailored
                  solutions using cutting-edge tech. Let's make your vision a reality,
                  one app at a time.
               </div>{" "}
               <button onClick={() => {
                  // click here for appoint
               }} className="justify-center px-4 py-3 mt-7 mb-24 text-md leading-7 whitespace-nowrap bg-emerald-300 rounded-xl text-slate-900 max-lg:mb-10">
                  Appointment
               </button>
            </div>
         </div>

         <div className="flex flex-col p-12 bg-slate-900 max-lg:px-5">
            <div className="mt-6 max-lg:max-w-full">
               <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
                  <div className="flex flex-col w-[61%] max-lg:ml-0 max-lg:w-full">
                     <div className="text-4xl font-semibold text-white capitalize leading-[50px] max-lg:max-w-full max-lg:text-4xl max-lg:leading-[45px]">
                        Bringing your app concepts to life, driven by your imagination.
                     </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[39%] max-lg:ml-0 max-lg:w-full">
                     <div className="flex flex-col max-lg:mt-7">
                        <div className="justify-center px-11 py-6 text-sm lg:text-lg leading-7 text-center text-white capitalize border border-white border-solid bg-zinc-300 bg-opacity-0 rounded-[47px] max-lg:px-5">
                           Let's turn your ideas into the next big app success story.
                        </div>{" "}
                        <div className="flex gap-2.5 self-end mt-5 w-[89px]">
                           <button onClick={() => {
                              setPage(ele => {
                                 return ((ele - 1) + maxPage) % maxPage
                              })
                           }}>
                              <img 
                                 loading="lazy"
                                 src={left}
                              />
                           </button>

                           {" "}

                           <button onClick={() => {
                              setPage(ele => {
                                 return (ele + 1) % maxPage;
                              })
                           }}>
                              <img 
                                 loading="lazy"
                                 src={right}
                              />
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>{" "}
            <div className="mt-16 max-lg:pr-5 max-lg:mt-10 max-lg:max-w-full">
               <div className="flex flex-col gap-5 md:flex-row">
                  {
                     pagesClassnames ? pagesClassnames[page].map((value, index) => {
                        return <img key={index} src={value} className={`aspect-square flex flex-col w-[33%] max-lg:ml-0 max-md:w-full`} /> 
                     }) : <></>
                  }
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;