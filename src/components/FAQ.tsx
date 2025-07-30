"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";

interface AgencyFAQ {
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const agencyFAQs: AgencyFAQ[] = [
        {
            question: "How long does it take to implement The Growth Catalyst System?",
            answer: "Implementation typically takes 90-120 days for the complete system. We break this into phases: Strategic Blueprint (2 weeks), Development & Setup (6-8 weeks), Testing & Optimization (2-3 weeks), and Launch & Training (1 week). You'll see measurable improvements within the first 30 days."
        },
        {
            question: "What kind of ROI can I expect from your services?",
            answer: "Our clients typically see 3-5x increases in qualified leads and 300-500% ROI within 6-12 months. However, results vary based on industry, current systems, and implementation scope. We provide detailed ROI projections during our strategy call based on your specific situation."
        },
        {
            question: "Do you work with businesses in my industry?",
            answer: "We specialize in working with Private Equity firms, high-ticket coaches/consultants, and digital agencies. Our Growth Catalyst System is designed to be industry-agnostic while addressing the unique challenges of scaling businesses. If you're outside these core areas, we'll assess fit during our strategy call."
        },
        {
            question: "What if I already have a website and existing systems?",
            answer: "We can work with your existing infrastructure. Our approach includes a comprehensive audit of your current systems, identifying what can be optimized versus what needs rebuilding. We'll create a migration plan that minimizes disruption while maximizing improvements."
        },
        {
            question: "Do you provide ongoing support after implementation?",
            answer: "Yes! All packages include ongoing optimization support (3-12+ months depending on your package). We also offer maintenance retainers for continuous monitoring, updates, and improvements. You'll have dedicated support channels and regular performance reviews."
        },
        {
            question: "How do you ensure the systems you build are secure and reliable?",
            answer: "Security and reliability are foundational to everything we build. We implement enterprise-grade security measures, regular backups, monitoring systems, and follow industry best practices. All systems include 99.9% uptime guarantees and 24/7 monitoring."
        }
    ];

    return (
        <section id="faq" className="py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="">
                    <p className="hidden lg:block text-gray-600">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-gray-600 text-center lg:text-left">
                        Have questions about The Growth Catalyst System?
                    </p>
                    <a href="mailto:hello@growthcatalyst.com" className="mt-3 block text-xl lg:text-4xl text-purple-600 font-semibold hover:underline text-center lg:text-left">hello@growthcatalyst.com</a>
                </div>

                <div className="w-full lg:max-w-2xl mx-auto border-b">
                    {agencyFAQs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                                            <span className="text-2xl font-semibold">{faq.question}</span>
                                            {open ? <BiMinus className="w-5 h-5 text-secondary" /> : <BiPlus className="w-5 h-5 text-secondary" />}
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-foreground-accent">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;