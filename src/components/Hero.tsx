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
            <div className="max-w-7xl mx-auto mt-8">
                <div className="grid lg:grid-cols-[1.2fr_0.8fr] items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Main Heading */}
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                            Unlock Predictable Growth<br />
                            in 90 Days, <span className='text-purple-500'>Without the Guesswork</span>.
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl">
                            Our proven Growth Catalyst System helps businesses double revenue, streamline operations, and scale with confidence. Trusted by Goldman Sachs, KKR & Co., and 50+ leading brands.
                        </p>

                        {/* Client Logos - Moved directly under headline */}
                        <div className="py-4">
                            <p className="text-gray-500 text-sm font-medium mb-4">TRUSTED BY INDUSTRY LEADERS</p>
                            <div className="flex flex-wrap items-center gap-6 opacity-70">
                                <div className="text-gray-400 font-bold text-lg">Goldman Sachs</div>
                                <div className="text-gray-400 font-bold text-lg">KKR & Co</div>
                                <div className="text-gray-400 font-bold text-lg">Blackstone</div>
                                <div className="text-gray-400 font-bold text-lg">Apollo Global</div>
                                <div className="text-gray-400 font-bold text-lg">Carlyle Group</div>
                            </div>
                        </div>

                        {/* Primary & Secondary CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={navigationLinks.bookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors text-lg">
                                Book Your Free Strategy Session
                                <HiArrowRight className="w-5 h-5" />
                            </a>
                            <button className="border border-gray-600 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-colors text-lg flex items-center justify-center gap-2">
                                <HiVideoCamera className="w-5 h-5" />
                                See How It Works (3-min video)
                            </button>
                        </div>

                        {/* Urgency/Scarcity */}
                        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mt-4">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                            <span className="text-red-300 text-sm font-medium">Only 5 free strategy slots left this month</span>
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
                    <div className="relative mt-8">
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


            </div>
        </section>
    );
};

export default Hero;
