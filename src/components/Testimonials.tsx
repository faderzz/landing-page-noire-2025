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
    const clientTestimonials: ClientTestimonial[] = [
        {
            name: "Marcus Chen",
            role: "Managing Partner",
            company: "Velocity Partners PE",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            message: "The Growth Catalyst System transformed our investor relations completely. We went from manual spreadsheets to an automated system that handles everything from deal sourcing to LP communications.",
            result: "300% increase in qualified deal flow"
        },
        {
            name: "Sarah Rodriguez",
            role: "Founder & CEO",
            company: "Scale Consulting Group",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b0c0?w=100&h=100&fit=crop&crop=face",
            message: "Working with Growth Catalyst was a game-changer. Their automation systems freed up 15 hours per week that I now spend on high-value client work instead of admin tasks.",
            result: "$200K ARR increase in 6 months"
        },
        {
            name: "David Kim",
            role: "Creative Director",
            company: "Apex Digital Agency",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            message: "The white-label partnership with Growth Catalyst allowed us to offer sophisticated automation services to our clients without building the expertise in-house. It's been incredibly profitable.",
            result: "150% profit margin improvement"
        }
    ];

    return (
        <div className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full">
            {clientTestimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                >
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                            <HiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                    </div>
                    
                    {/* Testimonial */}
                    <p className="text-gray-700 mb-6 text-center lg:text-left leading-relaxed">
                        &quot;{testimonial.message}&quot;
                    </p>
                    
                    {/* Result Highlight */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                        <p className="text-green-800 font-semibold text-sm text-center">
                            Result: {testimonial.result}
                        </p>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center w-full justify-center lg:justify-start">
                        <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={50}
                            height={50}
                            className="rounded-full shadow-md"
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                            <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
