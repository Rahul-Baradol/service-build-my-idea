import * as React from "react";
import '../componentStyles/Home.css'
import { useState } from "react";

function Home(props) {
   const [page, setPage] = useState(0);
   const maxPage = 3;

   const [pagesClassnames, setPagesClassnames] = useState([
      ["phone1", "phone2", "phone3"],
      ["phone3", "phone2", "phone1"],
      ["phone2", "phone2", "phone2"],
   ])

   return (
      <>
         <div className="main bg-center sm:bg-right-top flex overflow-hidden relative flex-col justify-center text-white capitalize min-h-[769px]">
            <div className="p-12 flex relative flex-col items-start w-full max-md:max-w-full">
               <div className="mt-14 text-7xl leading-[105px] w-[678px] max-md:mt-10 max-md:max-w-full max-md:text-4xl ">
                  <span className="font-semibold text-white capitalize">
                     Fostering Innovation for{" "}
                  </span>
                  <span className="font-semibold text-white capitalize underline decoration-emerald-300">
                     Your App Ideas
                  </span>
               </div>
               <div className="mt-5 text-lg leading-7 w-[556px] max-md:max-w-full">
                  Turning your app ideas into reality. Our team crafts tailored
                  solutions using cutting-edge tech. Let's make your vision a reality,
                  one app at a time.
               </div>{" "}
               <button onClick={() => {
                  // click here for appoint
               }} className="justify-center px-5 py-4 mt-7 mb-24 text-xl leading-7 whitespace-nowrap bg-emerald-300 rounded-xl text-slate-900 max-md:mb-10">
                  Appointment
               </button>
            </div>
         </div>

         <div className="flex flex-col p-12 bg-slate-900 max-md:px-5">
            <div className="mt-6 max-md:max-w-full">
               <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                  <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                     <div className="text-5xl font-semibold text-white capitalize leading-[72px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[67px]">
                        Bringing your app concepts to life, driven by your imagination.
                     </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                     <div className="flex flex-col mt-8 max-md:mt-10">
                        <div className="justify-center px-11 py-6 text-lg leading-7 text-center text-white capitalize border border-white border-solid bg-zinc-300 bg-opacity-0 rounded-[47px] max-md:px-5">
                           Let's turn your ideas into the next big app success story.
                        </div>{" "}
                        <div className="flex gap-2.5 self-end mt-5 w-[89px]">
                           <button onClick={() => {
                              setPage(ele => {
                                 return ((ele - 1) + maxPage) % maxPage
                              })
                           }}>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M19 12H5M12 5L5 12l7 7" stroke="#fff" />
                              </svg>
                           </button>

                           {" "}

                           <button onClick={() => {
                              setPage(ele => {
                                 return (ele + 1) % maxPage;
                              })
                           }}>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="24"
                                 height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                              >
                                 <path d="M5 12h14M12 5l7 7-7 7" stroke="#fff" />
                              </svg>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>{" "}
            <div className="mt-16 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
               <div className="flex flex-col gap-5 md:flex-row">
                  {
                     pagesClassnames ? pagesClassnames[page].map((value, index) => {
                        return <div key={index} className={`${value} aspect-square flex flex-col w-[33%] max-md:ml-0 max-md:w-full`}></div>      
                     }) : <></>
                  }
               </div>
            </div>
         </div>
      </>
   );
}

export default Home;