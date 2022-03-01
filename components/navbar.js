import Link from "next/link";
import Image from "next/image";
import { FaUser, FaSearch } from 'react-icons/fa';

const NavItem = props => <a href={props.href} className="text-white m-2" >{props.text}</a>;

const Navbar = () => {
    return ( 
        <>
        <nav className="bg-transparent z-50 w-screen fixed">
            <div className="px-12 py-4 mx-auto flex">
                    <div className="flex basis-1/3 justify-start items-center">
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
                        <Link href="/" alt="homepage">
                            <a>
                                <FaUser width={50} className="text-white" />
                            </a>
                        </Link>
                    </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;