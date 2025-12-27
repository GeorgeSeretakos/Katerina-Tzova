import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        unoptimized: true, // <-- no _ipx; <Image> behaves like <img>
    },
};

export default nextConfig;
