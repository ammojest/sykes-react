import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const Test = () => {

    const titleRef = useRef(null);
    const howTitle = useRef(null);
    const startImage0 = useRef(null);
    const startImage1 = useRef(null);
    const startImage2 = useRef(null);

    useEffect(() => {
        gsap.from( howTitle.current ,  {
            scrollTrigger: {
                trigger: howTitle.current,
            },
            x: -100, 
            duration: 1.5, 
            opacity: 0 });
    }, [howTitle]);

    useEffect(() => {
        gsap.from( startImage0.current , {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.5, 
            stagger: 0.2,
            force3D: true,
          });
    },);
    useEffect(() => {
        gsap.from( startImage1.current , {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.5, 
            stagger: 0.2,
            force3D: true,
            delay: 1,
          });
    },);
    useEffect(() => {
        gsap.from( startImage2.current , {
            duration: 2,
            scale: 0.5, 
            opacity: 0, 
            delay: 0.5, 
            stagger: 0.2,
            force3D: true,
            delay: 1.5, 
          });
    },);


    return ( 
        <>
        <section>
            <div className="flex flex-col w-100 h-[95vh] md:m-40 m-3">
                <p className="text-lg uppercase">Discover</p>
                <h1 className="text-7xl uppercase text-brand" ref={titleRef}>SYKES SEAFOOD</h1>
                <div className="flex flex-col md:flex-row justify-end my-5 space-x-3">
                    <div className="relative drop-shadow-md" ref={startImage0}>
                        <Image
                            src="/old-1.webp"
                            alt="image"
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className="relative drop-shadow-md" ref={startImage1}>
                        <Image
                            src="/fishing-nets.jpeg"
                            alt="image"
                            height={300}
                            width={300}
                        />
                    </div>
                    <div className="relative drop-shadow-md" ref={startImage2}>
                        <Image
                            src="/lonely-boat.webp"
                            alt="image"
                            height={300}
                            width={300}
                        />
                    </div>
  
                </div>
                    <div className="reltive flex flex-row space-x-3 justify-end">
                        <p>FUTURE</p>
                        <p>PRESENT</p>
                        <p>PAST</p>
                    </div>
            </div>
        </section>
        <section>
            <div className="flex flex-col w-100 h-[60vh] m-40 items-end">
                <h2 className="text-7xl uppercase text-brand" ref={howTitle}>How we got here</h2>
                <div className="flex bg-brand drop-shadow-md p-4 my-3 w-1/2">
                    <p className="text-white">Learn about our 150 years story. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur laborum suscipit, corrupti blanditiis reprehenderit ad esse tenetur distinctio id voluptates repellat. Similique totam repellendus soluta consectetur voluptate, sint alias suscipit debitis eaque sapiente atque dicta quibusdam laborum explicabo velit eum dolorum quaerat optio incidunt, esse, rerum accusantium corporis et? Rerum.</p>
                </div>
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
