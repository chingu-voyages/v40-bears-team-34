import React, { useState } from "react";

// Importing icons
import { MdOutlineApartment, MdAttachMoney, MdListAlt } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";

// Importing Bar Chart
import BarChart from "./BarChart";

/** FAKE DATA
 * DELETE LATER
 * This object mimics format of data coming from API
 */
import apartment from "../../assets/apartments.jpg";
const results = {
  // Contains data of apartaments complex
  // This data is already filtered by the backend
  // This case is assuming that I got an array with multiple cities and apartment complexes.
  data: [
    {
      state: "California",
      city: "San Diego",
      // List of apartments
      apartamentsList: [
        {
          monthlyRent: { min: 1200, max: 1500 },
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
          bedrooms: { min: 1, max: 2 },
          reviews: {},
        },
      ],
      // Livability score, generated in backend, and added to the object
      // after being filtered by db
      livabilityScore: {
        // Total score generated
        totalScore: 100,
        reviewInsides: {
          // List that display amenities selected with their score
          // These rates must be numbers to make bar chart
          petFriendly: {
            positivityRate: 0,
            negativityRate: 25,
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

const ApartmentResults = () => {
  const firstCity = results.data[0];
  const firstApartmentDetails = firstCity.apartamentsList[0];

  // Setting icons, later can be a favorites functionality
  const [isFilled, setIsFilled] = useState(false);

  const filledHandler = () => {
    setIsFilled(!isFilled);
  };

  return (
    // Box container
    <div className="flex flex-col xl:grid xl:grid-cols-2 items-center border border-gray-300 rounded-md shadow-lg hover:shadow-xl py-8 w-[90%] mb-40">
      {/* Individual Box */}
      <div
        onClick={filledHandler}
        className="flex border relative border-gray-300 rounded-md shadow-lg hover:shadow-xl py-4 px-4 m-4"
      >
        {!isFilled ? (
          <AiOutlineHeart className="absolute right-8 top-8" size={30} />
        ) : (
          <BsHeartFill className="absolute right-8 top-8" size={30} />
        )}
        {/* Img + description */}
        <div className="flex flex-col lg:justify-between items-center py-4">
          <img
            className=" rounded-[55%] w-[300px] h-[300px] border border-blue-300 mb-2 mr-2"
            src={apartment}
            alt="apartment building"
          />
          <div className="flex flex-col p-2 my-2">
            <h1 className="self-center mb-2">
              {firstCity.city + ", " + firstCity.state}
            </h1>

            {/* Apartment info box + icon */}
            <div className="flex items-center text-base">
              <p>{<MdOutlineApartment size={20} className="mr-1" />} </p>
              <p>{`Apartment Complex: ${firstApartmentDetails.name}`}</p>
            </div>
            {/* Apartment info box + icon */}
            <div className="flex items-center text-base">
              <p>{<MdAttachMoney size={20} className="mr-1" />} </p>
              <p>{`Rent: from $${firstApartmentDetails.monthlyRent.min} to $${firstApartmentDetails.monthlyRent.max}`}</p>
            </div>
            {/* Apartment info box + icon */}
            <div className="flex items-start text-base">
              <p className=" self-center">
                {<MdListAlt size={20} className="mr-1" />}{" "}
              </p>

              <p>
                {`Amenities: ${firstApartmentDetails.amenitiesLabel.join(
                  ", "
                )}`}
              </p>
            </div>
          </div>
          {/* Bar Chart Component. The only way to make it responsive is making 
          div relative to its parent*/}
          <div className="relative w-[90%]">
            <BarChart chartData={firstCity} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentResults;
