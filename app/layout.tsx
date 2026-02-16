import type { Metadata } from 'next';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = {
	title: 'Crème de la Crème Patisserie',
	icons: {
		icon: '/favicon.ico',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
				<style dangerouslySetInnerHTML={{ __html: `
          body { font-family: 'Poppins', sans-serif; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Playfair Display', serif; }
        `}} />
			</head>
			<body>
				<Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
				{children}
			</body>
		</html>
	);
}


