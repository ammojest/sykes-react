import Link from "next/link";
import Image from "next/image";
import { FaUser, FaSearch } from 'react-icons/fa';

const NavItem = props => <a href={props.href} className="text-white m-2" >{props.text}</a>;

const Navbar = () => {
    return ( 
        <>
        <nav className="bg-transparent z-50 w-screen fixed">
            <div className="px-12 mx-auto">
                <div className="flex justify-between py-3">
                    <div className="flex items-center">
                        <div>
                            <NavItem href="/products" text="Products" />
                        </div>
                        <div>
                            <NavItem href="/special-offers" text="Special Offers" />
                        </div>
                    </div>
                    <div className="logo">
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
                    <div className="flex items-center space-x-3 text-white">
                        <FaUser size={30} />
                        <FaSearch size={30} />
                    </div>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;