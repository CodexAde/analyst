import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Who We Are",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: 'Ramanti Capitals is a premier SEBI Certified research house dedicated to empowering investors with precise market analysis and wealth growth strategies.',
        link: 'Our Story'
    },
    {
        heading: "Our Research",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'We leverage advanced data analytics and technical models to provide objective, high-conviction stock research that aims for consistent alpha.',
        link: 'Methodology'
    },
    {
        heading: "Wealth Goal",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: 'From retail investors to HNIs, we provide tailored portfolio advisory services that align with your long-term financial aspirations and risk profile.',
        link: 'Get Advisory'
    },
]

const Aboutus = () => {
    return (
        <div id="aboutus-section" className="relative">
            <div className='mx-auto max-w-7xl px-6 py-24 my-32 lg:px-10 bg-white border border-gray-100 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] relative overflow-hidden'>
                {/* Background Decor */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue/5 rounded-full blur-3xl opacity-50"></div>
                
                <div className="relative z-10">
                    <h3 className='text-center text-blue text-sm font-bold tracking-[0.3em] uppercase mb-4'>ABOUT RAMANTI</h3>
                    <h4 className='text-center text-4xl lg:text-6xl font-black text-darkpurple mb-4'>Precision in Every Call.</h4>
                    <p className="text-center text-gray-500 text-lg max-w-2xl mx-auto mb-16">
                        We blend years of market expertise with cutting-edge research to bring you the best-in-class financial advisory.
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 text-center lg:text-start'>
                        {Aboutdata.map((item, i) => (
                            <div key={i} className='group p-10 rounded-[2.5rem] bg-lightgrey hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,102,255,0.15)] transition-all duration-500 border border-transparent hover:border-blue/10 flex flex-col items-center lg:items-start'>
                                <div className="w-20 h-20 mb-8 flex items-center justify-center bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:shadow-blue/20">
                                    <Image src={item.imgSrc} alt={item.heading} width={45} height={45} />
                                </div>
                                <h4 className='text-3xl font-bold text-darkpurple mb-4 group-hover:text-blue transition-colors'>{item.heading}</h4>
                                <p className='text-gray-600 text-lg leading-relaxed mb-8 font-medium opacity-80'>
                                    {item.paragraph}
                                </p>
                                <Link href="#" className='inline-flex items-center text-lg font-bold text-blue group-hover:gap-3 gap-2 transition-all duration-300'>
                                    {item.link}
                                    <ChevronRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutus;