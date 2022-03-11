import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return ( 
        <>
        <footer className="py-5 mt-5">
        <div className="flex flex-col md:flex-row md:justify-between px-14 space-y-5 text-center md:text-left items-center md:items-start">
            <div className="flex flex-col justify-center ">
                <Image 
                    src="/sykes-brand-logo-footer.svg" 
                    alt="sykes logo"
                    width={100}
                    height={100}
                />
                {/* <img src="/sykes-brand-logo-footer.svg" alt="sykes logo footer" width={100} className="text-white" /> */}
            </div>
            <div className="flex flex-col text-xs">
            <h3 className='uppercase mb-1'>Company</h3>
                <ul className="flex flex-col justify-center uppercase text-footer text-xs">
                    <Link href="/about-us" passHref>
                        <a>
                            <li className='hover:underline'>About Us</li>
                        </a>
                    </Link>
                    <Link href="/where-we-source" passHref>
                        <a>
                            <li className='hover:underline'>Where we source</li>
                        </a>
                    </Link>
                    <Link href="/our-facilities" passHref>
                        <a>
                            <li className='hover:underline'>Our Facilities</li>
                        </a>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-col text-xs">
                <h3 className='uppercase mb-1'>Support</h3>
                <ul className="flex flex-col justify-center uppercase text-footer text-xs">
                    <Link href="/contact-us" passHref>
                        <a>
                            <li className='hover:underline'>Contact Us</li>
                        </a>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center space-x-2 text-brand ">
                <a href="/" target="_blank"><TiIcons.TiSocialFacebook size={30}/></a>
                <a href="/" target="_blank"><TiIcons.TiSocialTwitter size={30}/></a>
                <a href="/" target="_blank"><FaIcons.FaLinkedin size={30}/></a>
                <a href="/" target="_blank"><FaIcons.FaInstagramSquare size={30}/></a>
            </div>
        </div>
        <div className='py-5 px-7 mt-5'>
            <div className="flex flex-col md:flex-row justify-between space-y-4">
                <div className="flex flex-col">
                    <address className='text-xs font-thin text-footer text-left'>
                    <p className='text-xs'>Sykes Seafood Registered office address: 100 King Street, Knutsford, Cheshire WA16 6HQ.</p>
                    <p className='text-xs'>Registration Number 02289318</p>
                    </address>
                </div>
                <div className="flex flex-col md:flex-row space-x-4 text-center md:text-left text-xs text-footer underline">
                    <Link href="/terms">
                        <a className='text-xs'>
                            Terms & Conditions
                        </a>
                    </Link>
                    <Link href="/privacy">
                        <a className='text-xs'>
                            Privacy policy
                        </a>
                    </Link>
                    <Link href="/gdpr" passHref>
                        <a className='text-xs'>
                            GDPR
                        </a>
                    </Link>
                    <Link href="/statement">
                        <a className='text-xs'>
                         Modern Slavery Statement
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row text-center md:text-left text-footer">
                    <p className='text-xs'>&copy;{year}, Sykes Seafood</p>
                </div>
            </div>
        </div>
        </footer>
        </>
     );
}
 
export default Footer;