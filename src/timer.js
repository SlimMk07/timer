import React from 'react';


const Timer = () => {
    return (
        <div className="background">
            <p className='numbers'>00:30:00</p>
            <div className='time'>
               <p className='h'> Hour </p>
               <p className='m'> Minute </p>
               <p className='s'> second </p>
            </div>
        </div>
    )
}
export default Timer