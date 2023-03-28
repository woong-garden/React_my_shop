import React from 'react';

function Banner(props) {
    return (
        <div className='h-96 bg-black relative'>
            <div className='w-full h-full bg-cover bg-banner opacity-60'/>
            <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
                <h2 className='text-6xl'>Meet New</h2>
                <p className='text-2xl'>Fashion Week</p>
            </div>

        </div>
    );
}

export default Banner;