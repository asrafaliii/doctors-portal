import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppoint from './AvailableAppoint';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <AppointBanner date={date} setDate={setDate} />
            <AvailableAppoint date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;