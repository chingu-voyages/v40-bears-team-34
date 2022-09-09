import React from 'react'
import { useSelector } from 'react-redux'
import Apartment from '../components/Apartment'
import { shuffle } from '../utils/shuffle'

const Apartments = () => {
    const { apartments, loading, error } = useSelector(
        (state) => state.apartments
    )

    const shuffled = shuffle(apartments)

    return (
        <>
            <div className="text-2xl min-h-[90vh]  bg-[#f2f2f2]">
                <h1 className="text-center font-bold text-2xl my-5 py-5">
                    All Apartments
                </h1>
                <div className="flex flex-wrap items-center justify-center">
                    {loading && <h3>Loading...</h3>}
                    {!loading && error ? <p>Error : {error}</p> : null}
                    {!loading && apartments.length > 0
                        ? shuffled.map((apartment) => (
                              <Apartment
                                  apartment={apartment}
                                  key={apartment._id}
                              />
                          ))
                        : null}
                </div>
            </div>
        </>
    )
}

export default Apartments
