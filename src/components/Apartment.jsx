import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsHeartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import {
    addToWishlist,
    removeFromWishlist,
} from '../features/apartment/wishlistSlice'
import BarChart from '../pages/Results/BarChart'

const Apartment = ({ apartment }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const wishlisted = useSelector((state) =>
        state.wishlisted.wishlist.find(
            (wishlisted) => wishlisted._id === apartment._id
        )
    )
    console.log(location)
    const filledHandler = (e) => {
        if (!wishlisted) {
            dispatch(addToWishlist(apartment))
        } else {
            dispatch(removeFromWishlist(apartment._id))
        }
    }
    return (
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 px-4 ">
            <div className="transition ease-in delay-150 bg-secondary rounded-lg overflow-hidden mb-10 hover:cursor-pointer shadow-md hover:shadow-2xl  hover:scale-105 relative">
                {wishlisted === undefined ? (
                    <AiOutlineHeart
                        className="absolute right-9 top-7 z-10"
                        color="#a1d2de"
                        size={30}
                        onClick={filledHandler}
                    />
                ) : (
                    <BsHeartFill
                        className="absolute right-9 top-7 z-10 cursor-pointer"
                        color="#067272"
                        size={30}
                        onClick={filledHandler}
                    />
                )}
                <img
                    src={apartment.image}
                    alt="image"
                    className="w-full lg:h-[350px] xl:h-[400px] "
                    onClick={() => navigate(`/apartments/${apartment._id}`)}
                />
                <div
                    className="p-8 sm:p-9 md:p-7 xl:p-9 text-center"
                    onClick={() => navigate(`/apartments/${apartment._id}`)}
                >
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
                                <span className="text-sm mx-1 px-3 py-2 my-2 rounded-lg bg-primary text-[#fff]">
                                    {item.item}
                                </span>
                            ))}
                    </div>
                </div>
                {location.pathname !== '/apartments' ? (
                    <div className="w-[100%] ">
                        <div className="px-3  m-3 bg-[#f2f2f2]">
                            <BarChart
                                key={apartment._id}
                                chartData={apartment.reviewScores}
                                apartmentName={apartment.name}
                            />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Apartment
