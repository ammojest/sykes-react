import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
    return ( 
        <>
        <Head>
            <title>About Us | Sykes Seafood</title>
            <meta name="description" content="Sykes Seafood began in Manchester in 1862 by Joseph Sykes. We continue to provide high quality frozen fish & seafood today, using the finest raw materials." />
        </Head>
        <header>
            <div className="block">
                <div className="relative bg-[url('/Fish-process.jpeg')] bg-cover bg-center shadow-dark-60 h-[60vh]" id="bg-image">
                    <div className="flex flex-col justify-center items-center h-full px-3 text-white" id="header-text">
                        <h1 className="brightness-100 z-20 text-xl font-thin uppercase text-center tracking-widest leading-10 my-3" id="header-text">A Family Run Business With Over A <br/> Century Of Experience</h1>
                        <p className="my-2 py-3 md:w-1/2 brightness-100 text-center font-thin text-white">We are a brand built on quality, with only the finest raw materials selected. We are invested in people, whether that be members of our team or part of our joint ventures. In every instance, we aim to provide the very best result, from catch to customer.</p>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5 my-7 space-y-5 md:space-y-0">
                <div className="relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image 
                        src="/Old_1.jpeg"
                        alt="old image of docks" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-3 mx-1 md:mx-7 col-span-3 ">
                    <h2 className="text-center my-3">The History</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">Our business began in Manchester in 1862 by Joseph Sykes, by the trading in wet fish and Dutch Shrimp — a miracle to previous generations. At this time, fresh fish was merely obtainable at seaside ports, so to a city like Manchester, fish was only available if preserved by smoking or salting. By the mid-19th century, with the development of Britain&quot;s rail network and speed of international transport, vast quantities of ice could now be transferred from Canada. J. Sykes seized this opportunity by purchasing ice from ice salesman to store fresh fish. Like the swell of the waves, Sykes Seafood has no intention of standing still. We have been established since 1862 and in 2020 our desire & passion for the industry we operate within, remains as strong as ever. As with all great adventures the best is yet to come. Our company, including it is dedicated workforce, continue to grow and the unequalled quality of our products and customer service gets even better with the passage of time.</p>  
                </div>
                <div className="relative aspect-w-16 aspect-h-9 h-[500px]">
                    <Image 
                        src="/Old_2.jpeg" 
                        alt="old image of docks" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
                <div className="flex flex-col text-center justify-center w-3/4 mx-auto space-y-5 my-7 py-5">
                    <h3>WE&apos;RE PROUD OF OUR QUALITY</h3>
                    <p className="md:w-3/4 mx-auto">From knowledgeable buyers and experienced account managers, right through to our expert processing, production and packaging division, the team at Sykes are driven by a shared passion to source and deliver the finest seafood. They work tirelessly from dawn until dusk to ensure our products are of the highest quality. We&apos;ve been perfecting our craft for more than a century, using the same technology that have been with us for generations. We regard it as a labor of love. The seafood and fish sold by Sykes is bought in full containers from countries including Iceland, India, Greenland and New Zealand. We&apos;re exceptionally proud to be a local service with a global reach, founded on traditional values - the very best of all worlds. We only use our own trusted brands. This enables our suppliers to understand the importance of quality, reliability, and loyalty. The value we place on strong partnerships extends to our hundreds of customers. These include wholesalers, caterers, food manufacturers and multi-national retailers including some of Britain&apos;s fastest growing and most innovative companies.</p>
                </div>
                <div className="flex relative aspect-w-16 aspect-h-9 h-[800px]">
                    <Image
                        src="/fishing-nets.jpeg"
                        alt="Picture of something nice"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5 my-7 space-y-5 md:space-y-0">
                <div className="relative aspect-w-16 aspect-h-9 h-[700px]">
                    <Image 
                        src="/prawn-pack-arctic.jpeg" 
                        alt="arctic prawns" 
                        layout="fill" 
                        objectFit="cover" 
                        objectPosition="center"
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-3 mx-1 md:mx-7 col-span-3 ">
                    <h2 className="text-center my-3">PREMIUM BRANDS</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">Our products bring that fresh-from-the-sea experience to the plate. We offer the sweetest, freshest, most delicious seafood you&apos;ll ever taste. Every day, we handle 400 tonnes of the finest frozen fish and seafood sourced from all over the world. This enables us to offer a selection of bespoke brands developed to cater for the individual needs of all our customers. Our distinct ranges offer exceptional versatility and benefits, including flexibility on price and the advantage of being able to buy different value ranges from one trusted supplier. Arctic Royal is our premium long-serving flagship brand with more than 200 products in the range. Originally available to just restaurants and chefs, Arctic Royal has expanded into the retail sector. It is now one of the fastest-growing brands on the market, bringing the world&apos;s finest seafood, closer to home. Clear Seas was developed to compliment our Arctic Royal range and offers excellent every day value for money. Available to both the food service industry and retail customers, Clear Seas offers an extensive range of products including squid, lobster and prawns at cost-effective prices. Glenmyr was created as an affordable, flexible, food service-only brand. With a wide array of different fish and seafood products, Glenmyr serves the needs of caterers and wholesalers alike.</p>  
                </div>
                <div className="relative aspect-w-16 aspect-h-9 h-[700px]">
                    <Image 
                        src="/glenmyr-prawns.jpeg" 
                        alt="Glenmry Prawns" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
                <div className="flex flex-col text-center justify-center w-3/4 mx-auto space-y-5 my-7 py-5">
                    <h3>OUR FACILITIES</h3>
                    <p className="md:w-3/4 mx-auto">Today, we specialise in supplying a wide range of high quality, predominantly frozen, fish and seafood to a variation of market sectors including Foodservice, Retail, Wholesale, Manufacturers and End Users. We have two sites; Manchester, our hometown and the location of Sykes&apos; Head Office and Liverpool, our state of the art factory. Sykes Liverpool remains to be the driving force on industry standards within the food industry; with the highest BRC grade (AA+) awarded. Together, with our factory capabilities we are able to offer a leading service from start to finish. Most of our products are packed within the UK, in our specialist Liverpool-based production facilities using a variety of innovative methods. Here, we have the facility to tailor packaging, making it bespoke for our customers - ideal for the those who want to buy in bulk and brand with personalised labels. Within these factories we can cook, treat, or pack raw to custom specifications, proving a unique service to our customers. We also source freshly frozen at sea products; being headed, gutted or filleted within moments of catch. Resulting in a premium supplement of protein that has retained its freshly caught natural flavor and freshness.</p>
                    <Link href="/our-facilities">
                        <button className="bg-brand text-white p-3 w-1/2 mx-auto">OUR FACILITIES</button>
                    </Link>
                </div>
                <div className="flex relative aspect-w-16 aspect-h-9 h-[800px]">
                    <Image
                        src="/Sefton_facility_facilities-min.jpeg"
                        alt="Looks Sir Droids!"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </section>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-5 my-7 space-y-5 md:space-y-0">
                <div className="relative aspect-w-16 aspect-h-9 h-[700px]">
                    <Image 
                        src="/lonely-boat.jpeg" 
                        alt="fishing boat" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </div>
                <div className="flex flex-col justify-center items-center px-3 mx-1 md:mx-7 col-span-3 space-y-5 ">
                    <h2 className="text-center my-3">STRAIGHT FROM THE SOURCE</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">As a major importer of a wide range of fish and seafood, we accept we hold a level of responsibility. We impart our own high standards and expectations throughout the supply chain and are committed to sourcing from Sustainable, well-managed and responsible fishing areas and aquaculture regions. The growing demand for complete transparency in supply chains is one that we&apos;re at the forefront of. We pro-actively support a range of organization who are dedicated to the improvement and long term sustainability of fish stock globally; MSC, ASC, BAP and GAP to name a few. Although we do not directly own or operate &apos;Sykes&apos; fishing boats, we ensure to source directly from partner vessels and manage a supply chain that spans across the world with interactions right through from catch to customer.</p>  
                    <Link href="/where-we-source">
                            <button className="bg-brand text-white p-3 w-1/2 mx-auto">WHERE WE SOURCE</button>
                    </Link>
                </div>
                <div className="relative aspect-w-16 aspect-h-9 h-[700px]">
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
 
export default AboutUs;
