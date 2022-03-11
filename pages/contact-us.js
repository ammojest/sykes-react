import Head from "next/head";
import Image from "next/image";


const ContactPage = () => {
    return ( 
        <>
        <Head>
            <title>Contact Us | Sykes Seafood</title>
            <meta name="description" content="Our Customer Service Team are here to help. Please contact us via email or phone." />
        </Head>
        <header>
            <div className="block">
                <div className="relative bg-[url('/contact-us-bg-lg.jpeg')] bg-cover bg-center shadow-dark-60 h-[60vh]" id="bg-image">
                    <div className="flex flex-col justify-center items-center h-full text-white" id="header-text">
                        <h1 className="brightness-100 z-20 text-xl font-thin uppercase text-center tracking-widest leading-10 my-3" id="header-text">NEED HELP?</h1>
                        <p className="w-full md:w-1/2 brightness-100 text-center font-thin text-white">Our Customer Service Team are here to help. Please contact us on 0333 444 1862 or email customer.service@sykesseafood.com.</p>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5 my-7">
                <div className="relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image 
                        src="/fishing-ropes.jpeg" 
                        alt="fishing ropes" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-3 mx-1 md:mx-7 col-span-3 space-y-5 ">
                    <h2 className="text-center my-3">CONTACT US</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">Please contact us on <a className="underline text-brand " href="tel:03334441862">0333 444 1862</a> or email <a className="underline text-brand" href="mailto:customer.service@sykesseafood.com">customer.service@sykesseafood.com</a></p>  
                    <address className="text-center">
                    <p>Sykes Seafood Registered office address:</p> 
                    <p>100 King Street</p> 
                    <p>Knutsford</p> 
                    <p>Cheshire</p> 
                    <p>WA16 6H</p>
                    </address>
                </div>
                <div className="relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image 
                        src="/waves.jpeg" 
                        alt="waves" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
            </div>
        </section>
        </>
     );
}
 
export default ContactPage;