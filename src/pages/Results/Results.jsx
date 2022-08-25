import React from "react";

// Importing other components
import LivabilityResults from "./LivabilityResults";
import ApartmentResults from "./ApartmentResults";

// Importing Slider
import Slider from "./Slider";

const results = {
  // Contains data of apartaments complex
  // This data is already filtered by the backend
  // This case is assuming that I got an array with multiple cities and apartment complexes.
  data: [
    {
      state: "CA",
      city: "San Diego",
      // List of apartments
      apartamentsList: [
        {
          monthlyRent: 1500,
          amenities: {
            petFriendly: true,
            gated: true,
            inUnitWasherDryer: true,
            pool: true,
            fitnessCenter: true,
            parking: true,
          },
          amenitiesLabel: [
            "Pet Friendly",
            "Gated",
            "In-Unit Washer/Dryer",
            "Pool",
            "Fitness Center",
            "Parking",
          ],
          image: "../../assets/apartments.jpg",
          name: "Pointe 38",
          contactPerson: "John Doe",
          contactEmail: "johndoe@gmail.com",
          bedrooms: 1,
          reviews: {},
        },
      ],
      // Livability score, generated in backend, and added to the object
      // after being filtered by db
      livabilityScore: {
        // Total score generated
        totalScore: 85,
        reviewInsides: {
          // List that display amenities selected with their score
          // These rates must be numbers to make bar chart
          petFriendly: {
            positivityRate: 5,
            negativityRate: 68,
          },
          gated: {
            positivityRate: 12,
            negativityRate: 35,
          },
          inUnitWasherDryer: {
            positivityRate: 77,
            negativityRate: 48,
          },
          pool: {
            positivityRate: 80,
            negativityRate: 17,
          },
          fitnessCenter: {
            positivityRate: 50,
            negativityRate: 100,
          },
          parking: {
            positivityRate: 21,
            negativityRate: 50,
          },
        },
      },
      //
    },
    {
      state: "FL",
      city: "Orlando",
      // List of apartments
      apartamentsList: [
        {
          monthlyRent: 1500,
          amenities: {
            petFriendly: true,
            gated: true,
            inUnitWasherDryer: true,
            pool: true,
            fitnessCenter: true,
            parking: true,
          },
          amenitiesLabel: [
            "Pet Friendly",
            "Gated",
            "In-Unit Washer/Dryer",
            "Pool",
            "Fitness Center",
            "Parking",
          ],
          image: "../../assets/apartments.jpg",
          name: "Pointe 38",
          contactPerson: "John Doe",
          contactEmail: "johndoe@gmail.com",
          bedrooms: 1,
          reviews: {},
        },
      ],
      // Livability score, generated in backend, and added to the object
      // after being filtered by db
      livabilityScore: {
        // Total score generated
        totalScore: 41,
        reviewInsides: {
          // List that display amenities selected with their score
          // These rates must be numbers to make bar chart
          petFriendly: {
            positivityRate: 5,
            negativityRate: 68,
          },
          gated: {
            positivityRate: 12,
            negativityRate: 35,
          },
          inUnitWasherDryer: {
            positivityRate: 77,
            negativityRate: 48,
          },
          pool: {
            positivityRate: 80,
            negativityRate: 17,
          },
          fitnessCenter: {
            positivityRate: 50,
            negativityRate: 100,
          },
          parking: {
            positivityRate: 21,
            negativityRate: 50,
          },
        },
      },
      //
    },
    {
      state: "OR",
      city: "Portland",
      // List of apartments
      apartamentsList: [
        {
          monthlyRent: 1500,
          amenities: {
            petFriendly: true,
            gated: true,
            inUnitWasherDryer: true,
            pool: true,
            fitnessCenter: true,
            parking: true,
          },
          amenitiesLabel: [
            "Pet Friendly",
            "Gated",
            "In-Unit Washer/Dryer",
            "Pool",
            "Fitness Center",
            "Parking",
          ],
          image: "../../assets/apartments.jpg",
          name: "Pointe 38",
          contactPerson: "John Doe",
          contactEmail: "johndoe@gmail.com",
          bedrooms: 1,
          reviews: {},
        },
      ],
      // Livability score, generated in backend, and added to the object
      // after being filtered by db
      livabilityScore: {
        // Total score generated
        totalScore: 60,
        reviewInsides: {
          // List that display amenities selected with their score
          // These rates must be numbers to make bar chart
          petFriendly: {
            positivityRate: 5,
            negativityRate: 68,
          },
          gated: {
            positivityRate: 12,
            negativityRate: 35,
          },
          inUnitWasherDryer: {
            positivityRate: 77,
            negativityRate: 48,
          },
          pool: {
            positivityRate: 80,
            negativityRate: 17,
          },
          fitnessCenter: {
            positivityRate: 50,
            negativityRate: 100,
          },
          parking: {
            positivityRate: 21,
            negativityRate: 50,
          },
        },
      },
      //
    },
  ],
};
/**
 *
 * @returns
 * Component that display results, gauge chart, liability score,
 * bar chart, toggle buttons, results per city, single results or errors.
 */

const Results = () => {
  // data to display livalibility results / gauge chart
  const livabilityData = results.data.map((stateResult) => {
    const { state, city, livabilityScore } = stateResult;
    const { totalScore } = livabilityScore;
    return { state, city, score: totalScore };
  });
  // console.log(livabilityData);

  // data to display apartments

  const apartmentData = results.data.map((stateResult) => {
    return { data: stateResult };
  });

  return (
    <div className="text-2xl min-h-[90vh] flex flex-col items-center justify-center">
      <Slider component={LivabilityResults} componentData={livabilityData} />
      <h1 className="m-5 font-bold">Apartment results:</h1>
      <Slider component={ApartmentResults} componentData={apartmentData} />
    </div>
  );
};

export default Results;
