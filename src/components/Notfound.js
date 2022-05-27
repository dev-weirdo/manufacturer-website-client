import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="px-4 lg:py-12">
                <div className="lg:gap-4 lg:flex">
                    <div
                        className="flex flex-col items-center justify-center md:py-24 lg:py-32"
                    >
                        <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                        <p
                            className="mb-2 text-2xl font-bold text-center text-white md:text-3xl"
                        >
                            <span className="text-red-500">Oops!</span> Page not found
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>
                        <Link
                            to="/"
                            className="btn btn-secondary text-accent"
                        >Go home</Link>
                    </div>
                    <div className="mt-4">
                        <img
                            src="https://i.ibb.co/1qcb6bg/cat-crying.png"
                            alt="img"
                            className="object-cover w-full h-full bg-gray-700 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notfound;