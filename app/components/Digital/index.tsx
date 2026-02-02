import Image from "next/image";

const Digital = () => {
    return (

        <div className="bg-white py-20 px-4 md:px-0">
            <div className='mx-auto max-w-7xl px-4 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-32 items-center'>

                   {/* COLUMN-1 */}

                    <div className="pt-0 lg:pl-24 flex flex-col items-center lg:items-start text-center lg:text-start">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest uppercase">WHO WE ARE</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug">Premium Wealth Management <br /> & Investment Experts.</h4>
                        <p className="text-white text-lg font-normal mb-8 leading-relaxed opacity-80">
                            Our SEBI Certified analysts provide data-driven insights <br className="hidden lg:block" /> 
                            to maximize your capital and secure your financial future.
                        </p>
                        <div className="">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Explore Services</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div className="flex justify-center lg:justify-end mt-16 lg:mt-0">
                        <div>
                            <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={550} height={467} className="w-auto h-auto max-w-[300px] sm:max-w-[450px] lg:max-w-[550px]" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
