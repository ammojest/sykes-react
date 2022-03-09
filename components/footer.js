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
                <img src="/sykes-brand-logo-footer.svg" alt="sykes logo footer" width={100} className="text-white" />
            </div>
            <div className="flex flex-col text-xs">
            <h3 className='uppercase mb-1'>Company</h3>
                <ul className="flex flex-col justify-center uppercase text-footer text-xs">
                    <li className='hover:underline'>About Us</li>
                    <li className='hover:underline'>Where we source</li>
                    <li className='hover:underline'>Our Facilities</li>
                    <li className='hover:underline'>Our Brands</li>
                </ul>
            </div>
            <div className="flex flex-col text-xs">
                <h3 className='uppercase mb-1'>Support</h3>
                <ul className="flex flex-col justify-center uppercase text-footer text-xs">
                    <li className='hover:underline'>Contact Us</li>
                    <li className='hover:underline'>Help Center</li>
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
                    <address className='text-xs font-thin text-footer text-center'>
                    <p>Sykes Seafood Registered office address: 100 King Street, Knutsford, Cheshire WA16 6HQ.</p>
                    <p>Registration Number 02289318</p>
                    </address>
                </div>
                <div className="flex flex-col md:flex-row space-x-4 text-center md:text-left text-xs text-footer underline">
                    <Link href="/">
                        <a>
                            Terms & Conditions
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            Privacy policy
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                            GDPR
                        </a>
                    </Link>
                    <Link href="/">
                        <a>
                         Modern Slavery Statement
                        </a>
                    </Link>
                </div>
                <div className="flex flex-col md:flex-row text-center md:text-left text-footer">
                    <p>&copy;{year}, Sykes Seafood</p>
                </div>
            </div>
        </div>
        </footer>
        </>
     );
}
 
export default Footer;