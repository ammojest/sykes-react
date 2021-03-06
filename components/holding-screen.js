import Image from "next/image";

const Holding = () => {
    return ( 
        <>
        <div className="block">
            <div className="relative bg-[url('/lonely-boat.webp')] bg-cover bg-bottom shadow-dark-50 md:shadow-dark-50 h-[75vh] md:h-[60vh]" id="bg-image">
                <div className="flex flex-col justify-center items-center h-full px-3 text-white" id="header-text">
                    <h1 className="brightness-100 z-20 text-xl uppercase text-center tracking-widest leading-10 my-3 font-bold" id="header-text">CUSTOMER ANNOUNCEMENT</h1>
                    <p className="my-2 py-3 md:w-1/2 brightness-100 text-center font-thin text-white">We&#39;ve made some changes to our website and the way our customers transact with us. This site is now dedicated to providing information and the latest news about our industry, brands and partners.</p>
                    <p className="my-2 py-3 md:w-1/2 brightness-100 text-center font-thin text-white">If you&#39;d like to place an order with us call our sales team on <a href="tel:03334441862"className="font-bold">0333&nbsp;444&nbsp;1862</a> or email <a href="mailto:customer.service@sykesseafood.com" className="font-bold">customer.service@sykesseafood.com</a> for more information and pricing. Alternatively, smaller businesses may benefit from using our new online store with free home delivery at <a className="font-bold" href="https://seafooodbysykes.com" rel="noreferrer" target="_blank">seafoodbysykes.com</a>.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Holding;
<>

</>