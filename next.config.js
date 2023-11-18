/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ts8v2xbiemab19zt.public.blob.vercel-storage.com",
        port: "",
        pathname: "**/*",
        // So it just was the "/" at the beginning messing everything.
      },
    ],
  },
};

module.exports = nextConfig;
