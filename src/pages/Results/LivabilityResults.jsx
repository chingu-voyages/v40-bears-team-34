import React from "react";

// Importing gauge Chart
import GaugeChart from "./GaugeChart";

/**
 *
 * @returns
 * Gets data and displays liability results,
 * gauge chart, city and state.
 * Will display information only if data is available
 */

// This component needs City, State and Score(number)
const LivabilityResults = ({ config }) => {
  const { city, state, score } = config;

  const message = (
    <p className="py-16 -4">
      With a <em>Livability Score</em> of: <strong>{score}%</strong>, we
      recommend:
    </p>
  );
  return (
    <div className="m-auto w-full h-[600px]">
      {message}
      <div className="flex flex-col items-center shadow-xl hover:shadow-xl py-16 w-[100%] bg-[#f2f2f2] border">
        <div className="relative mb-4">
          <GaugeChart score={score} />
        </div>
        <p className="py-4 my-4">{city + ", " + state}</p>
      </div>
      <p className="text-sm text-center my-2">
        Use the arrows or dots to browse between results
      </p>
    </div>
  );
};

export default LivabilityResults;
