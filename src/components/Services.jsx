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
      <div className="mt-12 max-lg:mt-10 max-lg:max-w-full flex flex-col gap-0 md:gap-10">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
          <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full px-5">
            <div className="card flex flex-col items-center px-8 py-12 w-full capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
              <img
                loading="lazy"
                src={laptop}
                className="mt-1.5 aspect-square w-[74px]"
              />
              <div className="mt-4 text-2xl font-semibold leading-7 text-white whitespace-nowrap">
                Web development
              </div>
              <div className="self-stretch mt-4 text-lg leading-7 text-center text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full px-5">
            <div className="card flex flex-col items-center px-8 py-12 w-full capitalize backdrop-blur-[20px] rounded-[55px] max-lg:px-5 max-lg:mt-10">
              <img
                loading="lazy"
                src={mobile}
                className="mt-1.5 aspect-square w-[74px]"
              />
              <div className="mt-4 text-2xl font-semibold leading-7 text-white whitespace-nowrap">
                App development
              </div>
              <div className="self-stretch mt-4 text-lg leading-7 text-center text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full px-5">
            <div className="card flex flex-col items-center px-8 py-12 w-full capitalize backdrop-blur-[20px] rounded-[55px] max-lg:px-5 max-lg:mt-10">
              <img
                loading="lazy"
                src={design}
                className="mt-1.5 aspect-square w-[74px]"
              />
              <div className="mt-4 text-2xl font-semibold leading-7 text-white">
                design
              </div>
              <div className="self-stretch mt-4 text-lg leading-7 text-center text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 max-lg:">
          <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full px-5">
            <div className="card flex flex-col items-center px-8 py-12 w-full capitalize rounded-[55px] max-lg:px-5 max-lg:mt-10">
              <img
                loading="lazy"
                src={laptop}
                className="mt-1.5 aspect-square w-[74px]"
              />
              <div className="mt-4 text-2xl font-semibold leading-7 text-white whitespace-nowrap">
                Web development
              </div>
              <div className="self-stretch mt-4 text-lg leading-7 text-center text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full px-5">
            <div className="card flex flex-col items-center px-8 py-12 w-full capitalize backdrop-blur-[20px] rounded-[55px] max-lg:px-5 max-lg:mt-10">
              <img
                loading="lazy"
                src={mobile}
                className="mt-1.5 aspect-square w-[74px]"
              />
              <div className="mt-4 text-2xl font-semibold leading-7 text-white whitespace-nowrap">
                App development
              </div>
              <div className="self-stretch mt-4 text-lg leading-7 text-center text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full px-5">
            <div className="card flex flex-col items-center px-8 py-12 w-full capitalize backdrop-blur-[20px] rounded-[55px] max-lg:px-5 max-lg:mt-10">
              <img
                loading="lazy"
                src={design}
                className="mt-1.5 aspect-square w-[74px]"
              />
              <div className="mt-4 text-2xl font-semibold leading-7 text-white">
                design
              </div>
              <div className="self-stretch mt-4 text-lg leading-7 text-center text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;