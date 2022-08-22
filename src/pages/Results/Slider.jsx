import React, { useState } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { VscCircleOutline } from "react-icons/vsc";

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
        console.log(slide);

        return (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <BsArrowLeftCircle
              onClick={prevSlide}
              className="absolute top-[50%] left-[40px] text-black cursor-pointer select-none z-[2]"
              size={40}
            />
            {index === current && <Component config={slide} />}
            <BsArrowRightCircle
              onClick={nextSlide}
              className="absolute top-[50%] right-[40px] text-black cursor-pointer select-none z-[2]"
              size={40}
            />
          </div>
        );
      })}
      <div className="flex justify-between mt-2 relative bottom-[55px]">
        <button>
          <VscCircleOutline size={30} className="mx-2" />
        </button>
        <button>
          <VscCircleOutline size={30} className="mx-2" />
        </button>
        <button>
          <VscCircleOutline size={30} className="mx-2" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
