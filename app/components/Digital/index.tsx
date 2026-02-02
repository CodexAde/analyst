import Image from "next/image";

const Digital = () => {
    return (

        <div className="bg-white py-20 px-4 md:px-0">
            <div className='mx-auto max-w-7xl px-4 lg:px-8 bg-digital rounded-3xl bg-blue relative'>
                <div className='grid grid-cols-1 lg:grid-cols-2 py-32'>

                   {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">WHO WE ARE</h3>
                        <h4 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-snug text-center lg:text-start">We are a digital <br /> agency that builds <br /> amazing products.</h4>
                        <p className="text-white text-lg font-normal mb-8 leading-relaxed text-center lg:text-start opacity-80">
                            Our team of experts is dedicated to transforming your vision into reality. <br />
                            With cutting-edge technology and creative design, we deliver solutions <br />
                            that empower your business and delight your users.
                        </p>
                        <div className="text-center lg:text-start">
                            <button className="text-xl font-semibold text-white bg-btnblue py-4 px-12 hover:bg-hoblue rounded-full">Get started</button>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div className="flex justify-center lg:justify-end">
                        <div className="lg:absolute girldoodle">
                            <Image src="/images/digital/girldoodle.svg" alt="girldoodle" width={550} height={467} className="w-auto h-auto max-w-[400px] sm:max-w-[600px] lg:max-w-[550px]" />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
