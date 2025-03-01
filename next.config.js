import("./env.mjs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "utfs.io" },
    ],
  },

  experimental: {
    appDir: false, // Disables Edge runtime in the App Router
    //serverComponentsExternalPackages: ["@prisma/client"],
    runtime: "nodejs",
  },
};

module.exports = nextConfig;
