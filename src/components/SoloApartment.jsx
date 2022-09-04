import React from 'react'
import { useParams } from 'react-router-dom'

const SoloApartment = () => {
    const { id } = useParams()
    return <div>Apartment : {id}</div>
}

export default SoloApartment
