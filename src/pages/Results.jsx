import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Apartment from '../components/Apartment'
import { shuffle } from '../utils/shuffle'

const Results = () => {
    const { searchResults, loading, error } = useSelector(
        (state) => state.searchResults
    )
    const shuffled = shuffle(searchResults)
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    return (
        <div
            id="results"
            className="text-2xl min-h-[90vh] flex flex-col items-center justify-cente"
        >
            {loading && <h3>Loading...</h3>}
            {!loading && error ? <p>Error : {error}</p> : null}
            {!loading && searchResults.length > 0 ? (
                <>
                    {/* <Slider
                        component={LivabilityResults}
                        componentData={livabilityData}
                    /> */}
                    {/* <h3>Slider Component</h3> */}
                    {/* <ApartmentResults searchResults={searchResults} /> */}
                    <h3 className="py-7 font-bold text-2xl">Search Results</h3>
                    <div className="py-7 flex flex-wrap items-center justify-center bg-[#f7f7f7]">
                        {shuffled.map((apartment) => (
                            <>
                                <Apartment
                                    apartment={apartment}
                                    key={apartment._id}
                                />
                            </>
                        ))}
                    </div>
                </>
            ) : null}
        </div>
    )
}

export default Results
