import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SoloApartment from '../components/SoloApartment'
import { fetchApartment } from '../features/apartment/apartmentSlice'

const Apartment = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { apartment, loading, error } = useSelector(
        (state) => state.apartment
    )
    useEffect(() => {
        dispatch(fetchApartment(id))
    }, [])
    return (
        <div className="text-2xl min-h-[90vh] flex flex-col items-center justify-center bg-[#f2f2f2] py-7">
            {loading && <h3>Loading...</h3>}
            {!loading && error ? <p>Error : {error}</p> : null}
            {!loading && <SoloApartment apartment={apartment} />}
        </div>
    )
}

export default Apartment
