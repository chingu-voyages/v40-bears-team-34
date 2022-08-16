import React from 'react'

const SearchForm = () => {
  return (
    <div className="py-12 bg-white">
        <form>
            <div> {/* City Selection */}
                <div>
                    <label>Pick the cities to compare:</label>
                </div>
                <div>
                    <p>Minimum 2</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-5 bg-grey py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        San Diego, CA
                    </button>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Atlanta, GA
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Dallas, TX
                    </button>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Nashville, TN
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Phoenix, AZ
                    </button>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Jacksonville, FL
                    </button>
                </div>
            </div>

            {/* <div>
                <label>Beds</label>
                <div>
                    <input type="radio">1 Bedroom</input>
                    <label>Moo</label>
                </div> 
            </div> */}

            <div> {/* Rent Range */}
                <div> 
                    <label>Monthly Rent</label>
                </div>
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="low-end" className="block text-sm font-medium text-gray-700">
                        Low End
                        </label>
                        <input
                            type="text"
                            name="low-end"
                            id="low-end"
                            autoComplete="given-value"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="high-end" className="block text-sm font-medium text-gray-700">
                        High End
                        </label>
                        <input
                            type="text"
                            name="high-end"
                            id="high-end"
                            autoComplete="given-value"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                </div>
            </div>

            <div> {/* Amenity Selection */}
                <div>
                    <label>Amenities</label>
                </div>
                <div>
                    <p>Minimum 2</p>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Pet Friendly
                    </button>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Gated
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        In-Unit Washer/Dryer
                    </button>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Pool
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Fitness Center
                    </button>
                    <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Parking
                    </button>
                </div>
            </div>

            <hr></hr>

            <button     
                type="button"
                className="ml-5 bg-blue py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
            </button>

        </form>
    </div>
  )
}

export default SearchForm