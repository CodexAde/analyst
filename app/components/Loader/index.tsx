"use client"
import { useEffect, useState } from "react";

const Loader = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Automatically hide component from DOM after animation completes (approx 2.5s)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center animate-loader-slide-up">
            <div className="text-center">
                <div className="text-blue text-sm font-bold tracking-[0.5em] uppercase mb-4 animate-loader-text opacity-0" style={{ animationDelay: '0.2s' }}>
                    Ramanti Capitals
                </div>
                <h1 className="text-white text-5xl md:text-7xl font-serif italic animate-loader-text opacity-0" style={{ animationDelay: '0.5s' }}>
                    Precision <span className="text-blue">&</span> Growth
                </h1>
                <div className="mt-8 flex justify-center">
                    <div className="w-24 h-[1px] bg-blue/30 animate-loader-text opacity-0" style={{ animationDelay: '0.8s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
