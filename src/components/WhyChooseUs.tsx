import React from 'react';
import { HiCurrencyDollar, HiArrowTrendingUp, HiHome, HiChartBar, HiAcademicCap, HiHeart } from 'react-icons/hi2';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Badge and Title */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        Why Educore?
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Why you should choose us
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* High Paying */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                            <HiCurrencyDollar className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">High Paying</h3>
                        <p className="text-gray-600 leading-relaxed">
                            UI Design is a lucrative career path that will offer you competitive pay and great benefits.
                        </p>
                    </div>

                    {/* Growth Opportunities */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <HiArrowTrendingUp className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Start as a junior designer and quickly progress to Lead roles, Senior roles, and beyond.
                        </p>
                    </div>

                    {/* No Degree Needed */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                            <HiAcademicCap className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">No Degree Needed</h3>
                        <p className="text-gray-600 leading-relaxed">
                            It requires no college degree but instead rewards people who work hard and grow in their craft.
                        </p>
                    </div>

                    {/* Work From Home */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                            <HiHome className="w-6 h-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Work From Home</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Remote work is on the rise, and UI & UX designers are leading the charge.
                        </p>
                    </div>

                    {/* In Demand */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                            <HiChartBar className="w-6 h-6 text-indigo-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">In Demand</h3>
                        <p className="text-gray-600 leading-relaxed">
                            You will be in high demand from tech giants to startups, guaranteeing versatile job opportunities.
                        </p>
                    </div>

                    {/* Make an Impact */}
                    <div className="text-left">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                            <HiHeart className="w-6 h-6 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Make an Impact</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A sense of accomplishment from impacting the people who use the products you design.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
