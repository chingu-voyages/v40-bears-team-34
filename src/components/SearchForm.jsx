import React from 'react'

const SearchForm = () => {
  return (
    <div className="px-12 py-6 bg-white font-['Verdana']">
        <form>
            <div> {/* City Selection */}
                <div>
                    <p className="text-center text-xl text-[#067272]">Pick the cities to compare</p>
                </div>
                <div>
                    <p className="text-center text-xs text-[#067272]">Minimum 2</p>
                </div>
                <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4">
                    <button
                        type="button"
                        className="bg-grey py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        San Diego, CA
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Atlanta, GA
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Dallas, TX
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Nashville, TN
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Phoenix, AZ
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Jacksonville, FL
                    </button>
                </div>
            </div>

            <p className="text-center text-2xl mt-10 text-[#067272]">Apartment Features</p>

            <div> {/* Bed Quantity */}
                <p className="text-center text-xl mt-4 text-[#067272]">Beds</p>
                <div className="flex justify-evenly mt-4">
                    <input type="radio" value="1-bedroom" name="rooms" className="checked:bg-red-300"/>1 Bedroom
                    <input type="radio" value="2-bedroom" name="rooms"/>2 Bedrooms
                    <input type="radio" value="3-bedroom" name="rooms"/>3 Bedrooms
                </div>
            </div>

            <div> {/* Rent Range */}
                <div> 
                    <p className="text-center text-xl mt-10 text-[#067272]">Monthly Rent</p>
                </div>
                <div className="grid grid-cols-2 gap-6 mt-4">
                    <div>
                        <input
                            type="text"
                            name="min"
                            id="min"
                            placeholder="Min"
                            autoComplete="given-value"
                            className="border border-gray-300 py-2"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="max"
                            id="max"
                            placeholder="Max"
                            autoComplete="given-value"
                            className="border border-gray-300 py-2"
                        />
                    </div>
                </div>
            </div>

            <div> {/* Amenity Selection */}
                <div>
                    <p className="text-center text-xl mt-10 text-[#067272]">Amenities</p>
                </div>
                <div>
                    <p className="text-center text-xs text-[#067272]">Minimum 2</p>
                </div>
                <div className="grid gap-3 grid-cols-2 grid-rows-3 mt-4">
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Pet Friendly
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Gated
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        In-Unit Washer/Dryer
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Pool
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Fitness Center
                    </button>
                    <button
                        type="button"
                        className="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                        Parking
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 grid-rows-1 mt-12">
                <button     
                    type="button"
                    className="py-2 px-2 border border-black rounded-lg shadow-sm text-sm font-medium hover:bg-[#067272] hover:text-[#ffffff] bg-[#A1D2DE] text-[#067272]">
                    Search
                </button>
            </div>
        </form>
    </div>
  )
}

export default SearchForm