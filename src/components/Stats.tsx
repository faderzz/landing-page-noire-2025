import React from 'react';
import { HiCurrencyDollar, HiUsers, HiClock } from 'react-icons/hi2';

const Stats: React.FC = () => {
    const agencyStats = [
        {
            icon: <HiCurrencyDollar className="w-8 h-8 text-purple-600" />,
            title: "$2M+",
            description: "Revenue generated for our clients through strategic automation and high-performance digital systems."
        },
        {
            icon: <HiUsers className="w-8 h-8 text-blue-600" />,
            title: "50+",
            description: "Successful digital transformations completed for PE firms, coaches, and growth-focused businesses."
        },
        {
            icon: <HiClock className="w-8 h-8 text-green-600" />,
            title: "60%",
            description: "Average operational cost reduction achieved through intelligent automation and system optimization."
        }
    ];

    return (
        <section id="stats" className="py-10 lg:py-20">
            <div className="grid sm:grid-cols-3 gap-8">
                {agencyStats.map((stat, index) => (
                    <div key={index} className="text-center sm:text-left max-w-md sm:max-w-full mx-auto">
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
                            {stat.icon}
                            {stat.title}
                        </h3>
                        <p className="text-gray-600">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats