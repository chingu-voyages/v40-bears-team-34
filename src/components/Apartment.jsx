import React from 'react'
import { useNavigate } from 'react-router-dom'

const Apartment = ({ apartment }) => {
    const navigate = useNavigate()
    return (
        <div
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4 "
            onClick={() => navigate(`/apartments/${apartment._id}`)}
        >
            <div className="transition ease-in delay-150 bg-[#FDEEDC] rounded-lg overflow-hidden mb-10 hover:cursor-pointer shadow-md hover:shadow-2xl  hover:scale-105">
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
                        {Object.entries(apartment.amenities)
                            .map((item) => {
                                if (item[1] === true) return { item: item[0] }
                            })
                            .filter((item) => item !== undefined)
                            .map((item) => (
                                <span className="text-sm mx-1 px-3 py-2 my-2 rounded-lg bg-[#FFD8A9]">
                                    {item.item}
                                </span>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apartment
