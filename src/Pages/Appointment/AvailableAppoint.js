import { format } from 'date-fns';
import React from 'react';

const AvailableAppoint = ({date}) => {
    return (
        <div>
            <h3 className='text-xl text-secondary text-center'>Available Appointments is on {format(date, 'PP')}</h3>
        </div>
    );
};

export default AvailableAppoint;