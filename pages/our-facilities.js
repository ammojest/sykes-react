import Head from "next/head";
import Image from "next/image";

const Facilities = () => {
    return ( 
        <>
        <Head>
            <title>OUR FACILITIES | Sykes Seafood</title>
            <meta name="description" content="Our facilities are UK based and state-of-the-art, providing us with complete control within our supply chain. Such control means we are never out of stock." />
        </Head>
        <header>
            <div className="block">
                <div className="relative bg-[url('/silhouette-of-boats.jpeg')] bg-cover bg-center shadow-dark-60 h-[60vh]" id="bg-image">
                    <div className="flex flex-col justify-center items-center h-full text-white" id="header-text">
                        <h1 className="brightness-100 z-20 text-xl font-thin uppercase text-center tracking-widest leading-10 my-3" id="header-text">OUR FACILITIES</h1>
                        <p className="w-full md:w-1/2 brightness-100 text-center font-thin text-white">A major strength of Sykes is our UK based state-of-the-art manufacturing and processing facility. We are able to buy raw materials at the right time to the highest UK technical standards. Having such control means we are never out of stock.</p>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
                <div className="flex flex-col text-center justify-center md:w-3/4 mx-auto space-y-5 my-7 py-5">
                    <h3>LIVERPOOL</h3>
                    <p className="w-3/4 mx-auto">Established in 1964, and previously known as Sefton Meadow Seafoods, Sykes Manufacturing is a specialist seafood processor. The factory has expanded dramatically since it first opened, and the range of capabilities have grown too. The site specialises in picking and dispatching fish to an endless range of packing styles including retail bags and foodservice own brands. This offers us complete flexibility and ultimate control within our supply chain. Today, Sykes Manufacturing remains to be the driving force on industry standards within the food industry; with BAP accreditation and the highest BRC grade (AA+) awarded. Our factory is subject to unannounced audits by our retail customers, as well annual inspections for accreditations and certifications. As a result of our expansion to the factory, and investment in new machinery, a new strict process control with six key stages was applied throughout. All process times and temperatures are consistently monitored and fitted with fail-safe devices so that any minute deviation can be quickly corrected, producing only the finest quality raw material.</p>
                </div>
                <div className="flex relative aspect-w-16 aspect-h-9 h-[800px]">
                    <Image
                        src="/Sefton_facility_facilities-min.webp"
                        alt="Looks Sir Droids!"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
                <div className="flex relative aspect-w-16 aspect-h-9 h-[500px] order-2 md:order-1">
                    <Image
                        src="/lonely-boat.webp"
                        alt="Boat on the sea"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col text-center justify-center md:w-3/4 mx-auto space-y-5 my-7 py-5 order 1 md:order-2">
                    <h3 className="">INTERNATIONAL</h3>
                    <p className=" w-10/12 md:w-3/4 mx-auto">With Sykes being over 150 years old, joint ventures have become a common occurrence between long-standing business partners. Sourcing ethically and ensuring our fish is fresh are two firm objectives for Sykes, so creating joint ventures with specific factories and facilities overseas, directly at the source, ensures this happens.</p>
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
                <div className="flex flex-col text-center justify-center md:w-3/4 mx-auto space-y-5 my-7 py-5">
                    <h3>CHESHIRE</h3>
                    <p className="w-10/12 md:w-3/4 mx-auto">Our second facility is our Cheshire Headquarters. Based in the picturesque town of Knutsford, having recently relocated from our Smithfield Market site, we centrally manage all key business functions.</p>
                </div>
                <div className="flex relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image
                        src="/sefton-3.webp"
                        alt="sefton factory"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
      
        </>
     );
}
 
export default Facilities;
