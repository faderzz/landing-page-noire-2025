import React from 'react';
import { HiCheck, HiArrowRight, HiStar } from 'react-icons/hi2';
import { navigationLinks } from '@/data/navigation';

interface ServiceTier {
    name: string;
    subtitle: string;
    description: string;
    price: string;
    priceRange: string;
    features: string[];
    outcomes: string;
    highlight?: boolean;
    ctaText: string;
    idealFor: string;
}

const Pricing: React.FC = () => {
    const serviceTiers: ServiceTier[] = [
        {
            name: "Foundation Builder",
            subtitle: "Website + Brand + Strategy",
            description: "Professional digital presence with strategic roadmap.",
            price: "£7,000+",
            priceRange: "£7,000 - £14,000+",
            idealFor: "Businesses establishing their digital presence",
            outcomes: "High-converting website that elevates your market presence",
            features: [
                "Strategic discovery & growth blueprint",
                "Brand identity refinement",
                "Custom website development",
                "Landing page design (3 pages)",
                "SEO optimization",
                "Performance analytics setup"
            ],
            ctaText: "Get Started"
        },
        {
            name: "Momentum Accelerator",
            subtitle: "Automation + AI + CRM Integration",
            description: "Transform your website into an intelligent revenue machine.",
            price: "£14,000+",
            priceRange: "£14,000 - £25,000+",
            idealFor: "Growth-focused businesses ready to automate",
            outcomes: "Automated workflows that reduce manual tasks by 70%",
            features: [
                "Everything in Foundation Builder",
                "CRM & marketing automation setup",
                "5 automated workflows",
                "AI content generation",
                "Lead scoring & qualification",
                "Appointment scheduling automation"
            ],
            highlight: true,
            ctaText: "Scale Faster"
        },
        {
            name: "System Dominator",
            subtitle: "Custom Software + Ongoing Optimization",
            description: "Proprietary digital ecosystem with continuous optimization.",
            price: "£25,000+",
            priceRange: "£25,000 - £50,000+",
            idealFor: "Enterprises seeking competitive advantage",
            outcomes: "Custom-built system providing exponential growth",
            features: [
                "Everything in Momentum Accelerator",
                "Custom software development",
                "Bespoke client portals",
                "AI agent development",
                "3-month optimization retainer",
                "Dedicated strategic support"
            ],
            ctaText: "Dominate"
        }
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
                <div 
                    key={tier.name} 
                    className={`relative rounded-2xl p-6 lg:p-8 shadow-lg border transition-all hover:shadow-xl ${
                        tier.highlight 
                            ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white transform scale-105' 
                            : 'border-gray-200 bg-white hover:border-purple-300'
                    }`}
                >
                    {tier.highlight && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                                <HiStar className="w-4 h-4" />
                                Most Popular
                            </span>
                        </div>
                    )}
                    
                    {/* Header */}
                    <div className="text-center mb-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                        <p className="text-sm font-medium text-purple-600 mb-3">{tier.subtitle}</p>
                        <p className="text-gray-600 mb-4 text-sm lg:text-base">{tier.description}</p>
                        
                        <div className="mb-4">
                            <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">{tier.price}</div>
                            <div className="text-sm text-gray-500">{tier.priceRange}</div>
                        </div>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Ideal For:</h4>
                        <p className="text-sm text-gray-600">{tier.idealFor}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 mb-4">What You Get:</h4>
                        <ul className="space-y-3">
                            {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3">
                                    <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Expected Outcome */}
                    <div className="mb-8 p-4 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="text-sm font-semibold text-green-800 mb-2">Expected Outcome:</h4>
                        <p className="text-sm text-green-700">{tier.outcomes}</p>
                    </div>

                    <a 
                        href={navigationLinks.bookCall}
                        className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                            tier.highlight
                                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                    >
                        {tier.ctaText}
                        <HiArrowRight className="w-4 h-4" />
                    </a>
                </div>
            ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-12 p-8 bg-gray-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready to Build Your System?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    These tiers represent a starting point for discussion. Every business is unique, and our Strategic Blueprint Call is where we'll tailor the perfect Growth Catalyst System to your specific ambitions and requirements.
                </p>
                <a 
                    href={navigationLinks.bookCall}
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                    Book Your Strategic Blueprint Call
                    <HiArrowRight className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};

export default Pricing;