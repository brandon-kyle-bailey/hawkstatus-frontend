/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pbs.twimg.com",
      },
      {
        hostname: "stripe.com",
      },
      {
        hostname: "google.com",
      },
      {
        hostname: "oracle.com",
      },
    ],
  },
};

module.exports = nextConfig;
