const Contact = () => {
    async function handleOnSubmit(e) {
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        })
        console.log(formData);
    }
    return ( 
        <>
        <div className="w-100 justify-center px-4">
            <h1 className="text-2xl m-4 text-red-700 text-bold font-body uppercase text-center">
                Contact Us
            </h1>
        </div>
        <div className="w-full text-center">
            <form meethod="post" onSubmit={handleOnSubmit}>
                <p>
                    <label htmlFor="name" className="block m-2">Name</label>
                    <input type="text" className="border" name="name"/>
                </p>
                <p>
                    <label htmlFor="email" className=" block m-2">Email</label>
                    <input type="email" className="border" name="email"/>
                </p>
                <p>
                    <label htmlFor="message" className="block m-2">Message</label>
                    <textarea name="message" className="border" id="message" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <button className="bg-brand p-3 border-double uppercase text-white">
                        Submit
                    </button>
                </p>
            </form>
        </div>
        </>
     );
}
 
export default Contact;
