import React, { useState } from "react";

import Slider from "./Slider";
import ApartmentsSlider from "./ApartmentsSlider";
import ApartmentBox from "./ApartmentBox";

const ApartmentResults = ({ config: apartmentData }) => {
  // Configuring data for component
  // Aprtment List > 1

  // Logic to render multiple apartments
  const apartments = apartmentData.data.map((state) => {
    const { city, state: stateName } = state;
    // Loop through apartments List
    const finalApartmentData = state.apartamentsList.map((apartment) => {
      return [
        <ApartmentBox
          labels={{ city, stateName }}
          apartmentData={apartment}
          chartData={apartmentData.data}
        />,
      ];
    });
    return finalApartmentData;
  });
  console.log(apartments);

  return (
    <div className="w-[100%] py-16 h-full">
      <h1 className="m-5 uppercase text-center py-10 font-bold">
        Apartment results
      </h1>

      <ApartmentsSlider components={apartments} />
    </div>
  );
};

export default ApartmentResults;
