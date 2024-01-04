/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/discord",
                destination: "https://discord.gg/yx3gkv6Why",
                permanent: false,
            },
            {
                source: "/github",
                destination: "https://github.com/knaughtslabs",
                permanent: false,
            },
            {
                source: "/invite",
                destination:
                    "https://discord.com/api/oauth2/authorize?client_id=1155474054803886100&permissions=2147576832&scope=bot",
                permanent: false,
            },
            {
                source: "/twitter",
                destination: "https://x.com/knaughtsbot",
                permanent: false,
            },
        ];
    },
};

module.exports = nextConfig;
