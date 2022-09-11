import React from 'react'
import BarChart from '../pages/Results/BarChart'
import ApartmentReviews from './ApartmentReviews'

const SoloApartment = ({ apartment }) => {
    return (
        <>
            <div className="transition ease-in delay-150 w-[90vw] md:w-[75vw] my-6  md:flex bg-secondary rounded-lg overflow-hidden mb-10 hover:cursor-pointer shadow-md hover:shadow-2xl  hover:scale-102">
                <img
                    src={apartment.image}
                    alt="image"
                    className="w-full lg:h-[350px] xl:h-[400px] "
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                        <p
                            className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                            {apartment.name}
                        </p>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                        {apartment.city}
                    </p>
                    <div className="w-full flex flex-wrap">
                        {apartment.amenities &&
                            Object.entries(apartment.amenities)
                                .map((item) => {
                                    if (item[1] === true)
                                        return { item: item[0] }
                                })
                                .filter((item) => item !== undefined)
                                .map((item) => (
                                    <span className="text-sm mx-1 px-3 py-2 my-2 rounded-lg bg-primary text-[#fff]">
                                        {item.item}
                                    </span>
                                ))}
                    </div>
                </div>
            </div>
            <div className="w-[90vw] md:w-[75vw] m-6 px-5 py-5 border border-secondary bg-[#f7f7f7]">
                <BarChart
                    key={apartment._id}
                    chartData={apartment.reviewScores}
                    apartmentName={apartment.name}
                />
            </div>
            <ApartmentReviews reviews={apartment.reviews} />
        </>
    )
}

export default SoloApartment
