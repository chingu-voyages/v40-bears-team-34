import React from "react";
import { BsDot } from "react-icons/bs";
// importing image placeholder -- will be deleted later
import gaugeChart from "../../assets/gauge-placeholder.jpg";

/**
 *
 * @returns
 * Gets data and displays liability results,
 * gauge chart, city and state.
 * Will display information only if data is available
 */

const LivabilityResults = () => {
  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-md shadow-lg hover:shadow-xl py-8 w-[90%] mb-20">
      <h1 className="p-2">We have found 2 cities that fit your needs</h1>
      <p className="p-2 mb-10">
        With a <em>Livability Score</em> of: <strong>100</strong>, we recommend:
      </p>
      {/* {This part will eventually become its own component since
        we are going to evaluate different cases:
        1 result, 1+, or none} */}
      <div className="flex flex-col items-center border border-gray-400 rounded-md shadow-lg hover:shadow-xl py-4 w-[90%]">
        <img src={gaugeChart} alt="gauge chart" width="350px" />
        <p className="py-4">San Diego, California</p>
        {/* This buttons will be configured to  */}
        <div className="flex justify-between border border-gray-400 rounded-md ">
          <button>
            <BsDot size={30} />
          </button>
          <button>
            <BsDot size={30} />
          </button>
          <button>
            <BsDot size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LivabilityResults;
