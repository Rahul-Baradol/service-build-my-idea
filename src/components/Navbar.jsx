import * as React from "react";
import { useState } from "react";

function Navbar() {
   const [menu, openMenu] = useState(false);

  return (
    <div className="flex gap-5 justify-between items-center px-14 py-5 text-xl text-white bg-slate-900 max-md:flex-wrap max-md:px-5">
      <div className="flex gap-2 self-stretch my-auto text-xl font-medium whitespace-nowrap flex-row items-center">
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M17.4 7.73334C12.0843 7.73334 7.73334 12.0843 7.73334 17.4V40.6C7.73334 45.9157 12.0843 50.2667 17.4 50.2667H40.6C45.9157 50.2667 50.2667 45.9157 50.2667 40.6V17.4C50.2667 12.0843 45.9157 7.73334 40.6 7.73334H17.4ZM17.4 11.6H40.6C43.8257 11.6 46.4 14.1743 46.4 17.4V37.6283C45.2833 37.11 43.973 36.7333 42.3408 36.7333H29.8572C29.8584 36.291 29.8477 35.8472 29.8723 35.4117C29.9187 34.7293 29.9895 34.0466 30.1441 33.4066C30.2441 32.9979 30.397 32.6021 30.5897 32.3003C31.7116 32.9156 34.0061 33.5314 36.3218 32.4249C39.1599 31.0677 40.1053 26.8779 40.1053 26.8779C37.9303 28.6121 36.0722 28.0752 33.9919 27.9805C32.0389 27.8916 30.2277 28.8871 30.0082 31.4016C29.5647 31.7976 29.3284 32.2876 29.1284 32.7609C29.1017 32.6764 29.0859 32.5925 29.0566 32.5079C28.9058 32.1077 28.7472 31.711 28.4978 31.3185C28.3679 31.1024 28.195 30.892 27.988 30.6992C27.8328 28.3926 26.8495 27.2501 25.2693 26.4474C23.4539 25.5252 20.5226 25.051 17.872 25.6658C19.7976 26.2593 20.4421 29.4614 21.9501 30.7181C23.2891 31.8339 25.3183 32.0941 27.2668 31.8811C27.444 32.1756 27.5946 32.5438 27.6973 32.9309C27.879 33.6114 27.9732 34.3448 28.0409 35.0794C28.155 36.5526 28.1416 38.0904 28.0333 39.5578H28.0409C28.0404 39.582 28.0376 39.6053 28.0371 39.6296L28.0333 39.6333V40.6H25.1333V36.7333H15.6592C13.8916 36.7333 12.5664 37.1517 11.6 37.5981V17.4C11.6 14.1743 14.1743 11.6 17.4 11.6Z" fill="white"/>
         </svg>
        <div className="grow self-start mt-3.5 hidden md:block">BuildMyIdea</div>
      </div>
      
      <div className="hidden md:flex gap-5 justify-between self-stretch my-auto">
        <button className="grow text-emerald-300">Home</button>
        <button>Services </button>
        <button>About us</button>
        <button className="grow">Help</button>
      </div>
      <button className="hidden md:block justify-center text-md self-stretch px-5 py-1 text-black whitespace-nowrap bg-emerald-300 rounded-xl">
        Sign Up
      </button>

      {
         !menu ? <button className="block md:hidden" onClick={() => {
            openMenu(ele => !ele); 
         }}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                  <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
               </svg>
         </button> : 
         
         <div className="block md:hidden" onClick={() => {
            openMenu(ele => !ele); 
         }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
               <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>

            <div className="absolute text-white bg-slate-900 flex flex-col gap-5 pb-5 px-5 top-24 right-0 w-[100vw] h-fit z-10">
               <button className="border-emerald-300 border-2 rounded-xl py-2">Home</button>
               <button className="border-emerald-300 border-2 rounded-xl py-2">Services </button>
               <button className="border-emerald-300 border-2 rounded-xl py-2">About us</button>
               <button className="border-emerald-300 border-2 rounded-xl py-2">Help</button>
               
               <button className="block md:hidden justify-center h-[50px] text-md self-stretch px-5 py-1 text-black whitespace-nowrap bg-emerald-300 rounded-xl">
                  Sign Up
               </button>
            </div>
         </div>
      }
    </div>
  );
}

export default Navbar;