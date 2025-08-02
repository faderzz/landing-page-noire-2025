export const siteDetails = {
    siteName: 'Noire',
    siteUrl: 'https://noire.agency/',
    metadata: {
        title: {
            default: 'Noire - Growth Catalyst System for High-Ticket Businesses',
            template: '%s | Noire - Growth Catalyst System'
        },
        description: 'Transform your business with Noire\'s Growth Catalyst System. Unlock predictable growth in 90 days through intelligent automation, AI integration, and bespoke digital ecosystems. Trusted by 50+ businesses generating £10M+ in revenue.',
        keywords: [
            'growth catalyst system',
            'business automation',
            'AI integration', 
            'digital transformation',
            'high-ticket agency',
            'business growth',
            'conversion optimization',
            'lead generation automation',
            'CRM integration',
            'bespoke software development'
        ],
    },
    language: 'en-GB',
    locale: 'en-GB',
    siteLogo: `${process.env.BASE_PATH || ''}/images/noire-logo.png`,
    googleAnalyticsId: '', // Add GA4 tracking ID when available
    author: 'Noire Agency',
    company: {
        name: 'Noire',
        description: 'Growth Catalyst System for High-Ticket Businesses',
        founder: 'James Martinez',
        established: '2020',
        location: 'London, UK'
    },
    contact: {
        email: 'hello@noire-agency.com',
        phone: '+44 20 1234 5678'
    },
    social: {
        twitter: '@NoireAgency',
        linkedin: 'company/noire-agency',
        instagram: '@noire.agency'
    }
}