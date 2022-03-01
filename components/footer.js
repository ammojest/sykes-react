import Image from 'next/image'

const Footer = () => {
    return ( 
        <>
            <footer>
            <Image 
            src="/sykes-brand-logo-footer.svg"
            alt="logo"
            height={100}
            width={100}
            />
            </footer>
        </>
     );
}
 
export default Footer;