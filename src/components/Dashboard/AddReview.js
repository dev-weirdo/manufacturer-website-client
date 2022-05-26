import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {

    const handleAddReview = (e) => {

        e.preventDefault();
        const rating = e.target.rating.value;
        const review = e.target.review.value;

        const reviewLength = review.trim().split(/\s+/).length;

        if (rating < 1 || rating > 5) {
            return toast.warning('Rating should be between 1 to 5');
        }

        else if (reviewLength < 4) {
            return toast.warn('Review needs at least 4 words');
        }

        const sendReview = { rating, review };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sendReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review added!')
                }
            })
        e.target.reset();
    }

    return (
        <div className='w-full'>
            <form onSubmit={handleAddReview} className='w-2/3 mx-auto'>
                <h1 className='text-center text-3xl my-8'>Add Your Review</h1>
                <div className="form-control">
                    <label className="input-group">
                        <span>Rating</span>
                        <input name='rating' type="number" placeholder="Your rating" className="input input-bordered border-2 text-white" />
                    </label>
                </div>
                <div className="form-control mt-2">
                    <label className="input-group">
                        <span>Review</span>
                        <textarea name='review' rows='5' cols='40' placeholder="Your review" className="outline-none p-2 bg-accent border-slate-700 border-2 text-white" />
                    </label>
                </div>
                <button type='submit' className='mt-5 btn btn-secondary text-accent px-10'>Add</button>
            </form>
        </div>
    );
};

export default AddReview;