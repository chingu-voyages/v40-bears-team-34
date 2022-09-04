import React from 'react'
import { useSelector } from 'react-redux'
import Apartment from '../components/Apartment'

const Apartments = () => {
    const { apartments, loading, error } = useSelector(
        (state) => state.apartments
    )
    return (
        <div className="text-2xl min-h-[90vh] flex flex-wrap mx-4 my-7 items-center justify-center bg-[#f2f2f2]">
            {loading && <h3>Loading...</h3>}
            {!loading && error ? <p>Error : {error}</p> : null}
            {!loading && apartments.length > 0
                ? apartments.map((apartment) => (
                      <Apartment apartment={apartment} key={apartment._id} />
                  ))
                : null}
        </div>
    )
}

export default Apartments
