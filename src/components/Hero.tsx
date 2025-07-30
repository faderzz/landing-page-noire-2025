'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { HiArrowRight, HiVideoCamera, HiAcademicCap, HiDocumentText, HiChevronDown } from 'react-icons/hi2';
import { navigationLinks, companyInfo } from '@/data/navigation';
import CustomDropdown from './CustomDropdown';

const Hero: React.FC = () => {
    const [businessType, setBusinessType] = useState('');
    
    const businessTypeOptions = [
        { value: 'pe-firm', label: 'Private Equity Firm' },
        { value: 'coach-consultant', label: 'Coach/Consultant' },
        { value: 'agency', label: 'Digital Agency' },
        { value: 'other', label: 'Other' }
    ];
    
    return (
        <section
            id="hero"
            className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-32 pb-16 px-6"
        >
            <div className="max-w-6xl mx-auto mt-8">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* New Badge */}
                        <div className="inline-flex items-center gap-2 bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2">
                            <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-full">New</span>
                            <span className="text-gray-300 text-sm">Only 3 spots available!</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            {companyInfo.tagline}<br />
                            System
                        </h1>

                        {/* Description */}
                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
                            {companyInfo.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href={navigationLinks.bookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                                Book Strategy Call
                                <HiArrowRight className="w-4 h-4" />
                            </a>
                            <a href={navigationLinks.caseStudiesPage} className="border border-gray-600 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition-colors">
                                View Case Studies
                            </a>
                        </div>

                        {/* Service Features */}
                        <div className="flex items-center gap-6 pt-2">
                            <div className="flex items-center gap-2 text-gray-300">
                                <HiVideoCamera className="w-4 h-4" />
                                <span className="font-medium text-sm">HIGH-PERFORMANCE</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <HiAcademicCap className="w-4 h-4" />
                                <span className="font-medium text-sm">AUTOMATED</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <HiDocumentText className="w-4 h-4" />
                                <span className="font-medium text-sm">RESULTS-DRIVEN</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Book a Call Form */}
                    <div className="relative lg:mt-8">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                            <div className="text-center mb-5">
                                <h3 className="text-xl font-bold text-white mb-1">Book a Strategy Call</h3>
                                <p className="text-gray-400 text-sm">Let's discuss how The Growth Catalyst System can accelerate your business growth</p>
                            </div>
                            
                            <form className="space-y-3">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="businessType" className="block text-xs font-medium text-gray-300 mb-1">
                                        Business Type
                                    </label>
                                    <CustomDropdown
                                        id="businessType"
                                        name="businessType"
                                        placeholder="Select your business type"
                                        options={businessTypeOptions}
                                        value={businessType}
                                        onChange={setBusinessType}
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="challenges" className="block text-xs font-medium text-gray-300 mb-1">
                                        Primary Challenge
                                    </label>
                                    <textarea
                                        id="challenges"
                                        name="challenges"
                                        rows={2}
                                        className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                        placeholder="What's your biggest growth challenge right now?"
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                >
                                    Book Strategy Call
                                    <HiArrowRight className="w-4 h-4" />
                                </button>
                                
                                <p className="text-xs text-gray-500 text-center mt-2">
                                    No commitment required • 30-minute strategic assessment
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Trusted By Section with Marquee */}
                <div className="mt-20 pt-12 border-t border-gray-800">
                    <p className="text-gray-500 text-sm font-medium mb-8 text-center">TRUSTED BY INDUSTRY LEADERS</p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap">
                            <div className="mx-8 text-gray-400 font-bold text-xl">Goldman Sachs</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">KKR & Co</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Blackstone</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Apollo Global</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Carlyle Group</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Bain Capital</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">TPG Inc</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Warburg Pincus</div>
                            {/* Duplicate for seamless loop */}
                            <div className="mx-8 text-gray-400 font-bold text-xl">Goldman Sachs</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">KKR & Co</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Blackstone</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Apollo Global</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Carlyle Group</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Bain Capital</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">TPG Inc</div>
                            <div className="mx-8 text-gray-400 font-bold text-xl">Warburg Pincus</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
