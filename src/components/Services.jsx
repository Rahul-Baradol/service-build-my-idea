import * as React from "react";
import design from '../assets/Design.svg'
import laptop from '../assets/LaptopCoding.svg'
import mobile from '../assets/WindowsMobile.svg'
import '../App.css'

function Services(props) {
  return (
    <div className="flex flex-col py-12 bg-slate-900">
      <div className="self-center mt-2.5 text-4xl font-semibold leading-7 text-white capitalize max-lg:text-2xl">
        SERVICES WE PROVIDE
      </div>
      <div className="self-center mt-7 text-md leading-7 text-center capitalize text-neutral-400 max-lg:max-w-[90vw]">
        Catering to various categories, we transform diverse app concepts into
        seamless experiences, ensuring every idea finds its perfect form.
      </div>
      <div className="mt-12 max-lg:mt-0 max-lg:max-w-full flex flex-col gap-0 md:gap-10">
        <div className="grid lg:grid-rows-2 sm:grid-rows-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10 px-3 sm:px-10 w-full h-fit">
          <div className="card flex flex-col items-center px-8 py-12 capitalize rounded-[55px]  max-lg:mt-10">
            <img
              loading="lazy"
              src={laptop}
              className="mt-1.5 aspect-square w-[74px]"
            />
            <div className="mt-4 text-xl font-semibold leading-5 text-white whitespace-nowrap">
              Web development
            </div>
            <div className="self-stretch mt-4 text-md leading-7 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor
            </div>
          </div>

          <div className="card flex flex-col items-center px-8 py-12  capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
            <img
              loading="lazy"
              src={laptop}
              className="mt-1.5 aspect-square w-[74px]"
            />
            <div className="mt-4 text-xl font-semibold leading-5 text-white whitespace-nowrap">
              Web development
            </div>
            <div className="self-stretch mt-4 text-md leading-7 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor
            </div>
          </div><div className="card flex flex-col items-center px-8 py-12  capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
            <img
              loading="lazy"
              src={laptop}
              className="mt-1.5 aspect-square w-[74px]"
            />
            <div className="mt-4 text-xl font-semibold leading-5 text-white whitespace-nowrap">
              Web development
            </div>
            <div className="self-stretch mt-4 text-md leading-7 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor
            </div>
          </div><div className="card flex flex-col items-center px-8 py-12  capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
            <img
              loading="lazy"
              src={laptop}
              className="mt-1.5 aspect-square w-[74px]"
            />
            <div className="mt-4 text-xl font-semibold leading-5 text-white whitespace-nowrap">
              Web development
            </div>
            <div className="self-stretch mt-4 text-md leading-7 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor
            </div>
          </div><div className="card flex flex-col items-center px-8 py-12  capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
            <img
              loading="lazy"
              src={laptop}
              className="mt-1.5 aspect-square w-[74px]"
            />
            <div className="mt-4 text-xl font-semibold leading-5 text-white whitespace-nowrap">
              Web development
            </div>
            <div className="self-stretch mt-4 text-md leading-7 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor
            </div>
          </div><div className="card flex flex-col items-center px-8 py-12  capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
            <img
              loading="lazy"
              src={laptop}
              className="mt-1.5 aspect-square w-[74px]"
            />
            <div className="mt-4 text-xl font-semibold leading-5 text-white whitespace-nowrap">
              Web development
            </div>
            <div className="self-stretch mt-4 text-md leading-7 text-center text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;