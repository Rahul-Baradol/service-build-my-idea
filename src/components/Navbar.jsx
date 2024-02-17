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
               className="aspect-square w-10"
               loading="lazy"
               src={logoIcon}
            />
            <div className="grow hidden md:block">BuildMyIdea</div>
         </div>

         <div className="hidden md:flex gap-5 justify-between self-stretch my-auto">
            <button className="grow text-emerald-300  text-md">Home</button>
            <button className="text-md">Services </button>
            <button className="text-md">About us</button>
            <button className="grow text-md">Help</button>
         </div>
         <button className="hidden md:block justify-center text-sm h-[45px] px-5 py-1 text-black whitespace-nowrap bg-emerald-300 rounded-xl">
            Sign Up
         </button>

         {
            !menu ? <button className="block md:hidden" onClick={() => {
               openMenu(ele => !ele);
            }}>
               <img
                  loading="lazy"
                  src={menuIcon}
                  className="aspect-square w-6"
               />
            </button> :

               <div className="block md:hidden" onClick={() => {
                  openMenu(ele => !ele);
               }}>
                  <img
                     loading="lazy"
                     src={closeIcon}
                     className="aspect-square w-6"
                  />

                  <div className="z-20 absolute text-white bg-slate-900 flex flex-col gap-5 pb-5 px-5 top-20 right-0 w-[100vw] h-fit">
                     <button className="border-emerald-300 border-[0.2px] text-sm rounded-xl py-2">Home</button>
                     <button className="border-emerald-300 border-[0.2px] text-sm rounded-xl py-2">Services </button>
                     <button className="border-emerald-300 border-[0.2px] text-sm rounded-xl py-2">About us</button>
                     <button className="border-emerald-300 border-[0.2px] text-sm rounded-xl py-2">Help</button>

                     <button className="block md:hidden justify-center h-[50px] text-sm self-stretch px-5 py-1 text-black whitespace-nowrap bg-emerald-300 rounded-xl">
                        Sign Up
                     </button>
                  </div>
               </div>
         }
      </div>
   );
}

export default Navbar;