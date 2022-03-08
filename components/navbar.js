import Link from "next/link";
import Image from "next/image";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from "react";


const NavItem = props => <a href={props.href} className="text-white m-2 hidden md:block hover:underline" >{props.text}</a>;

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return ( 
        <>
        <nav className="bg-transparent z-50 w-screen fixed">
            <div className="px-12 py-4 mx-auto flex uppercase bg-transparent">
                    <div className="flex basis-1/3 justify-start items-center">
                        <div>
                            <FaIcons.FaBars width={60} onClick={showSidebar} className="text-white text-3xl block md:hidden z-60"/>
                        </div>
                        <div>
                            <NavItem href="/about-us" text="About Sykes" />
                        </div>
                        <div>
                            <NavItem href="/contact-us" text="Contact Us" />
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
                                />
                            </a>
                        </Link>
                    </div>
                    <div className="flex basis-1/3 justify-end items-center">
                        <div>
                            <NavItem href="/contact-us" text="Our Brands" />
                        </div>
                        <div>
                            <NavItem href="/contact-us" text="Our Facilities" />
                        </div>
                    </div>
            </div>
        </nav>
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu '} >
            <div className="flex">
                <ul className="bg-brand p-2 h-[100vh] w-1/2 z-50 flex flex-col basis-1/2 justify-start space-y-4 text-xl" id="nav-menu">
                    <AiIcons.AiOutlineClose className="text-white text-5xl" onClick={showSidebar} />
                    <Link href="/"><li className="text-white pl-3">Home</li></Link>
                    <Link href="/about-us"><li className="text-white pl-3">About Us</li></Link>
                    <li className="text-white pl-3">Contact Us</li>
                </ul>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;