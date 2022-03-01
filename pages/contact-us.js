const ContactPage = () => {
    return ( 
        <>
        <section>
            <div className="w-full m-auto block">
                <div className="relative select-none">
                    <img className="object-cover w-full h-[50vh] brightness-50" src="/Fisherman.jpeg" alt="" />
                    <div className="absolute top-1/2 transform -translate-y-1/2 px-5 w-full text-white z-3">
                        <div className="text-center space-y-5">
                            <h2 className="text-6xl text-white uppercase">Contact Us</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="w-100 text-2xl flex">
            <form action="/" method="get">
                <input type="text" placeholder="Search..." className="border rounded"/>
                <button className="bg-red-700 text-white p-1 rounded" type="button">Search</button>
            </form>

            </div>

        </section>
        </>
     );
}
 
export default ContactPage;