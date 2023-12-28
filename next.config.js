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
        siteKeywords: "startups,entrepreneurship india,entrepreneur,starting a business,start a business,Startups,tech,inspiration,indian entrepreneur,Business Trainings,Business Coach,how to form partnership firm,how to get loan from banks,how to get gst registration,gst registration,startup india,standup india,make in india,subsidy schemes to msme,government schemes for msme,how to start business in india,how to get loan for startup,",
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
