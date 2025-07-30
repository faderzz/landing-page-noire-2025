import React from 'react';
import Image from 'next/image';
import { HiStar, HiUsers, HiPlay } from 'react-icons/hi2';

const InstructorSection: React.FC = () => {
    return (
        <section className="px-1 py-8">
            <div className="max-w-full">
                {/* Black rounded container with thin margin */}
                <div className="bg-black rounded-3xl px-6 md:px-36 py-12 md:py-20 mx-3">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                                    alt="James Martinez - UI/UX Design Instructor"
                                    width={400}
                                    height={400}
                                    className="rounded-2xl object-cover w-[400px] h-[400px]"
                                />
                            </div>
                        </div>

                        {/* Right - Content */}
                        <div className="text-white">
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                                Meet James Martinez
                            </h2>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                James Martinez is a seasoned UI/UX designer and educator with over a 
                                decade of experience creating intuitive, user-centered designs for top global 
                                brands.
                            </p>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Passionate about teaching, James has guided thousands of students toward 
                                mastering the craft of UI/UX design, combining practical techniques with 
                                industry insights.
                            </p>

                            {/* Stats */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <HiStar className="w-5 h-5 text-purple-400" />
                                    <span className="text-white font-medium">4.5 Instructor Rating</span>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <HiUsers className="w-5 h-5 text-blue-400" />
                                    <span className="text-white font-medium">316,195 Students</span>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    <HiPlay className="w-5 h-5 text-purple-400" />
                                    <span className="text-white font-medium">5 Courses</span>
                                </div>
                            </div>

                            {/* Brands Educated */}
                            <div>
                                <p className="text-gray-400 text-sm font-medium mb-4 tracking-wider uppercase">
                                    Brands Educated
                                </p>
                                <div className="flex items-center gap-8 opacity-60">
                                    {/* Logo placeholders - you can replace with actual brand logos */}
                                    <div className="text-white font-bold text-lg">logoipsum</div>
                                    <div className="text-white font-bold text-lg">logoipsum</div>
                                    <div className="text-white font-bold text-lg">logoip</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
