import React from 'react'

const ApartmentReviews = ({ reviews }) => {
    return (
        <div className="w-[90vw] md:w-[75vw] m-6 ">
            <h3 className="mb-3 text-lg px-3">Reviews</h3>
            {reviews && reviews.length > 0
                ? reviews.map((review) => (
                      <p className="w-full py-7 px-6  text-sm bg-[#f7f7f7] mb-3 rounded-lg">
                          {review.text}
                      </p>
                  ))
                : null}
        </div>
    )
}

export default ApartmentReviews
