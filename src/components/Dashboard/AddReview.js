import React from 'react';

const AddReview = () => {
    return (
        <div>
            <div className="form-control">
                <label className="input-group">
                    <span>Rating</span>
                    <input type="number" placeholder="info@site.com" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="input-group">
                    <span>Review</span>
                    <textarea type="text" placeholder="info@site.com" className="input input-bordered" />
                </label>
            </div>
        </div>
    );
};

export default AddReview;