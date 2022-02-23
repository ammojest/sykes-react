
import Layout from '../components/layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Sykes Seafood | Frozen Seafood & Fish</title>
        <meta name="description" content="Sykes Seafood have been providing frozen fish & seafood for over a century to the wholesale, retail & hospitality industries." />
      </Head>
      <Component {...pageProps} />
    </ Layout>
    


  )
}

export default MyApp
