import Image from "next/image";

const Holding = () => {
    return ( 
        <>
        <div className="block">
            <div className="relative bg-[url('/Fisherman.jpeg')] bg-cover bg-center shadow-dark-70 h-[60vh]" id="bg-image">
                <div className="flex flex-col justify-center items-center h-full px-3 text-white" id="header-text">
                    <h1 className="brightness-100 z-20 text-xl uppercase text-center tracking-widest leading-10 my-3 font-bold" id="header-text">Ch-ch-ch-changes</h1>
                    <p className="my-2 py-3 md:w-1/2 brightness-100 text-center font-thin text-white">We made some changes to our website, we have moved our Store to <a className="font-bold" href="https://seafooodbysykes.com" rel="noreferrer" target="_blank">seafoodbysykes.com</a> or you can always call our sales staff on <a href="tel:03334441862"className="font-bold">0333 444 1862</a> or email <a href="mailto:customer.service@sykesseafood.com" className="font-bold">customer.service@sykesseafood.com</a> to help with your order. This site is now dedicated to giving you the latest news about Sykes and our family of businesses</p>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Holding;
<>

</>