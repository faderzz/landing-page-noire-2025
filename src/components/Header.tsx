'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3, HiArrowRight } from 'react-icons/hi2';
import Container from './Container';
import { navigationLinks, companyInfo } from '@/data/navigation';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="bg-white mx-auto flex justify-between items-center py-2 px-6 max-w-7xl mt-4 rounded-2xl shadow-lg border border-gray-100">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">N</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900">{companyInfo.name}</span>
                    </Link>

                    {/* Navigation Menu */}
                    <ul className="hidden md:flex items-center gap-8">
                        <li>
                            <Link href={navigationLinks.system} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                The System
                            </Link>
                        </li>
                        <li>
                            <Link href={navigationLinks.services} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href={navigationLinks.results} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Results
                            </Link>
                        </li>
                        <li>
                            <Link href={navigationLinks.caseStudies} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Case Studies
                            </Link>
                        </li>
                        <li>
                            <Link href={navigationLinks.investment} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Investment
                            </Link>
                        </li>
                        <li>
                            <Link href={navigationLinks.about} className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                About
                            </Link>
                        </li>
                    </ul>

                    {/* Enroll Now Button */}
                    <div className="hidden md:block">
                        <Link href={navigationLinks.bookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors text-md font-medium flex items-center gap-2">
                            Get Started
                            <HiArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-gray-100 text-gray-900 focus:outline-none rounded-lg w-10 h-10 flex items-center justify-center"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-gray-100">
                    <ul className="flex flex-col space-y-4 pt-4 pb-6 px-6">
                        <li>
                            <Link href="#overview" className="text-gray-700 hover:text-gray-900 transition-colors font-medium block py-2">
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="#curriculum" className="text-gray-700 hover:text-gray-900 transition-colors font-medium block py-2">
                                Curriculum
                            </Link>
                        </li>
                        <li>
                            <Link href="#instructor" className="text-gray-700 hover:text-gray-900 transition-colors font-medium block py-2">
                                Instructor
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium block py-2">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium block py-2">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors font-medium block py-2">
                                FAQ
                            </Link>
                        </li>
                        <li className="pt-4">
                            <Link href="#enroll" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center gap-2">
                                Enroll Now
                                <HiArrowRight className="w-4 h-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
