import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";


const Test = () => {

    const titleRef = useRef(null);

    useEffect(() => {
        gsap.from( titleRef.current ,  {color : "#000", x: -100, duration: 1.5, opacity: 0});
    }, [titleRef]);



    return ( 
        <>
        <section>
            <div className="flex flex-col w-100 h-[60vh] md:m-40 m-3">
                <p className="text-lg">Discover</p>
                <h1 className="text-7xl uppercase text-brand" ref={titleRef}>SYKES SEAFOOD</h1>
                <div className="flex flex-row space-x-3">
                    <p>FUTURE</p>
                    <p>PRESENT</p>
                    <p>PAST</p>
                </div>
            </div>
        </section>
        <section>
            <div className="flex flex-col w-100 h-[60vh] m-40 items-end">
                <h2 className="text-7xl uppercase">How we got here</h2>
            </div>
        </section>
        <section>
            <div className="flex flex-col w-100 h-[60vh] m-40">
                <h2 className="text-7xl uppercase">Where we are</h2>
            </div>
        </section>
        <section>
            <div className="flex flex-col w-100 h-[60vh] m-40 items-end">
                <h2 className="text-7xl uppercase">Where we are going</h2>
            </div>
        </section>
        </>
     );
}
 
export default Test;
