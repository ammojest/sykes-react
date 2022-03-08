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
                <div className="relative bg-[url('/Fish-process.jpeg')] bg-cover bg-center shadow-dark-60 h-[400px]" id="bg-image">
                    <div className="flex flex-col justify-center items-center h-full text-white" id="header-text">
                        <h1 className="brightness-100 z-20 text-xl font-thin uppercase text-center tracking-widest leading-10 my-3" id="header-text">A Family Run Business With Over A <br/> Century Of Experience</h1>
                        <p className="w-3/4 md:w-1/2 brightness-100 text-center font-thin text-white">We are a brand built on quality, with only the finest raw materials selected. We are invested in people, whether that be members of our team or part of our joint ventures. In every instance, we aim to provide the very best result, from catch to customer.</p>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div className="grid grid-cols-4 my-3 h-[500px]">
                <Image src="/Old_1.jpeg" alt="old image of docks" width={500} height={500} />
                <div className="flex flex-col justify-center items-center px-3 mx-7 col-span-2 ">
                    <h2 className="text-center my-3">The History</h2>
                    <p className="mx-7 w-3/4 text-center text-copy">Our business began in Manchester in 1862 by Joseph Sykes, by the trading in wet fish and Dutch Shrimp — a miracle to previous generations. At this time, fresh fish was merely obtainable at seaside ports, so to a city like Manchester, fish was only available if preserved by smoking or salting. By the mid-19th century, with the development of Britain’s rail network and speed of international transport, vast quantities of ice could now be transferred from Canada. J. Sykes seized this opportunity by purchasing ice from ice salesman to store fresh fish. Like the swell of the waves, Sykes Seafood has no intention of standing still. We have been established since 1862 and in 2020 our desire & passion for the industry we operate within, remains as strong as ever. As with all great adventures the best is yet to come. Our company, including it is dedicated workforce, continue to grow and the unequalled quality of our products and customer service gets even better with the passage of time.</p>  
                </div>
                <Image src="/Old_2.jpeg" alt="old image of docks" width={500} height={500} />
            </div>
        </section>
        </>
     );
}
 
export default AboutUs;
