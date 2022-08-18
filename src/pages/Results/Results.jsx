import React from "react";

// Importing other components
import LivabilityResults from "./LivabilityResults";
import ApartmentResults from "./ApartmentResults";

/**
 *
 * @returns
 * Component that display results, gauge chart, liability score,
 * bar chart, toggle buttons, results per city, single results or errors.
 */
const Results = () => {
  return (
    <div className="text-2xl min-h-[90vh] flex flex-col items-center justify-center">
      <LivabilityResults />
      <ApartmentResults />
    </div>
  );
};

export default Results;
