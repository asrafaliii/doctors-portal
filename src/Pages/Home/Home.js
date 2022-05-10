import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import ServiceBanner from './ServiceBanner';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <ServiceBanner />
            <MakeAppoinment />
        </div>
    );
};

export default Home;