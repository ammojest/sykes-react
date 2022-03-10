const SignUp = () => {
    return ( 
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 bg-brand text-white justify-center py-9" id="contact-form">
                <div className="flex justify-center col-span-2 items-center">
                    <h3 className='text-lg align-middle text-center md:text-left p-3 md:p-0' id="sign up text">sign up to our newsletter today & receive our latest offers and product launches</h3>  
                </div>
                <div className="flex justify-center col-span-1">
                    <form>
                        <input type="text" className='bg-transparent border-white border-t border-b border-l p-2' placeholder='Enter Email Addresss' required pattern="[a-z0-9.%=-]+@[a-z0-9.-}+\[a-z]{2,4}$"/>
                        <p id="error" className="error">Please enter an email</p>
                        <input type="submit" className='border-white border p-2 hover:bg-white' value="Submit" />
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default SignUp;