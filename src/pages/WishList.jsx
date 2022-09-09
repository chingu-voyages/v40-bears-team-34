import React from 'react'
import { useSelector } from 'react-redux'
import Apartment from '../components/Apartment'
import { shuffle } from '../utils/shuffle'

const WishList = () => {
    const { wishlist, loading, error } = useSelector(
        (state) => state.wishlisted
    )
    const shuffled = shuffle(wishlist)
    return (
        <>
            <div className="text-2xl flex flex-col justify-center min-h-[90vh]  bg-[#f2f2f2]">
                <h1 className="text-center font-bold text-2xl my-5 py-5">
                    My WishList
                </h1>
                <div className="flex flex-wrap items-center justify-center">
                    {loading && <h3>Loading...</h3>}
                    {!loading && error ? <p>Error : {error}</p> : null}
                    {!loading && wishlist.length > 0 ? (
                        shuffled.map((apartment) => (
                            <Apartment
                                apartment={apartment}
                                key={apartment._id}
                            />
                        ))
                    ) : (
                        <h3>
                            When you add apartments to wishlist, It will be
                            displayed here
                        </h3>
                    )}
                </div>
            </div>
        </>
    )
}

export default WishList
