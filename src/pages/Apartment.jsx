import React from 'react'
import { useParams } from 'react-router-dom'
import SoloApartment from '../components/SoloApartment'

const Apartment = () => {
    const { id } = useParams()
    return (
        <div className="text-2xl min-h-[90vh] flex flex-col items-center justify-center bg-[#f2f2f2]">
            <SoloApartment />
        </div>
    )
}

export default Apartment
