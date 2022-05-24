import React from 'react';

const BusinessSummary = () => {

    const summary = [
        {
            "name": "Countries",
            "numbers": 69,
            "img": "https://i.ibb.co/dGr7R6B/summary-1.png"
        },
        {
            "name": "Tools Sold",
            "numbers": 96069,
            "img": "https://i.ibb.co/XCFs4cm/summary-2.png"
        },
        {
            "name": "Happy Clients",
            "numbers": 369,
            "img": "https://i.ibb.co/8jVdrmM/summary-3.png"
        },
        {
            "name": "Feedbacks",
            "numbers": 690,
            "img": "https://i.ibb.co/4Zx7nj4/summary-4.png"
        }
    ]

    return (
        <div className='bg-neutral text-accent p-5'>
            <div>
                <p className='text-5xl text-center my-7 font-bold'>MILLIONS BUSINESS TRUST US</p>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto'>
                {
                    summary.map((sum, index) =>
                        <div key={index} className="card w-full md:w-96 mx-auto">
                            <figure className="px-10 pt-10">
                                <img src={sum.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <p className='text-4xl'>{sum.numbers}+</p>
                                <h2 className="card-title text-4xl">{sum.name}</h2>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BusinessSummary;