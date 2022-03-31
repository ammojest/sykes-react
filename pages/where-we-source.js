import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SignUp from "../components/sign-up";



const WhereWeSource = () => {
    return ( 
        <>
        <Head>
            <title>Where We Source | Sykes Seafood</title>
            <meta name="description" content="Our facilities are UK based and state-of-the-art, providing us with complete control within our supply chain. Such control means we are never out of stock." />
        </Head>
        <header>
            <div className="block">
                <div className="relative bg-[url('/where-we-source-header.webp')] bg-cover bg-center shadow-dark-60 h-[60vh]" id="bg-image">
                    <div className="flex flex-col justify-center items-center h-full text-white" id="header-text">
                        <h1 className="brightness-100 z-20 text-xl font-thin uppercase text-center tracking-widest leading-10 my-3" id="header-text">WHERE WE SOURCE</h1>
                        <p className="w-full md:w-1/2 brightness-100 text-center font-thin text-white">Our wide range of stock is created using only the finest raw materials, resulting in only the best results reach each and every plate.</p>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
                <div className="flex relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image
                        src="/world-map.webp"
                        alt="Boat on the sea"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col text-center justify-center w-3/4 mx-auto space-y-5 my-7 py-5">
                    <h2>SOURCING OUR PRODUCTS</h2>
                    <p className="w-3/4 mx-auto">Our product range is built upon only the highest sourced raw materials. Our Buyers have worked within the industry and encompass knowledge, experience and confidence in their decisions. We work with trusted suppliers in joint ventures that have been part of our business for a vast amount of time. We source from across the globe with relationships built in a variety of countries through a multitude of languages. We work with teams across the world to ensure we source the finest and freshest raw material available to buy to UK Technical accreditation and standards.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5 my-7">
                <div className="relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image 
                        src="/waves-bg-lg.webp"
                        alt="waves" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-3 mx-1 md:mx-7 col-span-3 space-y-5 ">
                    <h2 className="text-center my-3">OUR FACILITIES</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">Today, we specialise in supplying a wide range of high quality, predominantly frozen, fish and seafood to a variation of market sectors including Foodservice, Retail, Wholesale, Manufacturers and End Users. We have two sites; Manchester, our hometown and the location of Sykes’ Head Office and Liverpool, our state of the art factory. Sykes Liverpool remains to be the driving force on industry standards within the food industry; with the highest BRC grade (AA+) awarded. Together, with our factory capabilities we are able to offer a leading service from start to finish.</p>
                    <Link href="/our-facilities">
                        <a>
                            <button className="uppercase">Our Facilities</button>  
                        </a>                    
                    </Link>
                </div>
                <div className="relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image 
                        src="/waves-bg-lg.webp"
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
 
export default WhereWeSource;