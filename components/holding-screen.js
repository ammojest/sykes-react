import Image from "next/image";

const Holding = () => {
    return ( 
        <>
        <div className="block">
            <div className="relative bg-[url('/sykes_image_30-medium.jpg')] bg-cover bg-bottom shadow-dark-70 md:shadow-dark-60 h-[75vh] md:h-[60vh]" id="bg-image">
                <div className="flex flex-col justify-center items-center h-full px-3 text-white" id="header-text">
                    <h1 className="brightness-100 z-20 text-xl uppercase text-center tracking-widest leading-10 my-3 font-bold" id="header-text">CUSTOMER ANNOUNCEMENT</h1>
                    <p className="my-2 py-3 md:w-1/2 brightness-100 text-center font-thin text-white">We&#39;ve made some changes to our website and the way our customers transact with us. This site is now dedicated to providing information and the latest news about our industry, brands and partners.</p>
                    <p className="my-2 py-3 md:w-1/2 brightness-100 text-center font-thin text-white">If you&#39;re looking to place an order with us then please visit our home delivery store at <a className="font-bold" href="https://seafooodbysykes.com" rel="noreferrer" target="_blank">seafoodbysykes.com</a>. Alternatively you can always call our sales team on <a href="tel:03334441862"className="font-bold">0333 444 1862</a> or email customer <a href="mailto:customer.service@sykesseafood.com" className="font-bold">customer.service@sykesseafood.com</a> to help with your order.</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Holding;
<>

</>