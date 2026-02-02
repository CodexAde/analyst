import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 gap-10 items-center'>

                {/* COLUMN-1 */}

                <div className="mx-auto lg:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-xs md:text-sm lg:text-lg font-bold px-6 py-2 rounded-3xl tracking-wider hover:text-white hover:bg-black transition-all'>DESIGN AGENCY</button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-4xl sm:text-6xl lg:text-80xl font-bold text-darkpurple leading-tight'>
                            Dedicated to <br className="hidden sm:block" /> bring your <br className="hidden sm:block" /> ideas to life.
                        </h1>
                    </div>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-8 md:py-5 md:px-14 rounded-full hover:bg-hoblue transition-all'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 flex justify-center lg:block'>
                    <Image src="/images/banner/banner.svg" alt="hero-image" width={800} height={642} className="w-full h-auto max-w-[500px] lg:max-w-none" />
                </div>

            </div>
        </div>
    )
}

export default Banner;
