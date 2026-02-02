"use client"
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqData = [
    {
        question: "Is Ramanti Capitals SEBI registered?",
        answer: "Yes, Ramanti Capitals is a SEBI Certified Research Analyst firm. We strictly adhere to the guidelines and regulations set by the Securities and Exchange Board of India to ensure the highest standards of financial integrity."
    },
    {
        question: "What kind of research reports do you provide?",
        answer: "We offer comprehensive research spanning across Equity, F&O, and Commodities. Our reports include daily market outlooks, weekly technical analysis, and deep-dive fundamental research on mid-cap and small-cap stocks."
    },
    {
        question: "How do you ensure data privacy of investors?",
        answer: "We take your privacy seriously. All your investment details and personal data are encrypted and never shared with third parties. Our platform is built with bank-grade security to protect your financial interests."
    },
    {
        question: "Can I get a customized portfolio review?",
        answer: "Absolutely. Our Platinum Wealth members get access to direct analyst consultations where we review your existing portfolio and provide a detailed risk-reward audit along with rebalancing suggestions."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq-section" className='mx-auto max-w-7xl py-32 px-4 lg:px-8 bg-faqblue rounded-3xl my-16 bg-blue relative overflow-hidden'>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] -mr-32 -mt-32 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-[120px] -ml-32 -mb-32"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px]"></div>
            
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="relative z-10">
                <h3 className='text-lg font-medium text-white/60 text-center mb-4 tracking-widest uppercase'>Got Questions?</h3>
                <h2 className='text-4xl lg:text-6xl font-bold text-center text-white mb-20 leading-tight'>Frequently asked <br /> questions.</h2>
                
                <div className="w-full max-w-4xl mx-auto space-y-4">
                {faqData.map((item, index) => (
                    <div 
                        key={index}
                        className={`group rounded-2xl transition-all duration-300 ${
                            openIndex === index 
                                ? 'bg-white shadow-2xl' 
                                : 'bg-white/10 hover:bg-white/20'
                        }`}
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="flex w-full items-center justify-between p-6 lg:p-8 text-left transition-all"
                        >
                            <span className={`text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
                                openIndex === index ? 'text-black' : 'text-white'
                            }`}>
                                {item.question}
                            </span>
                            <ChevronDownIcon
                                className={`h-6 w-6 transition-all duration-500 ease-in-out ${
                                    openIndex === index 
                                        ? 'text-black rotate-180' 
                                        : 'text-white/60 group-hover:text-white'
                                }`}
                            />
                        </button>
                        
                        <div className={`grid transition-all duration-500 ease-in-out px-6 lg:px-8 overflow-hidden ${
                            openIndex === index 
                                ? 'grid-rows-[1fr] pb-8 opacity-100' 
                                : 'grid-rows-[0fr] pb-0 opacity-0'
                        }`}>
                            <div className="min-h-0">
                                <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                                    openIndex === index ? 'text-gray-600' : 'text-white/50'
                                }`}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};

export default FAQ;