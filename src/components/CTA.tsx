import React from 'react';
import { HiArrowRight, HiPhone } from 'react-icons/hi2';
import { navigationLinks } from '@/data/navigation';

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-purple-900 via-black to-purple-800">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,rgba(147,51,234,0.1),transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <div className="mb-6">
                            <span className="inline-flex items-center bg-purple-600/20 border border-purple-500/30 rounded-full px-4 py-2 text-sm text-purple-300">
                                Ready to Scale?
                            </span>
                        </div>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-3xl">
                            Transform Your Business with The Growth Catalyst System
                        </h2>

                        <p className="mx-auto max-w-2xl md:px-5 text-gray-300 text-lg mb-8">
                            Join 50+ successful businesses who've revolutionized their operations, automated their growth, and achieved remarkable results. Book your strategic assessment call today.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href={navigationLinks.bookCall} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 transition-colors text-lg">
                                <HiPhone className="w-5 h-5" />
                                Book Strategy Call
                                <HiArrowRight className="w-5 h-5" />
                            </a>
                            <a href={navigationLinks.caseStudiesPage} className="border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                                View Case Studies
                            </a>
                        </div>
                        
                        <p className="text-gray-400 text-sm mt-6">
                            No commitment required • 30-minute strategic assessment • Limited slots available
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA