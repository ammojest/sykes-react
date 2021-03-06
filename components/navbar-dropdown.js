import Link from "next/link";
import Image from "next/image";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState, useEffect, useRef } from "react";
;

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const showDropdown = () => setDropdown(!dropdown);

    const changeLogoSize = () => {
        console.log(window.scrollY);
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("logo").style.width = "75px";
            document.getElementById("logo").style.transition = "all 0.5s";

        } else {
            document.getElementById("logo").style.width = "100px";
            document.getElementById("logo").style.transition = "all 0.5s";
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
                        <div>
                            <FaIcons.FaBars width={60} onClick={showSidebar} className="text-3xl text-white block md:hidden z-60"/>
                        </div>
                    </div>
                    <div className="flex basis-1/3 justify-center">
                            <Link href="/" alt="homepage">
                                <a>
                                    <div id="logo">
                                    <Image 
                                        src="/sykes-brand-logo-white.svg"
                                        alt="logo"
                                        height={100}
                                        width={100}
                                        loading="eager"
                                        />
                                    </div>
                                </a>
                            </Link>
                    </div>
                    <div className="flex basis-1/3 justify-end items-center">
                        <div>
                            <button className="hidden uppercase md:flex items-center" onClick={showDropdown}>Drop Down <FaIcons.FaAngleDown /></button>
                            <div className={`drop-down-content absolute bg-white p-4 shadow-md shadow-black rounded hover-underlined ${dropdown ? "" : "hidden"}`}>
                                <ul>
                                    <Link href="/contact-us">
                                        <a>
                                            <li onClick={showDropdown} className="hover:underline">Contact Us</li>
                                        </a>
                                    </Link>
                                    <Link href="/about-us">
                                        <a>
                                        <li onClick={showDropdown} className="hover:underline">About Us</li>
                                        </a>
                                    </Link>

                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </nav>
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu '} >
            <div className="flex">
                <ul className="bg-brand p-2 h-[100vh] w-2/3 z-50 flex flex-col basis-2/3 justify-start space-y-4 text-xl uppercase font-body" id="nav-menu">
                    <AiIcons.AiOutlineClose className="text-white text-2xl text-center" onClick={showSidebar} />
                    <Link href="/"><li className="text-white pl-3 text-center hover:bg-Whitehover" onClick={showSidebar}>Home</li></Link>
                    <Link href="/about-us"><li className="text-white pl-3 text-center" onClick={showSidebar}>About Us</li></Link>
                    <Link href="/contact-us"><li className="text-white pl-3 text-center" onClick={showSidebar}>Contact Us</li></Link>
                    <Link href="/our-facilities"><li className="text-white pl-3 text-center" onClick={showSidebar}>Our Facilities</li></Link>
                    <Link href="/where-we-source"><li className="text-white pl-3 text-center" onClick={showSidebar}>Where we source</li></Link>
                </ul>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;