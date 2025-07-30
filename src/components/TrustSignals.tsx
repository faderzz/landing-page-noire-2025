import React from 'react';
import Image from 'next/image';
import { HiStar, HiCheckBadge, HiShieldCheck } from 'react-icons/hi2';

const TrustSignals: React.FC = () => {
    const trustedBy = [
        {
            name: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png"
        },
        {
            name: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/480px-Google_2015_logo.svg.png"
        },
        {
            name: "Amazon",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/480px-Amazon_logo.svg.png"
        },
        {
            name: "Salesforce",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/480px-Salesforce.com_logo.svg.png"
        },
        {
            name: "HubSpot",
            logo: "https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png"
        }
    ];

    const certifications = [
        {
            title: "Google Partner",
            icon: <HiCheckBadge className="w-8 h-8 text-blue-600" />,
            description: "Certified Google Ads & Analytics Partner"
        },
        {
            title: "AWS Certified",
            icon: <HiShieldCheck className="w-8 h-8 text-orange-600" />,
            description: "Amazon Web Services Solutions Architect"
        },
        {
            title: "HubSpot Elite",
            icon: <HiStar className="w-8 h-8 text-purple-600" />,
            description: "Elite Partner for Marketing & Sales"
        }
    ];

    const stats = [
        {
            number: "50+",
            label: "Businesses Transformed",
            subtext: "From startups to enterprise"
        },
        {
            number: "£50M+",
            label: "Revenue Generated",
            subtext: "For our clients combined"
        },
        {
            number: "300%",
            label: "Average ROI",
            subtext: "Within first 12 months"
        },
        {
            number: "24/7",
            label: "Support Available",
            subtext: "Dedicated success team"
        }
    ];

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Trusted By Section */}
                <div className="text-center mb-16">
                    <h3 className="text-lg font-semibold text-gray-600 mb-8">
                        Trusted by industry leaders and powered by best-in-class technology
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
                        {trustedBy.map((company, index) => (
                            <div key={index} className="flex items-center justify-center h-12">
                                <Image
                                    src={company.logo}
                                    alt={`${company.name} logo`}
                                    width={120}
                                    height={48}
                                    className="max-h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg font-semibold text-gray-900 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-600">
                                {stat.subtext}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications Section */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Industry Certified & Recognized
                        </h3>
                        <p className="text-gray-600">
                            Our expertise is validated by leading technology partners
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    {cert.icon}
                                </div>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                    {cert.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {cert.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rating Section */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12">
                    <div className="flex items-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <HiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        <span className="text-2xl font-bold text-gray-900">5.0</span>
                    </div>
                    <div className="text-center md:text-left">
                        <p className="text-gray-900 font-semibold">Rated 5-stars by our clients</p>
                        <p className="text-gray-600 text-sm">Based on 50+ client success stories</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
