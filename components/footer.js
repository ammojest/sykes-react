import Image from 'next/image'

const Footer = () => {
    return ( 
        <>
        <div className="footer block px-4 max-w-7xl">
            <footer>
            <Image 
            src="/sykes-brand-logo-footer.svg"
            alt="logo"
            height={100}
            width={100}
            />
            </footer>
        </div>
        </>
     );
}
 
export default Footer;