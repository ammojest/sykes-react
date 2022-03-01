import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/contact-us';
import SearchBar from '../components/search';
import Slider from '../components/slider';
import fishData from '../components/fish.json'
const CTAbutton = props => <button className='bg-black text-white p-2 rounded'>{props.text}</button>;


export default function Home( {pages} ) {

  console.log({pages});

  const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

  return (
    <>
    <Head>
      <title>Sykes Seafood</title>
      <meta name="description" content="Sykes Seafood Frozen Food" />
    </Head>
    <div className="m-auto mb-20">
      <Slider />
    </div>
    <div className="m-auto mb-20 grid grid-cols-2">
      <Contact />
    </div>

    <div className="md:grid md:grid-cols-2 mx-auto text-center items-center justify-center">
      <div id="left space-y-3 flex flex-col mx-4">
        <h2 className='mb-3 text-xl tracking-widest'>WHO ARE SYKES SEAFOOD?</h2>
        <p className='px-3 mx-3 text-copy'>Sykes Seafood have over a century of experience providing frozen seafood online, with advanced knowledge across all areas of the industry from sustainability to sourcing. Our team have built up an extensive number of years working within the fish and seafood industry, resulting in guaranteed first-rate products and services every time.</p>
        <button className='my-3 bg-brand p-3 text-white uppercase'>
          Where We Source
        </button>
      </div>
      <img src="/fisherman.jpeg" className='object-cover' alt="fisherman" />
    </div>
    <div>
      {/* {pages.map(page => (
        <div key = {page.id}>
        <h3>{pages.node.homepage}</h3>
        </div>
      ))} */}
    </div>

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


