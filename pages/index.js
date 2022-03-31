import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Holding from '../components/holding-screen';
import Slider from '../components/slider';
import { useState } from 'react';
import MailchimpFormContainer from '../components/mailchimp';
import SimpleForm from '../components/mailchimp';
const CTAbutton = props => <button className='bg-black text-white p-2 rounded'>{props.text}</button>;


export default function Home( ) {

  const [ isSubmitted, setisSubmitted] = useState(false);

  return (
    <>
    <Head>
      <title>Sykes Seafood</title>
      <meta name="description" content="Sykes Seafood Frozen Food" />
    </Head>
    <div className="m-auto mb-4">
      {/* <Slider /> */}
      <Holding />
    </div>
    <section className='text-center px-12 py-7' id="small_banner">
      <h2 className='text-lg md:text-xl uppercase'>Sustainable & quality assured wholesale frozen fish & seafood suppliers since 1862</h2>
    </section>
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
          <div className="flex flex-col text-center justify-center w-3/4 mx-auto space-y-5 my-7 py-5 order-2 md:order-1">
              <h3>WHO ARE SYKES SEAFOOD?</h3>
              <p className="md:w-3/4 mx-auto">Sykes Seafood have over a century of experience providing frozen seafood online, with advanced knowledge across all areas of the industry from sustainability to sourcing. Our team have built up an extensive number of years working within the fish and seafood industry, resulting in guaranteed first-rate products and services every time</p>
              <Link href="/where-we-source"><button className='my-3 w-1/2 mx-auto bg-brand p-3 text-white uppercase'>WHERE WE SOURCE</button></Link>
          </div>
          <div className="flex relative aspect-w-16 aspect-h-9 h-[500px] order-1 md:order-2">
              <Image
                  src="/fisherman.webp"
                  alt="Picture of something nice"
                  layout="fill"
                  objectFit="cover"
              />
          </div>
      </div>
    </section>
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 my-7 space-y-5">
          <div className="flex relative aspect-w-16 aspect-h-9 h-[500px]">
              <Image
                  src="/old-1.webp"
                  alt="Picture of something nice"
                  layout="fill"
                  objectFit="cover"
              />
          </div>
          <div className="flex flex-col text-center justify-center w-3/4 mx-auto space-y-5 my-7 py-5">
              <h3>Our History</h3>
              <p className="md:w-3/4 mx-auto">Discover more about the history of Sykes Seafood and what we stand for as a company. Sykes has been the trusted name in Seafood for over 150 years and we are proud of our strong heritage</p>
              <Link href="/about-us"><button className='my-3 w-1/2 mx-auto bg-brand p-3 text-white uppercase'>Our History</button></Link>
          </div>
      </div>
    </section>

    <section id="help" className='w-full m-auto block'>
      <div className="relative">
      <div className='object-cover w-full h-96 brightness-50 bg-[url("/scallops.webp")] bg-center bg-no-repeat bg-cover '/>
      <div className="absolute top-1/2 transform -translate-y-1/2 px-5 flex flex-col justify-between items-center text-white z-3">
        <h3 className='mb-3 text-xl tracking-widest'>NEED SOME HELP?</h3>
        <p className='text-white text-center w-3/4 md:w-1/2'>We&quot;re a brand built on quality, with only the finest raw materials selected. We&quot;re invested in people, whether that be members of our team or part of our joint ventures. In every instance, we aim to provide the very best result, from catch to customer.</p>
        <Link href="/contact-us"><button className='my-3 bg-brand p-3 text-white uppercase'>Contact Us</button></Link>
      </div>
      </div>
    </section>
    {/* <section className='mt-1 px-5 py-4 bg-brand'>
      <div className="flex justify-center">
        <div className=' flex items-center w-1/2'>
          <h3 className='text-white'>SIGN UP TO OUR NEWSLETTER TODAY & RECEIVE OUR LATEST OFFERS AND PRODUCT LAUNCHES</h3>  
        </div>
        <div>
          <SimpleForm />
        </div>
      </div>
    </section> */}


    </>
  )
}

