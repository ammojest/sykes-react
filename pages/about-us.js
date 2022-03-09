import Head from "next/head";
import Image from "next/image";

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
                    <div className="flex flex-col justify-center items-center h-full text-white" id="header-text">
                        <h1 className="brightness-100 z-20 text-xl font-thin uppercase text-center tracking-widest leading-10 my-3" id="header-text">A Family Run Business With Over A <br/> Century Of Experience</h1>
                        <p className="w-full md:w-1/2 brightness-100 text-center font-thin text-white">We are a brand built on quality, with only the finest raw materials selected. We are invested in people, whether that be members of our team or part of our joint ventures. In every instance, we aim to provide the very best result, from catch to customer.</p>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="grid grid-cols-1 md:grid-cols-4 my-3 space-y-5">
                <div className="relative aspect-w-16 aspect-h-9">
                    <Image src="/Old_1.jpeg" alt="old image of docks" width={996} height={781} layout="fill" objectFit="cover" />
                </div>
                <div className="flex flex-col justify-center items-center px-3 mx-1 md:mx-7 col-span-2 ">
                    <h2 className="text-center my-3">The History</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">Our business began in Manchester in 1862 by Joseph Sykes, by the trading in wet fish and Dutch Shrimp — a miracle to previous generations. At this time, fresh fish was merely obtainable at seaside ports, so to a city like Manchester, fish was only available if preserved by smoking or salting. By the mid-19th century, with the development of Britain&quot;s rail network and speed of international transport, vast quantities of ice could now be transferred from Canada. J. Sykes seized this opportunity by purchasing ice from ice salesman to store fresh fish. Like the swell of the waves, Sykes Seafood has no intention of standing still. We have been established since 1862 and in 2020 our desire & passion for the industry we operate within, remains as strong as ever. As with all great adventures the best is yet to come. Our company, including it is dedicated workforce, continue to grow and the unequalled quality of our products and customer service gets even better with the passage of time.</p>  
                </div>
                <div className="relative aspect-w-16 aspect-h-9">
                    <Image src="/Old_2.jpeg" alt="old image of docks" width={996} height={781} layout="fill" objectFit="cover" />
                </div>
            </div>
        </section>
        <section>
            <div className="grid grids-cols-1 md:grid-cols-2">
                <div className="flex flex-col text-center justify-center w-3/4 mx-auto space-y-3 my-7 py-5">
                    <h3>WE&apos;RE PROUD OF OUR QUALITY</h3>
                    <p>From knowledgeable buyers and experienced account managers, right through to our expert processing, production and packaging division, the team at Sykes are driven by a shared passion to source and deliver the finest seafood. They work tirelessly from dawn until dusk to ensure our products are of the highest quality. We&apos;ve been perfecting our craft for more than a century, using the same technology that have been with us for generations. We regard it as a labor of love. The seafood and fish sold by Sykes is bought in full containers from countries including Iceland, India, Greenland and New Zealand. We&apos;re exceptionally proud to be a local service with a global reach, founded on traditional values - the very best of all worlds. We only use our own trusted brands. This enables our suppliers to understand the importance of quality, reliability, and loyalty. The value we place on strong partnerships extends to our hundreds of customers. These include wholesalers, caterers, food manufacturers and multi-national retailers including some of Britain&apos;s fastest growing and most innovative companies.</p>
                </div>
                <div className="relative aspect-w-16 aspect-h-9">
                    <Image
                        src="/fishing-nets.jpeg"
                        alt="Picture of something nice"
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
