import * as React from "react";
import { useState } from "react";
import logoIcon from '../assets/logo.svg'
import menuIcon from '../assets/menu.svg'
import closeIcon from '../assets/close.svg'

function Navbar() {
   const [menu, openMenu] = useState(false);

   return (
      <div className="flex gap-5 justify-between items-center px-14 py-5 text-xl text-white bg-slate-900 max-lg:flex-wrap max-lg:px-5">
         <div className="flex gap-2 self-stretch my-auto text-xl font-medium whitespace-nowrap flex-row items-center">
            <img
               loading="lazy"
               src={logoIcon}
            />
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
               <img
                  loading="lazy"
                  src={menuIcon}
               />
            </button> :

               <div className="block md:hidden" onClick={() => {
                  openMenu(ele => !ele);
               }}>
                  <img
                     loading="lazy"
                     src={closeIcon}
                  />

                  <div className="absolute text-white bg-slate-900 flex flex-col gap-5 pb-5 px-5 top-24 right-0 w-[100vw] h-fit z-10">
                     <button className="border-emerald-300 border-[0.2px] rounded-xl py-2">Home</button>
                     <button className="border-emerald-300 border-[0.2px] rounded-xl py-2">Services </button>
                     <button className="border-emerald-300 border-[0.2px] rounded-xl py-2">About us</button>
                     <button className="border-emerald-300 border-[0.2px] rounded-xl py-2">Help</button>

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