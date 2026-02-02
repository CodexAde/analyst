"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const Banner = () => {
    const [userImages, setUserImages] = useState<string[]>([]);

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=3')
            .then(res => res.json())
            .then(data => {
                const images = data.results.map((user: any) => user.picture.medium);
                setUserImages(images);
            });
    }, []);

    return (
        <div className='relative overflow-hidden bg-white'>
            {/* Background Decorative Blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-lightblue/20 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
            
            <div className='mx-auto max-w-7xl pt-40 pb-32 px-6 lg:px-8 relative z-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>

                    {/* COLUMN-1 */}
                    <div className="mx-auto lg:mx-0 text-center lg:text-start">
                        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-black text-darkpurple leading-tight mb-6 tracking-tight'>
                            India&apos;s Trusted <br /> <span className="text-blue">SEBI Certified</span> <br /> Research Analyst.
                        </h1>
                        
                        <p className="text-lg text-gray-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Expert stock market research, wealth management, and capital growth strategies by Ramanti Capitals.
                        </p>

                        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12'>
                            <button className='w-full sm:w-auto text-lg font-bold bg-blue text-white py-4 px-10 rounded-2xl hover:bg-hoblue shadow-[0_20px_40px_rgba(0,102,255,0.2)] hover:shadow-none transform hover:-translate-y-1 transition-all duration-300'>
                                Get Research
                            </button>
                            <button className='w-full sm:w-auto text-lg font-bold bg-white text-darkpurple border-2 border-darkpurple/5 py-4 px-10 rounded-2xl hover:bg-darkpurple hover:text-white transition-all duration-300'>
                                Portfolio
                            </button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6">
                            <div className="flex -space-x-3">
                                {userImages.length > 0 ? (
                                    userImages.map((img, i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-blue/10 flex items-center justify-center overflow-hidden relative">
                                            <Image src={img} alt="investor" fill className="object-cover" />
                                        </div>
                                    ))
                                ) : (
                                    [1,2,3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-blue/5 animate-pulse" />
                                    ))
                                )}
                                <div className="w-10 h-10 rounded-full border-4 border-white bg-black text-white text-[10px] font-bold flex items-center justify-center relative z-10">
                                    10k+
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-gold text-sm">
                                    {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                                </div>
                                <p className="text-xs font-bold text-darkgrey uppercase tracking-widest">Happy Investors</p>
                            </div>
                        </div>
                    </div>

                    {/* COLUMN-2 */}
                    <div className='relative animate-float'>
                        <Image 
                            src="/images/banner/banner.svg" 
                            alt="hero-image" 
                            width={800} 
                            height={642} 
                            className="w-full h-auto" 
                            priority
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;


