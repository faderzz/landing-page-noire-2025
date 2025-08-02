import { ImageResponse } from 'next/og'
import { siteDetails } from '@/data/siteDetails'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = `${siteDetails.siteName} - ${siteDetails.company.description}`
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
          color: 'white',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '80px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              width: '80px',
              height: '80px',
              background: '#7c3aed',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              fontSize: '36px',
              fontWeight: 'bold',
            }}
          >
            N
          </div>
          
          {/* Main headline */}
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 24px 0',
              lineHeight: '1.1',
            }}
          >
            {siteDetails.siteName}
          </h1>
          
          {/* Subheadline */}
          <p
            style={{
              fontSize: '36px',
              margin: '0 0 32px 0',
              opacity: 0.9,
              maxWidth: '800px',
              lineHeight: '1.3',
            }}
          >
            {siteDetails.company.description}
          </p>
          
          {/* Value proposition */}
          <p
            style={{
              fontSize: '24px',
              margin: 0,
              opacity: 0.7,
              maxWidth: '600px',
            }}
          >
            Unlock Predictable Growth in 90 Days • Trusted by 50+ Businesses • £10M+ Revenue Generated
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
