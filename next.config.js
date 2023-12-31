/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
           {
            protocol: 'https',
            hostname: 's3-ca-central-1.amazonaws.com'
           },
           {
            protocol: 'https',
            hostname: 'www.bwalk.com'
           },
           {
            protocol: 'https',
            hostname: 'www.brookfieldresidential.com'
           },
           {
            protocol: 'https',
            hostname: 'media-cdn.tripadvisor.com'
           },
           {
            protocol: 'https',
            hostname: 'calgary.newinfills.ca'
           },
        
        ],
    },
}

module.exports = nextConfig
