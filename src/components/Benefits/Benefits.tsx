import React from 'react';
import Image from 'next/image';
import { HiArrowRight, HiCheck, HiComputerDesktop, HiAcademicCap, HiUserGroup, HiArrowTrendingUp, HiClock, HiChartBar } from 'react-icons/hi2';
import { navigationLinks } from '@/data/navigation';

const Benefits: React.FC = () => {
    return (
        <section id="services" className="bg-gray-50 py-20 mt-8 px-6 rounded-2xl">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                        What Your Business Will Gain
                    </h2>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={navigationLinks.bookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                            Get Your Free Growth Audit
                            <HiArrowRight className="w-5 h-5" />
                        </a>
                        <a href={navigationLinks.system} className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors">
                            See How It Works
                        </a>
                    </div>
                </div>
                
                {/* 6 Key Benefits - Two rows of three (Gestalt grouping) */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Benefit 1 */}
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiArrowTrendingUp className="w-8 h-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Predictable Revenue Growth</h3>
                        <p className="text-gray-600">AI-powered funnels that scale your top leads and generate consistent revenue streams.</p>
                    </div>
                    
                    {/* Benefit 2 */}
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiComputerDesktop className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
                        <p className="text-gray-600">Automations cut up to 50% of manual workload, freeing your team for high-value tasks.</p>
                    </div>
                    
                    {/* Benefit 3 */}
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiUserGroup className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
                        <p className="text-gray-600">A system tailored to your market's gaps, positioning you ahead of competitors.</p>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Benefit 4 */}
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiClock className="w-8 h-8 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Time Liberation</h3>
                        <p className="text-gray-600">Free your team from repetitive low-value tasks to focus on strategic growth.</p>
                    </div>
                    
                    {/* Benefit 5 */}
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiAcademicCap className="w-8 h-8 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Reliable Systems</h3>
                        <p className="text-gray-600">Build scalable, predictable business processes that work consistently.</p>
                    </div>
                    
                    {/* Benefit 6 */}
                    <div className="text-center p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HiChartBar className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable ROI</h3>
                        <p className="text-gray-600">Trackable results tied directly to revenue outcomes and business growth.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits