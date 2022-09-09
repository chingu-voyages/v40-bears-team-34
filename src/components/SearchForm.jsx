import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { searchApartments } from '../features/apartment/searchSlice'

const states = [
    'San Diego, CA',
    'Atlanta, GA',
    'Dallas, TX',
    'Nashville, TN',
    'Phoenix, AZ',
    'Jacksonville, FL',
]

const amenities = [
    'Pet Friendly',
    'Gated',
    'In-Unit Washer/Dryer',
    'Pool',
    'Fitness Center',
    'Parking',
]

const SearchForm = () => {
    // Array that indicates state of individual checkboxes (state checkboxes)
    const [isStateChecked, setStateIsChecked] = useState(
        // Setting 6 as a number of states
        new Array(states.length).fill(false)
    )

    const [isAmenityChecked, setIsAmenityChecked] = useState(
        new Array(amenities.length).fill(false)
    )
    const [rentAmount, setRentAmount] = useState({ min: 0, max: 0 })
    const [bedType, setBedType] = useState('')
    const [error, setError] = useState('')

    // Adding refs to check values
    const inputsRef = useRef([])
    const amenitiesRef = useRef([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    /**
     * @param {number} position | state index position
     * This function gets the index of the checkbox we
     * are changing the state to checked
     */
    const handleStateChecked = (position) => {
        const updateCheckedState = isStateChecked.map((isChecked, index) =>
            index === position ? !isChecked : isChecked
        )

        setStateIsChecked((prevState) => updateCheckedState)
    }

    const handleAmenitiesChecked = (position) => {
        const updateCheckedAmenities = isAmenityChecked.map(
            (isChecked, index) => (index === position ? !isChecked : isChecked)
        )

        setIsAmenityChecked((prevState) => updateCheckedAmenities)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        //Selected States
        const statesSelected = isStateChecked
            .map((state, i) => {
                let city
                if (state === true) {
                    city = states[i].split(', ')[1]
                    return city
                }
            })
            .filter((city) => city !== undefined)
            .join(',')

        // Selected Amenities
        const amenitiesMap = [
            'petFriendly',
            'gated',
            'InUnitWasherDryer',
            'pool',
            'fitnessCenter',
            'parking',
        ]

        const amenitiesSelected = isAmenityChecked
            .map((item, i) => {
                let amenity
                if (item === true) {
                    amenity = `&amenities.${amenitiesMap[i]}=true`
                    return amenity
                }
            })
            .filter((amenity) => amenity !== undefined)
            .join('')
        //TODO
        // Selected Bedrooms
        const bedTypeSelected = (type) => {
            return `&bedrooms.${type}.exist=true`
        }

        //bedType
        // Min and Max Amount
        const minAmountSelected = (amount, type) => {
            return `&bedrooms.${type}.monthlyRent[gte]=${Number(amount.min)}`
        }
        const maxAmountSelected = (amount, type) => {
            return `&bedrooms.${type}.monthlyRent[lte]=${Number(amount.max)}`
        }

        // request to get the results || use the dispatch
        const amenitiesChecked =
            isAmenityChecked.filter((amenity) => amenity === true).length >= 2
        const statesChecked =
            isStateChecked.filter((state) => state === true).length >= 2
        const bedTypeChecked =
            bedType === '1Bedroom' ||
            bedType === '2Bedroom' ||
            bedType === '3Bedroom'
        const minAmountChecked = Number(rentAmount.min) > 0
        const maxAmountChecked = Number(rentAmount.max) > 0

        if (
            !amenitiesChecked ||
            !statesChecked ||
            !bedTypeChecked ||
            !minAmountChecked ||
            !maxAmountChecked
        ) {
            setError('Select all the required fields and try again')
            setTimeout(() => {
                setError('')
            }, 8000)
            return
        }

        dispatch(
            searchApartments(
                `state=${statesSelected}${bedTypeSelected(
                    bedType
                )}${minAmountSelected(rentAmount, bedType)}${maxAmountSelected(
                    rentAmount,
                    bedType
                )}${amenitiesSelected}`
            )
        )
        navigate('/results')
    }
    return (
        <div className="px-12 py-6 my-12 bg-[#FFF] w-[90vw] md:w-[75vw] lg:w-[55vw] xl:w-[35vw] 2xl:w-[35vw]  transition ease-in-out delay-350 shadow-md hover:shadow-2xl  hover:scale-105">
            <form>
                <div>
                    {/* City Selection */}
                    <p className="text-center text-xl text-primary">
                        Pick the cities to compare
                    </p>
                    <p className="text-center text-sm text-primary">
                        Minimum 2
                    </p>
                    <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4 text-center">
                        {/* Generating state checkboxes dinamically */}
                        {states.map((state, index) => {
                            return (
                                <div
                                    key={index}
                                    // Passing updating function with index
                                    onClick={() => handleStateChecked(index)}
                                    className={
                                        isStateChecked[index]
                                            ? 'py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer bg-secondary'
                                            : 'py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer hover:bg-secondary '
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isStateChecked[index]}
                                        onChange={() =>
                                            handleStateChecked(index)
                                        }
                                        value={state}
                                        ref={inputsRef}
                                    />
                                    {state}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <p className="text-center text-xl mt-10 text-primary">
                    Apartment Features
                </p>

                <div>
                    {' '}
                    {/* Bed Quantity */}
                    <p className="text-center text-lg mt-4 text-primary">
                        Beds
                    </p>
                    <div className="flex justify-evenly mt-4 text-lg">
                        <input
                            type="radio"
                            value="1Bedroom"
                            name="rooms"
                            className="checked:bg-red-300"
                            onChange={(e) => setBedType(e.target.value)}
                        />
                        1 Bedroom
                        <input
                            type="radio"
                            value="2Bedroom"
                            name="rooms"
                            onChange={(e) => setBedType(e.target.value)}
                        />
                        2 Bedrooms
                        <input
                            type="radio"
                            value="3Bedroom"
                            name="rooms"
                            onChange={(e) => setBedType(e.target.value)}
                        />
                        3 Bedrooms
                    </div>
                </div>

                <div>
                    {' '}
                    {/* Rent Range */}
                    <div>
                        <p className="text-center text-xl mt-10 text-primary">
                            Monthly Rent
                        </p>
                    </div>
                    <div className="flex justify-evenly mt-4 text-lg">
                        <div className="w-[45%]">
                            <input
                                type="number"
                                name="min"
                                min="0"
                                id="min"
                                onChange={(e) =>
                                    setRentAmount((prev) => ({
                                        ...prev,
                                        min: e.target.value,
                                    }))
                                }
                                placeholder="Min"
                                autoComplete="given-value"
                                className="border rounded-sm py-1 w-[100%] text-center"
                            />
                        </div>
                        <div className="w-[45%]">
                            <input
                                type="number"
                                name="max"
                                id="max"
                                onChange={(e) =>
                                    setRentAmount((prev) => ({
                                        ...prev,
                                        max: e.target.value,
                                    }))
                                }
                                placeholder="Max"
                                autoComplete="given-value"
                                className="border rounded-sm w-[100%] py-1 text-center"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    {' '}
                    {/* Amenity Selection */}
                    <div>
                        <p className="text-center text-xl mt-10 text-primary">
                            Amenities
                        </p>
                    </div>
                    <div>
                        <p className="text-center text-xs text-primary">
                            Minimum 2
                        </p>
                    </div>
                    <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4 text-center">
                        {amenities.map((amenity, index) => {
                            return (
                                <div
                                    key={index}
                                    // Passing updating function with index
                                    onClick={() =>
                                        handleAmenitiesChecked(index)
                                    }
                                    className={
                                        isAmenityChecked[index]
                                            ? 'py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer bg-secondary'
                                            : 'py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer hover:bg-secondary '
                                    }
                                >
                                    <input
                                        type="checkbox"
                                        className="hidden"
                                        checked={isAmenityChecked[index]}
                                        onChange={() =>
                                            handleAmenitiesChecked(index)
                                        }
                                        value={amenity}
                                        ref={amenitiesRef}
                                    />
                                    {amenity}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 grid-rows-1 mt-12">
                    <span className="text-[red] text-sm text-center my-3">
                        {error}
                    </span>
                    <button
                        type="button"
                        onClick={handleSearch}
                        className="py-2 px-2 border border-black rounded-lg shadow-sm text-sm font-medium hover:bg-primary hover:text-[#ffffff] bg-secondary text-primary"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
