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
    <p className="p-2 m-4">
      With a <em>Livability Score</em> of: <strong>{score}%</strong>, we
      recommend:
    </p>
  );
  return (
    <div className="flex flex-col items-center shadow-xl hover:shadow-xl py-4 w-[100%]">
      {message}
      <div className="relative m-4">
        <GaugeChart score={score} />
      </div>
      <p className="py-4 my-4">{city + ", " + state}</p>
    </div>
  );
};

export default LivabilityResults;
