import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // eslint-disable-next-line @typescript-eslint/require-await
  async headers() {
    return [
      {
        source: "/about",
        headers: [
          {
            key: "referrer-policy",
            value: "no-referrer",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
