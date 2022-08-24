import React, { useState, useRef } from "react";

const states = [
  "San Diego, CA",
  "Atlanta, GA",
  "Dallas, TX",
  "Nashville, TN",
  "Phoenix, AZ",
  "Jacksonville, FL",
];

const amenities = [];

const SearchForm = () => {
  // Array that indicates state of individual checkboxes (state checkboxes)
  const [isStateChecked, setStateIsChecked] = useState(
    // Setting 6 as a number of states
    new Array(states.length).fill(false)
  );
  // Adding refs to check values
  const inputsRef = useRef([]);

  /**
   * @param {number} position | state index position
   * This function gets the index of the checkbox we
   * are changing the state to checked
   */
  const handleStateChecked = (position) => {
    const updateCheckedState = isStateChecked.map((isChecked, index) =>
      index === position ? !isChecked : isChecked
    );

    setStateIsChecked((prevState) => updateCheckedState);

    console.log(inputsRef.current.checked);
  };

  return (
    <div className="px-12 py-6 bg-white font-['Verdana']">
      <form>
        <div>
          {/* City Selection */}
          <p className="text-center text-xl text-[#067272]">
            Pick the cities to compare
          </p>
          <p className="text-center text-xs text-[#067272]">Minimum 2</p>
          <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4 text-center">
            {/* Generating state checkboxes dinamically */}
            {states.map((state, index) => {
              return (
                <div
                  key={index}
                  // Passing updating function with index
                  onClick={() => handleStateChecked(index)}
                  className={
                    isStateChecked[index]
                      ? "py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer bg-[#A1D2DE]"
                      : "py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer hover:bg-[#A1D2DE] "
                  }
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={isStateChecked[index]}
                    onChange={() => handleStateChecked(index)}
                    value={state}
                    ref={inputsRef}
                  />
                  {state}
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-center text-2xl mt-10 text-[#067272]">
          Apartment Features
        </p>

        <div>
          {" "}
          {/* Bed Quantity */}
          <p className="text-center text-xl mt-4 text-[#067272]">Beds</p>
          <div className="flex justify-evenly mt-4">
            <input
              type="radio"
              value="1-bedroom"
              name="rooms"
              className="checked:bg-red-300"
            />
            1 Bedroom
            <input type="radio" value="2-bedroom" name="rooms" />2 Bedrooms
            <input type="radio" value="3-bedroom" name="rooms" />3 Bedrooms
          </div>
        </div>

        <div>
          {" "}
          {/* Rent Range */}
          <div>
            <p className="text-center text-xl mt-10 text-[#067272]">
              Monthly Rent
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div>
              <input
                type="number"
                name="min"
                min="0"
                id="min"
                placeholder="Min"
                autoComplete="given-value"
                className="border border-gray-300 py-2"
              />
            </div>
            <div>
              <input
                type="number"
                name="max"
                id="max"
                placeholder="Max"
                autoComplete="given-value"
                className="border border-gray-300 py-2"
              />
            </div>
          </div>
        </div>

        <div>
          {" "}
          {/* Amenity Selection */}
          <div>
            <p className="text-center text-xl mt-10 text-[#067272]">
              Amenities
            </p>
          </div>
          <div>
            <p className="text-center text-xs text-[#067272]">Minimum 2</p>
          </div>
          <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4">
            <button
              type="button"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              Pet Friendly
            </button>
            <button
              type="button"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              Gated
            </button>
            <button
              type="button"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              In-Unit Washer/Dryer
            </button>
            <button
              type="button"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              Pool
            </button>
            <button
              type="button"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              Fitness Center
            </button>
            <button
              type="button"
              className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50"
            >
              Parking
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 mt-12">
          <button
            type="button"
            className="py-2 px-2 border border-black rounded-lg shadow-sm text-sm font-medium hover:bg-[#067272] hover:text-[#ffffff] bg-[#A1D2DE] text-[#067272]"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;