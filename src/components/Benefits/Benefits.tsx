import React from 'react';
import Image from 'next/image';
import { HiArrowRight, HiCheck, HiComputerDesktop, HiAcademicCap, HiUserGroup } from 'react-icons/hi2';

const Benefits: React.FC = () => {
    return (
        <>
            {/* Benefits Section */}
            <section className="bg-gray-50 py-20 mt-8 px-6 rounded-2xl">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                The Growth Catalyst System: Your Complete Digital Transformation Solution
                            </h2>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                                    Book Strategy Call
                                    <HiArrowRight className="w-4 h-4" />
                                </button>
                                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors">
                                    View System Modules
                                </button>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">
                                        Strategic Blueprint & Execution Architecture - comprehensive roadmap for your digital transformation.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">
                                        High-Performance Web & Brand System - custom websites engineered for maximum conversion.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">
                                        Intelligent Automation & AI Execution Flows - streamlined operations that run on autopilot.
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <HiCheck className="w-4 h-4 text-white" />
                                    </div>
                                    <p className="text-gray-700">
                                        Continuous System Optimization & Growth - ongoing monitoring and performance improvements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Content */}
                        <div className="relative lg:pl-8">
                            {/* Main Image */}
                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                                    alt="Designer working"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl object-cover w-full h-[500px]"
                                />
                            </div>
                            
                            {/* Mobile Feature Cards - Below image on mobile */}
                            <div className="mt-6 space-y-4 lg:hidden">
                                {/* Online Learning Card */}
                                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <HiComputerDesktop className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Online Learning</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                Engage in interactive, real-time sessions led by industry experts, ensuring in-depth understanding and instant feedback.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Hands-on Projects Card */}
                                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <HiAcademicCap className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Hands-on Projects</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                Apply your skills to real-world scenarios with practical assignments designed to enhance learning and portfolio building.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Dedicated Mentorship Card */}
                                <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <HiUserGroup className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-1">Dedicated Mentorship</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                Receive personalized guidance and support from experienced mentors to help you navigate challenges and achieve your learning goals.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* VSL Video Section */}
            <section className="w-full py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="relative w-full">
                        <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden">
                            {/* Video Placeholder - Replace with actual video */}
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z"/>
                                        </svg>
                                    </div>
                                    <p className="text-white text-lg font-medium">Play Video</p>
                                </div>
                            </div>
                            
                            {/* Uncomment and replace with actual video when ready */}
                            {/* 
                            <iframe 
                                className="w-full h-full"
                                src="YOUR_VIDEO_URL_HERE"
                                title="Course Overview Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Benefits