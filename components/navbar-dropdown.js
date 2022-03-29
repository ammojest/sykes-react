import Link from "next/link";
import Image from "next/image";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useState } from "react";


const NavItem = props => <a href={props.href} className="text-white m-2 hidden md:block hover:bg-Whitehover duration-200 delay-75 p-2 font-extralight" >{props.text}</a>;

const Navbar = () => {

    const [scrollEffect, setscrollEffect] = useState(false);

    const changeLogoSize = () => {
        // console.log(window.scrollY);
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("logo-image").style.width = "75px";
            document.getElementById("logo-image").style.transition = "all 0.5s";

        } else {
            document.getElementById("logo-image").style.width = "100px";
            document.getElementById("logo-image").style.transition = "all 0.5s";
        }

    }


    if (typeof window !== "undefined") {
        window.addEventListener('scroll', changeLogoSize);
    }

    return ( 
        <>
        <nav className="bg-brand z-50 w-screen sticky top-0">
            <div className="px-12 py-2 md:py-4 mx-auto flex uppercase bg-transparent text-md justify-center">
                        <Link href="/" alt="homepage">
                            <div className="logo-image w-[100px]" id="logo-image">
                                <Image 
                                    src="/sykes-brand-logo-white.svg"
                                    className="logo-image"
                                    alt="logo"
                                    width={100}
                                    height={100}
                                    loading="eager"
                                />
                            </div>
                        </Link>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;