import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://radiant-castle-94572.herokuapp.com/reviews', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const star = (length) => {
        let x = '';
        for (let i = 1; i <= length; i++) {
            x += '★';
        }
        return x;
    }

    return (
        <div className='mx-auto'>
            <div>
                <h1 className='text-4xl font-bold text-white text-center my-7'>Reviews</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 md:w-3/6 mx-auto'>
                {
                    reviews.map(review =>
                        <div key={review._id} className="card mx-auto w-3/4 my-3 bg-secondary text-black shadow-xl">
                            <div className="card-body items-center text-center">
                                {star(review.rating)}
                                <p>{review.review}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;