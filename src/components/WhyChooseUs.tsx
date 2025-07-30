import React from 'react';
import { HiCurrencyDollar, HiArrowTrendingUp, HiHome, HiChartBar, HiAcademicCap, HiHeart } from 'react-icons/hi2';

const WhyChooseUs: React.FC = () => {
    return (
        <section id="system" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Badge and Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Why Growth Catalyst?
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Why choose The Growth Catalyst System
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* High Paying */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <HiCurrencyDollar className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Growth</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our high-performance systems consistently drive 3-5x increases in qualified leads and conversion rates for our clients.
                        </p>
                    </div>

                    {/* Growth Opportunities */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <HiArrowTrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Intelligent automation eliminates manual tasks, reducing operational costs by 40-60% while improving accuracy.
                        </p>
                    </div>

                    {/* No Degree Needed */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <HiAcademicCap className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Advantage</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Custom digital solutions and proprietary systems that your competitors simply cannot replicate or match.
                        </p>
                    </div>

                    {/* Work From Home */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                            <HiHome className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Time Liberation</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Automated systems handle repetitive tasks 24/7, freeing your team to focus on high-value strategic work.
                        </p>
                    </div>

                    {/* In Demand */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <HiChartBar className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Scalable Systems</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Built to grow with your business, our systems handle increased volume without proportional cost increases.
                        </p>
                    </div>

                    {/* Make an Impact */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                            <HiHeart className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Measurable ROI</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Every system we build includes detailed analytics and KPIs to track and prove tangible business impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
