import React, { useState } from 'react'
import { useSelector } from 'react-redux'

// Importing other components
import LivabilityResults from './LivabilityResults'
import ApartmentResults from './ApartmentResults'

// Importing Slider
import Slider from './Slider'

const results = {
    // Contains data of apartaments complex
    // This data is already filtered by the backend
    // This case is assuming that I got an array with multiple cities and apartment complexes.
    data: [
        {
            state: 'CA',
            city: 'San Diego',
            // List of apartments
            apartamentsList: [
                {
                    monthlyRent: 1500,
                    amenities: {
                        petFriendly: true,
                        gated: true,
                        inUnitWasherDryer: true,
                        pool: true,
                        fitnessCenter: true,
                        parking: true,
                    },
                    amenitiesLabel: [
                        'Pet Friendly',
                        'Gated',
                        'In-Unit Washer/Dryer',
                        'Pool',
                        'Fitness Center',
                        'Parking',
                    ],
                    image: '../../assets/apartments.jpg',
                    name: 'Pointe 38',
                    contactPerson: 'John Doe',
                    contactEmail: 'johndoe@gmail.com',
                    bedrooms: 1,
                    reviews: {},
                },
                {
                    monthlyRent: 800,
                    amenities: {
                        petFriendly: true,
                        gated: true,
                        inUnitWasherDryer: true,
                        pool: true,
                        fitnessCenter: true,
                        parking: true,
                    },
                    amenitiesLabel: [
                        'Pet Friendly',
                        'Gated',
                        'In-Unit Washer/Dryer',
                        'Pool',
                        'Fitness Center',
                        'Parking',
                    ],
                    image: '../../assets/apartments.jpg',
                    name: 'Pointe 38',
                    contactPerson: 'John Doe',
                    contactEmail: 'johndoe@gmail.com',
                    bedrooms: 1,
                    reviews: {},
                },
                {
                    monthlyRent: 200,
                    amenities: {
                        petFriendly: true,
                        gated: true,
                        inUnitWasherDryer: true,
                        pool: true,
                        fitnessCenter: true,
                        parking: true,
                    },
                    amenitiesLabel: [
                        'Pet Friendly',
                        'Gated',
                        'In-Unit Washer/Dryer',
                        'Pool',
                        'Fitness Center',
                        'Parking',
                    ],
                    image: '../../assets/apartments.jpg',
                    name: 'Pointe 38',
                    contactPerson: 'John Doe',
                    contactEmail: 'johndoe@gmail.com',
                    bedrooms: 1,
                    reviews: {},
                },
                {
                    monthlyRent: 1100,
                    amenities: {
                        petFriendly: true,
                        gated: true,
                        inUnitWasherDryer: true,
                        pool: true,
                        fitnessCenter: true,
                        parking: true,
                    },
                    amenitiesLabel: [
                        'Pet Friendly',
                        'Gated',
                        'In-Unit Washer/Dryer',
                        'Pool',
                        'Fitness Center',
                        'Parking',
                    ],
                    image: '../../assets/apartments.jpg',
                    name: 'Pointe 38',
                    contactPerson: 'John Doe',
                    contactEmail: 'johndoe@gmail.com',
                    bedrooms: 1,
                    reviews: {},
                },
            ],
            // Livability score, generated in backend, and added to the object
            // after being filtered by db
            livabilityScore: {
                // Total score generated
                totalScore: 20,
                // ["Quiet", "Clean", "Management", "Bugs", "Neighboorhood", "Crime"],
                reviewInsides: {
                    // List that display amenities selected with their score
                    // These rates must be numbers to make bar chart
                    petFriendly: {
                        positivityRate: 2,
                        negativityRate: 3,
                    },
                    gated: {
                        positivityRate: 1,
                        negativityRate: 8,
                    },
                    inUnitWasherDryer: {
                        positivityRate: 9,
                        negativityRate: 12,
                    },
                    pool: {
                        positivityRate: 21,
                        negativityRate: 0,
                    },
                    fitnessCenter: {
                        positivityRate: 3,
                        negativityRate: 2,
                    },
                    parking: {
                        positivityRate: 4,
                        negativityRate: 8,
                    },
                },
            },
            //
        },
        {
            state: 'FL',
            city: 'Jacksonville',
            // List of apartments
            apartamentsList: [
                {
                    monthlyRent: 500,
                    amenities: {
                        petFriendly: true,
                        gated: true,
                        inUnitWasherDryer: true,
                        pool: true,
                        fitnessCenter: true,
                        parking: true,
                    },
                    amenitiesLabel: [
                        'Pet Friendly',
                        'Gated',
                        'In-Unit Washer/Dryer',
                        'Pool',
                        'Fitness Center',
                        'Parking',
                    ],
                    image: '../../assets/apartments.jpg',
                    name: 'Random Building',
                    contactPerson: 'John Doe',
                    contactEmail: 'johndoe@gmail.com',
                    bedrooms: 1,
                    reviews: {},
                },
            ],
            // Livability score, generated in backend, and added to the object
            // after being filtered by db
            livabilityScore: {
                // Total score generated
                totalScore: 85,
                reviewInsides: {
                    // List that display amenities selected with their score
                    // These rates must be numbers to make bar chart
                    petFriendly: {
                        positivityRate: 100,
                        negativityRate: 68,
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
}
/**
 *
 * @returns
 * Component that display results, gauge chart, liability score,
 * bar chart, toggle buttons, results per city, single results or errors.
 */

const Results = () => {
    const { searchResults, loading, error } = useSelector(
        (state) => state.searchResults
    )
    // data to display livalibility results / gauge chart
    const livabilityData = results.data.map((stateResult) => {
        const { state, city, livabilityScore } = stateResult
        const { totalScore } = livabilityScore
        return { state, city, score: totalScore }
    })

    return (
        <div className="text-2xl min-h-[90vh] flex flex-col items-center justify-center">
            {loading && <h3>Loading...</h3>}
            {!loading && error ? <p>Error : {error}</p> : null}
            {!loading && (
                <>
                    <Slider
                        component={LivabilityResults}
                        componentData={livabilityData}
                    />
                    <ApartmentResults config={results} />
                </>
            )}
        </div>
    )
}

export default Results
