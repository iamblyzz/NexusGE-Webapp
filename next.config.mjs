/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the "X-Powered-By: Next.js" header — no reason to advertise the stack
  poweredByHeader: false,

  // Strict mode surfaces double-invocation bugs during development
  reactStrictMode: true,

  // Static fallback security headers for routes the middleware matcher may skip.
  // The middleware layer is the primary enforcement point; these are a safety net.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
