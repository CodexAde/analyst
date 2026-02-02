"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'About Us', href: '#aboutus-section' },
    { name: 'Services', href: '#services-section' },
    { name: 'FAQ', href: '#faq-section' },
    { name: 'Blog', href: '#blog-section' },
    { name: 'Testimonial', href: '#testimonial-section' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar-container ${scrolled ? 'navbar-glass py-2' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* LOGO */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl sm:text-3xl font-bold text-black tracking-tight hover:opacity-80 transition-opacity">
                            Ramanti Capitals<span className="text-blue">.</span>
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {navigation.map((item) => (
                            <Link key={item.name} href={item.href} className="nav-link">
                                {item.name}
                            </Link>
                        ))}
                        <button className="bg-blue text-white px-8 py-3 rounded-full font-semibold hover:bg-hoblue hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                            Contact Us
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 text-darkgrey hover:text-blue transition-colors"
                        >
                            <Bars3Icon className="h-8 w-8" />
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <div className={`mobile-menu ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-8">
                    <div className="flex items-center justify-between mb-16">
                        <Link href="/" className="text-3xl font-bold text-black" onClick={() => setIsOpen(false)}>
                            Ramanti Capitals<span className="text-blue">.</span>
                        </Link>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-darkgrey hover:text-blue"
                        >
                            <XMarkIcon className="h-8 w-8" />
                        </button>
                    </div>
                    <div className="flex flex-col space-y-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="mobile-menu-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto">
                        <button className="w-full bg-blue text-white py-5 rounded-3xl font-bold text-xl shadow-xl">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

