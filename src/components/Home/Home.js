import React from 'react';
import BusinessSummary from './BusinessSummary';
import Hero from './Hero';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
        </div>
    );
};

export default Home;