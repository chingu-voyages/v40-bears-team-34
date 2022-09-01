import React, { useState } from "react";
import BarChart from "./BarChart";
import Slider from "./Slider";

// Importing icons
import { MdOutlineApartment, MdAttachMoney, MdListAlt } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { BiBed } from "react-icons/bi";

import apartment from "../../assets/apartments.jpg";

const ApartmentBox = ({ labels, apartmentData, chartData }) => {
  console.log(chartData);
  const { city, stateName } = labels;
  const { amenitiesLabel, bedrooms, image, monthlyRent, name } = apartmentData;
  // Setting icons, later can be a favorites functionality
  const [isFilled, setIsFilled] = useState(false);
  const filledHandler = () => {
    setIsFilled(!isFilled);
  };
  return (
    <div className="lg:w-[800px]  h-[880px] w-[80%] border relative border-gray-300 rounded-md shadow-lg hover:shadow-xl py-1 px-1 m-auto">
      {!isFilled ? (
        <AiOutlineHeart
          className="absolute right-2 top-0 md:top-3"
          size={30}
          onClick={filledHandler}
        />
      ) : (
        <BsHeartFill
          className="absolute right-2 md:top-3"
          color="#C21E56"
          size={30}
          onClick={filledHandler}
        />
      )}
      {/* Img + description */}
      <div className="flex flex-col lg:justify-between items-center py-4 ">
        <img
          className=" rounded-[5%] w-[300px] h-[300px] border mb-2 mr-2"
          src={apartment}
          alt="apartment building"
        />
        <div className="flex flex-col p-2 my-4  border rounded-md border-gray-300 ">
          <h1 className="self-center mb-4  border-gray-300">{name}</h1>

          {/* Apartment info box + icon */}
          <div className="flex items-center text-sm  border-gray-300 my-2 ">
            <p>{<MdOutlineApartment size={20} className="mr-1" />} </p>
            <p>
              <strong>City: </strong> {`${city}`}
            </p>
          </div>
          {/* Apartment info box + icon */}
          <div className="flex items-center text-sm  border-gray-300 my-2 ">
            <p>{<BiBed size={20} className="mr-1" />} </p>
            <p>
              <strong>Bedrooms: </strong>
              {`${bedrooms} `}
            </p>
          </div>
          {/* Apartment info box + icon */}
          <div className="flex items-center text-sm border-gray-300 my-2 ">
            <p>{<MdAttachMoney size={20} className="mr-1" />} </p>
            <p>
              <strong>Rent: </strong> {`${monthlyRent} `}
            </p>
          </div>
          {/* Apartment info box + icon */}
          <div className="flex items-start text-sm mb-2 ">
            <p className=" self-center">
              {<MdListAlt size={20} className="mr-1" />}{" "}
            </p>

            <p>
              <strong>Amenities: </strong>
              {`${amenitiesLabel.join(", ")}`}
            </p>
          </div>
        </div>
        {/* Bar Chart Component. The only way to make it responsive is making 
    div relative to its parent*/}
        <div className="relative w-[80%] lg:h-[280px] h-[250px]">
          <BarChart chartData={chartData} />
        </div>
      </div>
    </div>
  );
};

export default ApartmentBox;
