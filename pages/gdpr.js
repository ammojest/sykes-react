import Head from "next/head";

const GDPR = () => {
    return ( 
        <>
        <Head>
            <title>GDPR | Sykes Seafood</title>
            <meta name="description" content="GDPR is really important to us here at Sykes Seafood. To find out the ways we are working hard to keep your personal data protected, read more here." />
        </Head>
        <section className="mx-auto px-5 container mt-5">
            <header>
                <h1 className="uppercase text-center my-6">GDPR</h1>
            </header>
            <div className="w-100 text-md flex flex-col space-y-5">
                <p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.</p><p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. Cookies contain information that is transferred to your computer&apos;s hard drive.</p><p>We use the following cookies:</p><p><b>Strictly necessary cookies.</b> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.</p><p><b>Analytical/performance cookies.</b> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</p><p><b>Functionality cookies.</b> These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region).</p><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>Targeting cookies.</b> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</p><p>Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies.</p><p>
                You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies
                (including essential cookies) you may not be able to access all or parts of our site.</p>
            </div>            
        </section>
        </>
     );
}
 
export default GDPR;