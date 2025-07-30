'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="bg-white mx-auto flex justify-between items-center py-4 px-6 max-w-6xl mt-4 rounded-2xl shadow-lg border border-gray-100">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">E</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-900">
                            Educore
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        <li>
                            <Link href="#overview" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="#curriculum" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Curriculum
                            </Link>
                        </li>
                        <li>
                            <Link href="#instructor" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Instructor
                            </Link>
                        </li>
                        <li>
                            <Link href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                                FAQ
                            </Link>
                        </li>
                    </ul>

                    {/* Enroll Now Button */}
                    <div className="hidden md:block">
                        <Link href="#enroll" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center gap-2">
                            Enroll Now
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
