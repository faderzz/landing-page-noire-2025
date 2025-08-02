import React from 'react';
import Image from 'next/image';
import { HiStar } from 'react-icons/hi2';

interface ClientTestimonial {
    name: string;
    role: string;
    company: string;
    avatar: string;
    message: string;
    result: string;
}

const Testimonials: React.FC = () => {
    const featuredTestimonial = {
        name: "Marcus Chen",
        role: "Managing Partner",
        company: "Velocity Partners PE",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        videoThumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        message: "The Growth Catalyst System completely transformed how we operate. In 6 months, we went from £120K to £500K ARR. The automation handles everything - from deal sourcing to investor communications. It's like having a 24/7 team working for us.",
        result: "317% Revenue Growth in 6 Months",
        metrics: ["£380K ARR Increase", "40% Time Savings", "10x Deal Flow"]
    };

    const clientTestimonials: ClientTestimonial[] = [
        {
            name: "Sarah Rodriguez",
            role: "Founder & CEO",
            company: "Scale Consulting Group",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0c0?w=100&h=100&fit=crop&crop=face",
            message: "Working with Noire was a complete game-changer. Their systems freed up 15 hours per week that I now spend on high-value client work instead of admin tasks. The ROI was immediate.",
            result: "£200K ARR increase in 90 days"
        },
        {
            name: "David Kim",
            role: "Creative Director",
            company: "Apex Digital Agency",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            message: "The partnership with Noire allowed us to offer sophisticated automation services without building the expertise in-house. Our profit margins improved dramatically.",
            result: "150% profit margin improvement"
        },
        {
            name: "Jennifer Walsh",
            role: "CEO",
            company: "Growth Accelerator Partners",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            message: "The automation systems eliminated bottlenecks we didn't even know we had. Our client acquisition cost dropped by 40% while our conversion rates doubled.",
            result: "40% lower acquisition costs"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto">
            {/* Featured Video Testimonial */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12 mb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Video */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={featuredTestimonial.videoThumbnail}
                                alt="Video testimonial"
                                width={600}
                                height={400}
                                className="w-full h-64 lg:h-80 object-cover"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <button className="bg-white/90 hover:bg-white rounded-full p-6 shadow-lg transition-colors">
                                    <svg className="w-8 h-8 text-purple-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="flex items-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <HiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                            ))}
                        </div>

                        <blockquote className="text-xl lg:text-2xl text-gray-900 font-medium mb-6 leading-relaxed">
                            "{featuredTestimonial.message}"
                        </blockquote>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {featuredTestimonial.metrics.map((metric, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-lg font-bold text-purple-600">{metric}</div>
                                </div>
                            ))}
                        </div>

                        {/* Author */}
                        <div className="flex items-center">
                            <Image
                                src={featuredTestimonial.avatar}
                                alt={`${featuredTestimonial.name} avatar`}
                                width={60}
                                height={60}
                                className="rounded-full shadow-md"
                            />
                            <div className="ml-4">
                                <h3 className="text-xl font-bold text-gray-900">{featuredTestimonial.name}</h3>
                                <p className="text-gray-600">{featuredTestimonial.role}</p>
                                <p className="text-purple-600 font-semibold">{featuredTestimonial.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Testimonials */}
            <div className="grid md:grid-cols-3 gap-8">
                {clientTestimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                        {/* Rating */}
                        <div className="flex items-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <HiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                        </div>
                        
                        {/* Testimonial */}
                        <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                            "{testimonial.message}"
                        </p>
                        
                        {/* Result Highlight */}
                        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                            <p className="text-green-800 font-bold text-center">
                                {testimonial.result}
                            </p>
                        </div>
                        
                        {/* Author */}
                        <div className="flex items-center">
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                width={50}
                                height={50}
                                className="rounded-full shadow-md"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                <p className="text-sm text-purple-600 font-semibold">{testimonial.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
