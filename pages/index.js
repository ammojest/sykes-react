import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact-us';
import Slider from '../components/slider';
const CTAbutton = props => <button className='bg-black text-white p-2 rounded'>{props.text}</button>;


export default function Home() {

  return (
    <>
    <div className="max-w-sreen-xl m-auto mb-20">
      <Slider />
    </div>
    <div className="max-w-sreen-xl m-auto mb-20">
    <Contact />
    </div>
    <div className="md:grid md:grid-cols-2 mx-auto text-center items-center">
      <div id="left space-y-3 flex flex-col">
        <h2 className='mb-3 text-xl tracking-widest'>WHO ARE SYKES SEAFOOD?</h2>
        <p className='px-3 mx-3 text-copy'>Sykes Seafood have over a century of experience providing frozen seafood online, with advanced knowledge across all areas of the industry from sustainability to sourcing. Our team have built up an extensive number of years working within the fish and seafood industry, resulting in guaranteed first-rate products and services every time.</p>
        <button className='my-3 bg-brand p-3 text-white uppercase'>
          Where We Source
        </button>
      </div>
      <img src="/fisherman.jpeg" className='object-cover' alt="fisherman" />
    </div>
    <div>
    </div>

    </>
  )
}


