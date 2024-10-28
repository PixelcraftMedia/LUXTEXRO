import { isEmpty, isArray } from 'lodash';
import Link from "next/link";
import {useState, useEffect, useRef} from 'react';

import Image from 'next/image'
const HeroCarousel = ({heroCarousel}) => {

    if ( isEmpty(heroCarousel) || ! isArray( heroCarousel ) ) {
    	return null;
    }

    const autoPlay = true;
    const slideDuration = 2; // in seconds
    const activeIndexRef = useRef( { activeIndex: 0 } );
    const slideRef = useRef( 0 );
    const [ slide, setSlide ] = useState( 0 );
    const [ restartSlide, setRestartSlide ] = useState( 0 );
    const { activeIndex } = activeIndexRef.current;

    /**
     * Change to next slide.
     */
    const nextSlide = () => {

        if ( 1 === heroCarousel.length ) {
            return null;
        }

        /**
         * If if autoplay is set to true
         * and all slides are finished playing,
         * set the activeIndex to one and restart the slide from start.
         */
        if ( activeIndexRef.current.activeIndex === heroCarousel.length - 1 ) {

            activeIndexRef.current.activeIndex = 0;
            setRestartSlide( restartSlide + 1 );

        } else {

            // If its not the last slide increment active index by one.
            activeIndexRef.current.activeIndex =
                activeIndexRef.current.activeIndex + 1;

        }

        slideRef.current = slideRef.current + 1;
        setSlide( slideRef.current );

    };

    useEffect(() => {
        if ( autoPlay ) {
            const interval = setInterval(() => nextSlide(), slideDuration * 2000 );
            return () => clearInterval( interval );
        }
    }, [])

    return (
        <>
        <div className="banner banner_home_page  relative  m-auto slidervh slider-color">
          
                {
                    heroCarousel.map( ( item, index ) => {
                        const opacity = ( activeIndex === index || 1 === heroCarousel.length ) ? 'opacity-100 transition duration-500 ease-in-out' : 'opacity-0 transition duration-500 ease-in-out';
                        return (
                            <>
                            <div class="marquee  font-playfair font-bold "><span>{heroCarousel[activeIndex]?.name} </span></div>
                            <div key={item?.id}className={`${opacity} solid_corection banner-img-container absolute top-0 left-0 bottom-0 transition duration-500 ease-in-out  w-full slidervh overflow-hidden`}>
                                <img className={`h-full w-full object-cover`} alt={heroCarousel[activeIndex]?.name}
                                    src={item?.image?.sourceUrl} srcSet={item?.image?.srcSet} loading="lazy"    width="1000"
                                    height="500"
                                />
                              
                            </div>
                            </>
                        )
                    })
                }
          
          
            <div className="banner-content pb-20  px-2 w-full absolute z-10 bottom-0   whitespace-normal overflow-ellipsis text-center">
                <h2 className="overflow-ellipsis banner-content__title text-4xl md:text-6xl  text-white  font-playfair font-bold mb-3 p-6 rounded-lg">{heroCarousel[activeIndex]?.name}</h2>
                <p className="overflow-ellipsis banner-content__description text-2xl md:text-5xl text-white bg-yellov  inline-block">{heroCarousel[activeIndex]?.description}</p>
 <Link href={`/tag/${heroCarousel[activeIndex]?.slug}/`}> 
                    <div className="banner-content__link block"><button className='button-slider inset-shadow mt-6 py-4 px-20 lg:px-20 lg:py-5 rounded-full uppercase'>В КАТАЛОГ</button></div>
                    </Link>
            </div></div>
      </>
    )
}

export default HeroCarousel