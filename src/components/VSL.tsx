'use client';
import React, { useState } from 'react';
import { HiPlay, HiEnvelope } from 'react-icons/hi2';
import { navigationLinks } from '@/data/navigation';

const VSL: React.FC = () => {
    const [showEmailCapture, setShowEmailCapture] = useState(false);
    const [email, setEmail] = useState('');

    const handleWatchLater = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle email capture logic here
        console.log('Email captured:', email);
        alert('Video will be sent to your email shortly!');
        setShowEmailCapture(false);
        setEmail('');
    };

    return (
        <section id="vsl" className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Headline */}
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                    How We Help Businesses Grow - in Just 3 Minutes
                </h2>

                {/* Video Container */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden mb-8 aspect-video">
                    {/* Video Placeholder - Replace with actual video embed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-purple-800">
                        <button 
                            className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors backdrop-blur-sm"
                            aria-label="Play video"
                        >
                            <HiPlay className="w-8 h-8 text-white ml-1" />
                        </button>
                    </div>
                    
                    {/* Video Overlay Text */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/60 rounded-lg p-4 backdrop-blur-sm">
                            <p className="text-white text-sm">
                                "How we helped 50+ businesses scale from £50K to £500K+ ARR"
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 Key Bullet Points */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-red-600 font-bold text-xl">1</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">The #1 Mistake</h3>
                        <p className="text-gray-600 text-sm">Holding 80% of businesses back from predictable growth</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-purple-600 font-bold text-xl">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">3-Step Framework</h3>
                        <p className="text-gray-600 text-sm">Our Growth Catalyst system that drives results</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-green-600 font-bold text-xl">3</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">90-Day Results</h3>
                        <p className="text-gray-600 text-sm">How to see measurable growth in the next 90 days</p>
                    </div>
                </div>

                {/* Watch Later Option */}
                <div className="border-t border-gray-200 pt-8">
                    {!showEmailCapture ? (
                        <button 
                            onClick={() => setShowEmailCapture(true)}
                            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
                        >
                            <HiEnvelope className="w-5 h-5" />
                            Watch Later - Send me the video
                        </button>
                    ) : (
                        <form onSubmit={handleWatchLater} className="max-w-md mx-auto">
                            <div className="flex gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Send Video
                                </button>
                            </div>
                            <p className="text-gray-500 text-sm mt-2">We'll send you the video link instantly. No spam, ever.</p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VSL;
