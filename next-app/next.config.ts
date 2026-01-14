import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    trailingSlash: true,

    // CRITICAL FOR NETLIFY:
    output: 'standalone', // This is REQUIRED for Netlify deployment
    images: {
        unoptimized: true, // Required for Netlify, disables Next.js image optimization
    },

    // Add these experimental settings to prevent edge function issues:
    experimental: {
        // This helps prevent the Object.entries() error in Netlify's handler
        serverComponentsExternalPackages: [],
    },

    // Optional but helpful for debugging:
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;