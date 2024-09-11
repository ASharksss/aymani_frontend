/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.aimani.org',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
