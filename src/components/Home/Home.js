import React from 'react';
import Feedback from '../Feedback';
import Subscribe from '../Subscribe';
import BusinessSummary from './BusinessSummary';
import Hero from './Hero';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Subscribe></Subscribe>
            <Reviews></Reviews>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;