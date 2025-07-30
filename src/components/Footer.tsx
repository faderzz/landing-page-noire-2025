import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

import { navigationLinks, companyInfo, contactInfo, socialLinks } from '@/data/navigation';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">N</span>
                        </div>
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {companyInfo.name}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {companyInfo.description}
                    </p>
                    <p className="mt-2 text-sm text-foreground-accent">
                        Founded {companyInfo.foundedYear} | Based in {companyInfo.address}
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href={navigationLinks.system} className="hover:text-foreground">The System</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={navigationLinks.services} className="hover:text-foreground">Services</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={navigationLinks.caseStudies} className="hover:text-foreground">Case Studies</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={navigationLinks.investment} className="hover:text-foreground">Investment</Link>
                        </li>
                        <li className="mb-2">
                            <Link href={navigationLinks.about} className="hover:text-foreground">About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                    <a href={`mailto:${contactInfo.email}`}  className="block text-foreground-accent hover:text-foreground mb-2">Email: {contactInfo.email}</a>

                    <a href={`tel:${contactInfo.phone}`} className="block text-foreground-accent hover:text-foreground mb-2">Phone: {contactInfo.phone}</a>

                    <p className="text-foreground-accent mb-4">{contactInfo.address}</p>

                    <div className="mt-5 flex items-center gap-5 flex-wrap">
                        {Object.keys(socialLinks).map(platformName => {
                            if (platformName && socialLinks[platformName as keyof typeof socialLinks]) {
                                return (
                                    <Link
                                        href={socialLinks[platformName as keyof typeof socialLinks]}
                                        key={platformName}
                                        aria-label={platformName}
                                    >
                                        {getPlatformIconByName(platformName)}
                                    </Link>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
