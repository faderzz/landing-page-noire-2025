import React from 'react';
import { HiCheck, HiArrowRight } from 'react-icons/hi2';

interface ServiceTier {
    name: string;
    description: string;
    price: string;
    duration: string;
    features: string[];
    highlight?: boolean;
    ctaText: string;
}

const Pricing: React.FC = () => {
    const serviceTiers: ServiceTier[] = [
        {
            name: "Foundation Package",
            description: "Perfect for businesses ready to establish their digital presence",
            price: "£15,000",
            duration: "Starting from",
            features: [
                "Strategic Blueprint & Architecture",
                "High-Performance Website Development",
                "Brand Identity & Messaging",
                "Basic Automation Setup",
                "3 Months Optimization Support",
                "Performance Analytics Dashboard"
            ],
            ctaText: "Get Started"
        },
        {
            name: "Growth Catalyst System",
            description: "Complete digital transformation for scaling businesses",
            price: "£35,000",
            duration: "Starting from",
            features: [
                "Everything in Foundation Package",
                "Advanced AI Automation Flows",
                "CRM Integration & Lead Nurturing",
                "Custom Software Development",
                "6 Months Continuous Optimization",
                "Dedicated Growth Strategist",
                "ROI Tracking & Reporting",
                "Priority Support"
            ],
            highlight: true,
            ctaText: "Book Strategy Call"
        },
        {
            name: "Enterprise Solution",
            description: "Bespoke systems for large-scale operations",
            price: "Custom",
            duration: "Pricing",
            features: [
                "Everything in Growth Catalyst",
                "Multi-platform Integration",
                "Custom API Development",
                "Advanced Security Implementation",
                "12+ Months Partnership",
                "Dedicated Development Team",
                "24/7 Support & Monitoring",
                "White-label Solutions Available"
            ],
            ctaText: "Contact Us"
        }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
                <div 
                    key={tier.name} 
                    className={`relative rounded-2xl p-8 shadow-lg border ${
                        tier.highlight 
                            ? 'border-purple-500 bg-gradient-to-b from-purple-50 to-white' 
                            : 'border-gray-200 bg-white'
                    }`}
                >
                    {tier.highlight && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                Most Popular
                            </span>
                        </div>
                    )}
                    
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                        <p className="text-gray-600 mb-4">{tier.description}</p>
                        <div className="mb-6">
                            <span className="text-sm text-gray-500">{tier.duration}</span>
                            <div className="text-4xl font-bold text-gray-900">{tier.price}</div>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                                <HiCheck className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button 
                        className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                            tier.highlight
                                ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                        }`}
                    >
                        {tier.ctaText}
                        <HiArrowRight className="w-4 h-4" />
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Pricing