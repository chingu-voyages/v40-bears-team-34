import React, { useState } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { VscCircleOutline } from "react-icons/vsc";

// Slider for the gauge chart

const Slider = ({ component: Component, componentData, ...componentProps }) => {
  const [current, setCurrent] = useState(0);
  const length = componentData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(componentData) || componentData.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex items-center flex-col p-4 bg-transparent">
      {componentData.map((slide, index) => {
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
                className="md:absolute top-[55%] left-[30px] text-black cursor-pointer select-none z-[2]"
                size={30}
              />
            </div>
            {index === current && <Component config={slide} />}
            <div className="hidden md:block">
              <BsArrowRightCircle
                onClick={nextSlide}
                className="md:absolute top-[55%] right-[30px] text-black cursor-pointer select-none z-[2]"
                size={30}
              />
            </div>
          </div>
        );
      })}
      <div className="absolute justify-between mt-2 bottom-[5%] sm:bottom-[8%] md:bottom-[10%] ">
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

export default Slider;
