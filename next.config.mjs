/** @type {import('next').NextConfig} */
const nextConfig = {
	// Configure pageExtensions to include md and mdx
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	// Optionally, add any other Next.js config below
	reactStrictMode: true,
	images: {
		// unoptimized: true
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'liu.se',
			},
			{
				hostname: '*',
			},
		],
	},
	trailingSlash: true
}

export default nextConfig;
