import React from 'react';
import Image from 'next/image';
import { HiArrowTrendingUp, HiCurrencyDollar, HiClock } from 'react-icons/hi2';

const CaseStudySection: React.FC = () => {
    return (
        <section id="results" className="px-1 py-8">
            <div className="max-w-full">
                {/* Black rounded container with thin margin */}
                <div className="bg-black rounded-3xl px-6 md:px-36 py-12 md:py-20 mx-3">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Case Study Visual */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop"
                                    alt="Digital Growth Case Study - Revenue Dashboard"
                                    width={400}
                                    height={400}
                                    className="rounded-2xl object-cover w-[400px] h-[400px]"
                                />
                                {/* Overlay badge */}
                                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Live Results
                                </div>
                            </div>
                        </div>

                        {/* Right - Case Study Content */}
                        <div className="text-white">
                            <div className="mb-4">
                                <span className="inline-flex items-center bg-purple-600/20 border border-purple-500/30 rounded-full px-3 py-1 text-sm text-purple-300">
                                    Case Study
                                </span>
                            </div>
                            
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                From $50K to $500K ARR
                            </h2>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                A high-ticket coaching business struggling with manual lead qualification and 
                                inconsistent sales processes. We implemented The Growth Catalyst System to 
                                automate their entire customer journey.
                            </p>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                The result? 10x revenue growth in 18 months through strategic automation, 
                                high-converting landing pages, and intelligent lead nurturing systems that 
                                operate 24/7 without human intervention.
                            </p>

                            {/* Results */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <HiArrowTrendingUp className="w-5 h-5 text-green-400" />
                                    <span className="text-white font-medium">1,000% Revenue Increase</span>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <HiCurrencyDollar className="w-5 h-5 text-blue-400" />
                                    <span className="text-white font-medium">$450K Additional ARR</span>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <HiClock className="w-5 h-5 text-purple-400" />
                                    <span className="text-white font-medium">60% Time Savings</span>
                                </div>
                            </div>

                            {/* Implementation Timeframe */}
                            <div>
                                <p className="text-gray-400 text-sm font-medium mb-4 tracking-wider uppercase">
                                    Implementation Timeline
                                </p>
                                <div className="flex items-center gap-8 opacity-60">
                                    <div className="text-white font-bold text-lg">90 Days Setup</div>
                                    <div className="text-white font-bold text-lg">6 Months ROI</div>
                                    <div className="text-white font-bold text-lg">18 Months Scale</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
