'use client';
import React, { useState } from 'react';
import { HiArrowRight, HiCheckCircle, HiDocumentText } from 'react-icons/hi2';

const LeadMagnet: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email submission logic here
        // For now, just show success state
        setIsSubmitted(true);
        // Reset after a few seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setEmail('');
        }, 3000);
    };

    const leadMagnetBenefits = [
        "7-step framework to identify revenue leaks in your current systems",
        "ROI calculator to quantify the cost of manual processes",
        "Automation opportunity scorecard tailored to your business type",
        "Implementation timeline template for systematic growth",
        "Case study: How we helped a PE firm add £380K ARR in 6 months"
    ];

    return (
        <div className="px-4">
            <section className="py-20 px-8 w-7xl mx-auto bg-black rounded-2xl text-white relative overflow-hidden ">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-100">
                <div className="absolute top-0 left-0 w-full h-full">
                    {/* svg grid background */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="w-full h-full"
                    >
                        <path
                            d="M0 0 L100 0 L100 100 L0 100 Z"
                            fill="url(#pattern)"
                        />
                    </svg>
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    {/* Lead Magnet Icon */}
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                        <HiDocumentText className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                        Get Your Free Growth Audit Checklist
                    </h2>
                    
                    <p className="text-xl lg:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto">
                        Download our comprehensive 25-point audit framework that we use to identify 
                        £100K+ revenue opportunities in businesses like yours
                    </p>

                    <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium">Downloaded by 2,847 business leaders</span>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-white/20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Benefits */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8">What You'll Get:</h3>
                            <div className="space-y-4">
                                {leadMagnetBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <HiCheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-purple-100 leading-relaxed">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Email Capture Form */}
                        <div>
                            {!isSubmitted ? (
                                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                                        Download Now (Free)
                                    </h4>
                                    <p className="text-gray-600 mb-6 text-center">
                                        Enter your email to get instant access
                                    </p>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your business email"
                                                required
                                                className="w-full px-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900"
                                            />
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                                        >
                                            Get My Free Audit Checklist
                                            <HiArrowRight className="w-5 h-5" />
                                        </button>
                                    </form>
                                    
                                    <p className="text-xs text-gray-500 mt-4 text-center">
                                        No spam. Unsubscribe anytime. We respect your privacy.
                                    </p>
                                </div>
                            ) : (
                                <div className="bg-white rounded-2xl p-8 shadow-2xl text-center">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <HiCheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                                        Success! Check Your Email
                                    </h4>
                                    <p className="text-gray-600">
                                        We've sent your Growth Audit Checklist to <strong>{email}</strong>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Social Proof */}
                <div className="text-center mt-12">
                    <p className="text-white mb-4">
                        Join business leaders from these companies who've downloaded this resource:
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                        <span className="text-sm font-medium text-white">Microsoft Partners</span>
                        <span className="text-sm font-medium text-white">Google Certified</span>
                        <span className="text-sm font-medium text-white">AWS Solutions</span>
                        <span className="text-sm font-medium text-white">HubSpot Elite</span>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default LeadMagnet;
