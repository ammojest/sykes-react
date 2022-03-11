import Link from "next/link";
import Image from "next/image";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from "react";


const NavItem = props => <a href={props.href} className="text-white m-2 hidden md:block hover:bg-Whitehover duration-200 delay-75 p-2 font-extralight" >{props.text}</a>;

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return ( 
        <>
        <nav className="bg-brand z-50 w-screen sticky top-0">
            <div className="px-12 py-4 mx-auto flex uppercase bg-transparent text-md">
                    <div className="flex basis-1/3 justify-start items-center">
                        <div>
                            <FaIcons.FaBars width={60} onClick={showSidebar} className="text-3xl text-white block md:hidden z-60"/>
                        </div>
                        <div>
                            <NavItem href="/about-us" text="About Sykes" />
                        </div>
                        <div>
                            <NavItem href="/our-facilities" text="Our Facilities" />
                        </div>
                    </div>
                    <div className="flex basis-1/3 logo justify-center">
                        <Link href="/" alt="homepage">
                            <a>
                                <Image 
                                    src="/sykes-brand-logo-white.svg"
                                    alt="logo"
                                    height={100}
                                    width={100}
                                    loading="eager"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="flex basis-1/3 justify-end items-center">
                        <div>
                            <NavItem href="/where-we-source" text="Where we source" />
                        </div>
                        <div>
                            <NavItem href="/contact-us" text="Contact Us" />
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