import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import portfolioData from "@/lib/config";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: `${portfolioData.name} — ${portfolioData.className}`,
	description: portfolioData.tagline,
	openGraph: {
		title: `${portfolioData.name} — ${portfolioData.className}`,
		description: portfolioData.tagline,
		type: "website",
	},
};

/**
 * Applies the saved theme before first paint so there is no flash of the
 * wrong palette, and flags that scroll animations are safe to run. Without
 * this flag every section renders visible, so the page survives no-JS.
 */
const BOOT_SCRIPT = `(function(){var d=document.documentElement;try{if(localStorage.getItem("vv-portfolio-theme")==="light"){d.dataset.theme="light"}}catch(e){}if("IntersectionObserver" in window){d.dataset.motion="on"}})()`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
