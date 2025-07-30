import React from 'react';
import Image from 'next/image';
import { HiArrowTrendingUp, HiCurrencyDollar, HiClock, HiArrowRight } from 'react-icons/hi2';

const CaseStudySection: React.FC = () => {
    const caseStudies = [
        {
            id: 1,
            title: "£120K → £500K ARR in 6 months",
            company: "Velocity Partners PE",
            image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            metric: "317%",
            metricLabel: "Revenue Growth",
            description: "PE firm automated investor relations and deal sourcing"
        },
        {
            id: 2,
            title: "Cut acquisition costs by 40% in 90 days",
            company: "Scale Consulting Group",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            metric: "40%",
            metricLabel: "Cost Reduction",
            description: "Consulting firm streamlined client acquisition process"
        },
        {
            id: 3,
            title: "Built automated sales engine: 10x leads, 3x revenue",
            company: "Apex Digital Agency",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
            metric: "10x",
            metricLabel: "Lead Generation",
            description: "Digital agency automated lead nurturing and conversion"
        }
    ];

    return (
        <section id="results" className="py-20 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Proven Results Across 50+ Businesses
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        See how our Growth Catalyst System has transformed businesses just like yours
                    </p>
                </div>

                {/* Case Study Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {caseStudies.map((study) => (
                        <div key={study.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={study.image}
                                    alt={study.company}
                                    width={400}
                                    height={240}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Metric overlay */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                                    <div className="text-2xl font-bold text-gray-900">{study.metric}</div>
                                    <div className="text-xs text-gray-600">{study.metricLabel}</div>
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                <p className="text-purple-600 font-medium mb-3">{study.company}</p>
                                <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                                
                                <button className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm group-hover:gap-2 transition-all">
                                    See Full Case Study
                                    <HiArrowRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors mx-auto">
                        View All Case Studies
                        <HiArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CaseStudySection;
