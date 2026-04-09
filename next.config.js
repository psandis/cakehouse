const basePath = process.env.NODE_ENV === 'production' ? '/cakehouse' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: 'export',
	basePath,
	env: {
		NEXT_PUBLIC_BASE_PATH: basePath,
	},
	images: {
		unoptimized: true,
	},
};

module.exports = nextConfig;


