/** @type {import('next').NextConfig} */

const { createSecureHeaders } = require("next-secure-headers");
const path = require("path");
const fs = require("fs");

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["s.gravatar.com"]
    },
    env: {
        siteTitle: "unboxxbusiness",
        siteDescription: "Join the challenge now for only 5k (or get free access with your NextSalesman AI trial)",
        siteKeywords: "wordpress tutorial, blogging, wordpress free course, wordpress affiliate marketing course, wordpress in hindi, wordpress hindi course, web design institue in noida, web design institute in delhi, web design course free, wordpress web design course",
        siteUrl: "https://unboxxbusiness.com",
        siteImagePreviewUrl: "/images/preview.jpeg",
        twitterHandle: "@unboxxbusiness"
    },
    headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    ...createSecureHeaders(),
                    // HSTS Preload: https://hstspreload.org/
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubDomains; preload"
                    }
                ]
            }
        ];
    }
};

module.exports = nextConfig;
