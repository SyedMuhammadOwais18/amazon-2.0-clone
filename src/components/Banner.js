import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className='relative z-30'>
            <div className='absolute w-full h-32 bg-gradient-t  from-gray-700 to-gray-200 bottom-0 z-20' />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                className='!bg-transparent'
            >
                <div className=''>
                    <img loading='lazy' src="https://links.papareact.com/gi1" alt="" />
                </div>
                <div className=''>
                    <img loading='lazy' src="https://links.papareact.com/6ff" alt="" />
                </div>
                <div className=''>
                    <img loading='lazy' src="https://links.papareact.com/7ma" alt="" />
                </div>
            </Carousel>

        </div>
    )
}

export default Banner
