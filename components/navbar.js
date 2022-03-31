import Link from "next/link";
import Image from "next/image";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState, useEffect, useRef } from "react";
import Logo from './svg/sykes-brand-logo-white.svg';

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const showDropdown = () => setDropdown(!dropdown);

    const changeLogoSize = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("sykes-brand-logo-white_svg__Layer_1").style.width = "75px";
            document.getElementById("sykes-brand-logo-white_svg__Layer_1").style.transition = "all 0.5s";

        } else {
            document.getElementById("sykes-brand-logo-white_svg__Layer_1").style.width = "100px";
            document.getElementById("sykes-brand-logo-white_svg__Layer_1").style.transition = "all 0.5s";
        }

    }

    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeLogoSize);
    }


    return ( 
        <>
        <nav className="bg-brand z-50 w-screen sticky top-0">
            <div className="px-12 py-2 md:py-4 mx-auto flex uppercase bg-transparent text-md">
                    <div className="flex basis-1/3 justify-start items-center">
                        <FaIcons.FaBars width={60} onClick={showSidebar} className="text-3xl text-white block md:hidden z-60"/>
                        <Link href="/about-us">
                            <a className="text-white mx-2 font-thin hidden md:flex hover:underline">About Us</a>
                        </Link>
                        <Link href="/our-facilities">
                            <a className="text-white mx-2 font-thin hidden md:flex hover:underline">Our Facilities</a>
                        </Link>
                    </div>
                    <div className="flex basis-1/3 justify-center">
                            <Link href="/" alt="homepage">
                                <a aria-label="sykes-logo">
                                    <div id="logo">
                                        <Logo width={100} height={100} />
                                    </div>
                                </a>
                            </Link>
                    </div>
                    <div className="flex basis-1/3 justify-end items-center">
                        <Link href="/where-we-source">
                            <a className="text-white mx-2 font-thin hidden md:flex hover:underline">Where We Source</a>
                        </Link>
                        <Link href="/contact-us">
                            <a className="text-white mx-2 font-thin hidden md:flex hover:underline">Contact Us</a>
                        </Link>
                    </div>
            </div>
        </nav>
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu '} >
            <div className="flex">
                <div className="bg-brand p-2 h-[100vh] w-2/3 z-50 flex flex-col basis-2/3 justify-start space-y-4 text-xl uppercase font-body" id="nav-menu">
                    <AiIcons.AiOutlineClose className="text-white text-2xl text-center" onClick={showSidebar} />
                    <Link href="/"><a className="text-white pl-3 text-center hover:bg-Whitehover" onClick={showSidebar}>Home</a></Link>
                    <Link href="/about-us"><a className="text-white pl-3 text-center" onClick={showSidebar}>About Us</a></Link>
                    <Link href="/contact-us"><a className="text-white pl-3 text-center" onClick={showSidebar}>Contact Us</a></Link>
                    <Link href="/our-facilities"><a className="text-white pl-3 text-center" onClick={showSidebar}>Our Facilities</a></Link>
                    <Link href="/where-we-source"><a className="text-white pl-3 text-center" onClick={showSidebar}>Where we source</a></Link>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;