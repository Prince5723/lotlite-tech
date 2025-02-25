import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "example.com",
      },
    ],
    domains: ["aceternity.com", "images.unsplash.com", "assets.aceternity.com", "plus.unsplash.com", "lotlitetechnology.com", "unsplash.com", "media.istockphoto.com", "images.pexels.com", "venturebeat.com", "res.cloudinary.com", "imcinstitute.ae", "d3mxt5v3yxgcsr.cloudfront.net", "encrypted-tbn0.gstatic.com"],
  },
};

export default nextConfig;
