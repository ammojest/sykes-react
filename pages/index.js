import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact-us';
import SearchBar from '../components/search';
import Slider from '../components/slider';
const CTAbutton = props => <button className='bg-black text-white p-2 rounded'>{props.text}</button>;


export default function Home( ) {

  return (
    <>
    <Head>
      <title>Sykes Seafood</title>
      <meta name="description" content="Sykes Seafood Frozen Food" />
    </Head>
    <div className="m-auto mb-4">
      <Slider />
    </div>
    <section className='text-center px-12 py-7' id="small_banner">
      <h2 className='text-lg md:text-xl uppercase'>Sustainable & quality assured wholesale frozen fish & seafood suppliers since 1862</h2>
    </section>
    <section id="who-are-sykes" className='my-4'>
    <div className="md:grid md:grid-cols-2 text-center items-center justify-center flex">
      <div id="flex flex-col items-center justify-center w-full">
        <h2 className='mb-3 text-xl tracking-widest'>WHO ARE SYKES SEAFOOD?</h2>
        <p className='text-center text-copy w-3/4 mx-auto'>Sykes Seafood have over a century of experience providing frozen seafood online, with advanced knowledge across all areas of the industry from sustainability to sourcing. Our team have built up an extensive number of years working within the fish and seafood industry, resulting in guaranteed first-rate products and services every time.</p>
        <button className='my-3 bg-brand p-3 text-white uppercase'>
          Where We Source
        </button>
      </div>
      <img src="/fisherman.jpeg" className='object-cover hidden md:block' alt="fisherman" />
    </div>
    </section>
    <section id="special-offers" className='my-5 flex flex-col justify-center items-center p-20'>
      <h3 className='mb-3 text-xl tracking-widest'>SPECIAL OFFERS</h3>
      <p className='text-copy'>The same quality seafood, just cheaper prices. Discover our discounts below.</p>
      <button className='my-3 bg-brand p-3 text-white uppercase'>Shop Now</button>
    </section>
    <section id="help" className='w-full m-auto block'>
      <div className="relative">
      <img src="/scallops.jpeg" alt="" className='object-cover w-full h-96 brightness-50'/>
      <div className="absolute top-1/2 transform -translate-y-1/2 px-5 flex flex-col justify-between items-center text-white z-3">
        <h3 className='mb-3 text-xl tracking-widest'>NEED SOME HELP?</h3>
        <p className='text-white text-center w-3/4 md:w-1/2'>We&quot;re a brand built on quality, with only the finest raw materials selected. We&quot;re invested in people, whether that be members of our team or part of our joint ventures. In every instance, we aim to provide the very best result, from catch to customer.</p>
        <button className='my-3 bg-brand p-3 text-white uppercase'>Help Centre</button>
      </div>
      </div>
    </section>


    </>
  )
}

export async function getStaticProps(){

  const res = await fetch('http://localhost:8888/sykes-react/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          query: `
          query MyQuery {
            pages {
              nodes {
                homepage {
                  slides {
                    slide1 {
                      sourceUrl
                    }
                    slide2 {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
          `,
      })
  })

  const json = await res.json()

  return {
    props: {
        pages: json.data.pages,
    },
  }

}


