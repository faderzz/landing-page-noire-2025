import React from 'react';
import { HiMagnifyingGlass, HiCog6Tooth, HiRocketLaunch, HiArrowRight } from 'react-icons/hi2';
import { navigationLinks } from '@/data/navigation';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            step: 1,
            title: "Audit & Strategy",
            description: "We map your growth bottlenecks",
            details: "Comprehensive analysis of your current systems, identification of revenue leaks, and strategic roadmap creation tailored to your business.",
            icon: <HiMagnifyingGlass className="w-8 h-8" />,
            color: "blue"
        },
        {
            step: 2,
            title: "System Build",
            description: "Deploy automations, funnels, and campaigns",
            details: "Implementation of high-performance websites, intelligent automation workflows, and conversion-optimized marketing systems.",
            icon: <HiCog6Tooth className="w-8 h-8" />,
            color: "purple"
        },
        {
            step: 3,
            title: "Optimize & Scale",
            description: "Double down on what works to scale revenue",
            details: "Continuous optimization, performance monitoring, and scaling strategies to maximize ROI and sustainable growth.",
            icon: <HiRocketLaunch className="w-8 h-8" />,
            color: "green"
        }
    ];

    const getColorClasses = (color: string) => {
        switch(color) {
            case 'blue':
                return {
                    bg: 'bg-blue-100',
                    text: 'text-blue-600',
                    border: 'border-blue-200'
                };
            case 'purple':
                return {
                    bg: 'bg-purple-100',
                    text: 'text-purple-600',
                    border: 'border-purple-200'
                };
            case 'green':
                return {
                    bg: 'bg-green-100',
                    text: 'text-green-600',
                    border: 'border-green-200'
                };
            default:
                return {
                    bg: 'bg-gray-100',
                    text: 'text-gray-600',
                    border: 'border-gray-200'
                };
        }
    };

    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Our 3-Step Process Makes Scaling Simple
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From initial audit to full-scale optimization, we follow a proven methodology that delivers predictable results
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => {
                        const colors = getColorClasses(step.color);
                        return (
                            <div key={step.step} className="relative">
                                {/* Connection Line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-10">
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                                            <HiArrowRight className="w-4 h-4 text-gray-400" />
                                        </div>
                                    </div>
                                )}
                                
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow relative z-20">
                                    {/* Step Number & Icon */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-16 h-16 ${colors.bg} ${colors.border} border-2 rounded-full flex items-center justify-center`}>
                                            <div className={colors.text}>
                                                {step.icon}
                                            </div>
                                        </div>
                                        <div className={`text-2xl font-bold ${colors.text} bg-white border-2 ${colors.border} rounded-full w-10 h-10 flex items-center justify-center`}>
                                            {step.step}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-purple-600 font-semibold mb-4">
                                        {step.description}
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        {step.details}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Timeline */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Timeline to Results</h3>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">Week 1-2</div>
                            <p className="text-gray-600">Strategy & Audit</p>
                        </div>
                        <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">Week 3-8</div>
                            <p className="text-gray-600">System Implementation</p>
                        </div>
                        <div className="hidden md:block w-8 h-0.5 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">Week 9+</div>
                            <p className="text-gray-600">Optimize & Scale</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a href={navigationLinks.bookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors">
                        Book Your Free Strategy Session
                        <HiArrowRight className="w-5 h-5" />
                    </a>
                    <p className="text-gray-500 text-sm mt-4">
                        30-minute strategic assessment • No commitment required • Only 5 slots left this month
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
