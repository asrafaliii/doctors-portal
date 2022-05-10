import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import ServiceBanner from './ServiceBanner';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info />
            <Services />
            <ServiceBanner />
            <MakeAppoinment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;