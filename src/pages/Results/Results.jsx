import React from "react";

// Importing other components
import LiabilityResults from "./LiabilityResults";

/**
 *
 * @returns
 * Component that display results, gauge chart, liability score,
 * bar chart, toggle buttons, results per city, single results or errors.
 */
const Results = () => {
  return (
    <div className="text-2xl min-h-[90vh] w-[100%] flex flex-col items-center justify-center">
      <LiabilityResults />
    </div>
  );
};

export default Results;
