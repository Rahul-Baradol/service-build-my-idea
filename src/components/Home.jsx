import * as React from "react";
import homeBackground from '../assets/home.svg'
import '../componentStyles/Home.css'

function Home(props) {
   return (
      <div className="main bg-center sm:bg-right-top flex overflow-hidden relative flex-col justify-center text-white capitalize min-h-[769px]">
         {/* <img className="" src={homeBackground} /> */}
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
   );
}

export default Home;