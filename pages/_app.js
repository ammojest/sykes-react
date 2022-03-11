
import Layout from '../components/layout'
import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NT3JGQR' });
}, []);

  return (
    <Layout>
      <Head>
        <title>Sykes Seafood | Frozen Seafood & Fish</title>
        <meta name="description" content="Sykes Seafood have been providing frozen fish & seafood for over a century to the wholesale, retail & hospitality industries." />
        <link rel="shortcut icon" href="/sykes-brand-logo-footer.svg" />
      </Head>
      <Component {...pageProps} />
    </ Layout>
    


  )
}

export default MyApp
