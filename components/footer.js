import * as FaIcons from 'react-icons/fa';
import * as TiIcons from 'react-icons/ti';
import Image from 'next/image'
import Link from 'next/link';
import FooterLogo from './svg/footer-logo.svg';

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return ( 
        <>
        <footer className="py-5 mt-5">
        <div className="flex flex-col md:flex-row md:justify-between px-14 space-y-5 text-center md:text-left items-center md:items-start">
            <div className="flex flex-col justify-center ">
                <FooterLogo width={100} height={100} />
                {/* <img src="/sykes-brand-logo-footer.svg" alt="sykes logo footer" width={100} className="text-white" /> */}
            </div>
            <div className="flex flex-col text-xs">
            <h3 className='uppercase mb-1'>Company</h3>
                <div className="flex flex-col justify-center uppercase text-footer text-xs">
                    <Link href="/about-us" passHref>
                        <a className='hover:underline'>About Us</a>
                    </Link>
                    <Link href="/where-we-source" passHref>
                        <a className='hover:underline'>Where we source</a>
                    </Link>
                    <Link href="/our-facilities" passHref>
                        <a className='hover:underline'>Our Facilities</a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col text-xs">
                <h3 className='uppercase mb-1'>Support</h3>
                <div className="flex flex-col justify-center uppercase text-footer text-xs">
                    <Link href="/contact-us" passHref>
                        <a className='hover:underline'>Contact Us</a>
                    </Link>
                </div>
            </div>
            <div className="flex items-center space-x-2 text-brand ">
                <a href="https://www.facebook.com/sykesseafood" target="_blank" rel="noreferrer" aria-label="Facebook"><TiIcons.TiSocialFacebook size={30}/></a>
                <a href="https://twitter.com/SykesSeafood" target="_blank" rel="noreferrer" aria-label="Twitter" ><TiIcons.TiSocialTwitter size={30}/></a>
                <a href="https://www.linkedin.com/company/sykesseafood/mycompany/" target="_blank" rel="noreferrer" aria-label="Linked In" ><FaIcons.FaLinkedin size={30}/></a>
                <a href="https://www.instagram.com/sykesseafood/" target="_blank" rel="noreferrer" aria-label="Instagram" ><FaIcons.FaInstagramSquare size={30}/></a>
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