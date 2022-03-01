import React, { useEffect, useState, useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight  } from 'react-icons/fa';

// pulls in images to slider
const featuredImages = [
    "/scallops.jpeg",
    "/prawns.jpeg",
    "/Cod-1.jpeg",
];
// pulls in main text
const featuredText = [
    "Seafood by Sykes",
    "Prawns",
    "Cod",
]
//pulls in sub text
const subText = [
    "Restaurant quality frozen fish and seafood delivered direct to your door",
    "test 2",
    "test 3",
]


let count = 0;
let slideInterval;

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const slideRef = useRef();

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
    }

    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation);
        // slideInterval = startSlider();
        // slideRef.current.addEventListener('mouseenter', pauseSlider);
        // slideRef.current.addEventListener('mouseleave', startSlider);


    }, []);

    const pauseSlider = () => {
        clearInterval(slideInterval);
    }


    const handleOnNextClick = () => {
        count = ( count + 1 ) %  featuredImages.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }
    const handleOnPrevCLick = () => {
        const productsLength = featuredImages.length;
        count = (currentIndex + productsLength - 1) % productsLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    }

    // const startSlider = () => {
    //     setInterval(() => {
    //     handleOnNextClick();
    // }, 5000);
    // };

    console.log(slideRef);
    return ( 
        <>
            <div ref={slideRef} className="w-full m-auto block">
                <div className="relative select-none">
                    <img className="object-cover w-full h-[95vh]" src={featuredImages[currentIndex]} alt="" />
                    <div className="absolute top-1/2 transform -translate-y-1/2 px-5 w-full flex justify-between text-white">
                        <button type="button" aria-label="Change Slide"onClick={handleOnPrevCLick}><FaArrowAltCircleLeft size={30} /></button>
                        <button type="button" aria-label="Change Slide"onClick={handleOnNextClick}><FaArrowAltCircleRight size={30}/></button>
                    </div>
                </div>
            </div>
        </>
     );
}



export default Slider;
