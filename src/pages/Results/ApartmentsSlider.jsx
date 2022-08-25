import React, { useState } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { VscCircleOutline } from "react-icons/vsc";

const ApartmentsSlider = ({ components: Components }) => {
  console.log(Components[0]);
  const [current, setCurrent] = useState(0);
  const length = Components[0].length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    onStateChange();
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Components[0]) || Components[0].length <= 0) {
    return null;
  }

  return (
    <div className="relative flex items-center w-[100%] flex-col p-4 bg-transparent">
      {Components[0].map((Component, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <div className="hidden md:block">
              <BsArrowLeftCircle
                onClick={prevSlide}
                className="md:absolute top-[55%]  text-black cursor-pointer select-none z-[2]"
                size={30}
              />
            </div>
            {index === current && Component}
            <div className="hidden md:block">
              <BsArrowRightCircle
                onClick={nextSlide}
                className="md:absolute top-[55%] left-[68%] text-black cursor-pointer select-none z-[2]"
                size={30}
              />
            </div>
          </div>
        );
      })}
      <div className="absolute justify-between mt-2 bottom-[2%] ">
        <button>
          <VscCircleOutline size={20} className="mx-2" />
        </button>
        <button>
          <VscCircleOutline size={20} className="mx-2" />
        </button>
        <button>
          <VscCircleOutline size={20} className="mx-2" />
        </button>
      </div>
    </div>
  );
};

export default ApartmentsSlider;
