import Image from "next/image";


const Test = () => {
    return ( 
        <>
        <div className="relative h-[500px]">
            <Image
                  layout="fill"
                  className="object-center object-cover pointer-events-none"
                  src="/Fish-process.webp"
                  alt="title"
            />
            <div className="relative z-1 text-center flex justify-center items-center h-full">
                <h1>title</h1>
            </div>
        </div>

        </>
     );
}
 
export default Test;
