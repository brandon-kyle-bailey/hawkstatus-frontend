/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pbs.twimg.com",
      },
      {
        hostname: "www.stripe.com",
      },
      {
        hostname: "www.google.com",
      },
      {
        hostname: "google.com",
      },
      {
        hostname: "github.com",
      },
      {
        hostname: "www.github.com",
      },
      {
        hostname: "www.oracle.com",
      },
      {
        hostname: "news.ycombinator.com"
      },
      {
        hostname: "m.twitch.tv"
      }
    ],
  },
};

module.exports = nextConfig;
