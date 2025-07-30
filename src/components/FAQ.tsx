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
            question: "How quickly will I see results?",
            answer: "Most clients see immediate improvements in lead quality within the first 30 days. By month 3, you'll have measurable increases in qualified opportunities and revenue pipeline. The full Growth Catalyst System delivers 300%+ ROI typically within 6-12 months, with many clients seeing returns much sooner."
        },
        {
            question: "What makes this different from other agencies or consultants?",
            answer: "We don't just build websites or run ads. The Growth Catalyst System is a complete business transformation that automates your entire customer journey. While others focus on tactics, we architect systems that work 24/7 to generate, qualify, and convert leads without constant management. Plus, you own everything we build."
        },
        {
            question: "Is this really worth £25,000?",
            answer: "Consider this: if our system generates just 5 additional high-value clients per year (typical results show 10-20+), the investment pays for itself many times over. Our average client sees £200K-500K in additional revenue within the first year. The real question is: what's the cost of NOT having a predictable growth system?"
        },
        {
            question: "What if I'm not tech-savvy? Can I manage these systems?",
            answer: "Absolutely. We build everything to be simple and user-friendly. You'll get comprehensive training, detailed documentation, and 90 days of optimization support. Most clients find our systems easier to manage than their previous manual processes. Plus, we handle all the technical complexity behind the scenes."
        },
        {
            question: "How do I know this will work for MY specific business?",
            answer: "That's exactly what we determine in your free strategy session. We'll audit your current situation, identify your biggest growth bottlenecks, and create a custom roadmap. We only take on clients where we're confident we can deliver exceptional results. If we're not the right fit, we'll tell you upfront."
        },
        {
            question: "What if I need changes or have issues after launch?",
            answer: "You get 90 days of included optimization and support, plus we offer ongoing maintenance retainers. We're invested in your long-term success, not just a one-time project. Our support team is responsive, and we continuously refine your systems based on performance data and your evolving needs."
        },
        {
            question: "Why shouldn't I just hire someone internally or use cheaper alternatives?",
            answer: "Building this expertise internally takes years and costs far more when you factor in salaries, tools, training, and mistakes. Cheaper alternatives often create more problems than they solve. You get immediate access to our team's years of experience and proven systems that have generated millions in client revenue."
        },
        {
            question: "How do I get started?",
            answer: "Book your free strategy session below. We'll analyze your business, identify your biggest opportunities, and show you exactly how the Growth Catalyst System would transform your operations. There's no obligation, and you'll walk away with valuable insights regardless of whether we work together."
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