/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'upload.wikimedia.org', 'www.hubspot.com'],
    },
    eslint: {
        ignoreDuringBuilds: false, // Keep ESLint enabled but disable specific rules
    },
    // disable react/no-unescaped-entities
    reactStrictMode: false,
};

export default nextConfig;
