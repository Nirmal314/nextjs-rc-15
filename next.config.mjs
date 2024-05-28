/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        ppr: 'incremental',
        after: true,
        reactCompiler: true
    },
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'via.placeholder.com',
        }]
    }
};

export default nextConfig;
