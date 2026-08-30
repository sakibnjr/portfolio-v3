import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: baseUrl ? new URL(baseUrl) : undefined,
  alternates: {
    canonical: "/",
  },
  title: {
    template: "%s | Md. Najmus Sakib Nahid",
    default: "Md. Najmus Sakib Nahid — Software Engineer",
  },
  description:
    "CSE Graduate — Software Engineer building modern web apps with React, Next.js & Node.js. Focused on clean code, great UX, and shipping products that matter.",
  keywords: [
    "Sakib Nahid",
    "Md Najmus Sakib Nahid",
    "Md. Najmus Sakib Nahid",
    "Sakib Nahid developer",
    "Sakib Nahid web developer",
    "developer in Dhaka",
    "Developer in Joypurhat",
    "Full Stack Developer Bangladesh",
    "Frontend Developer Dhaka",
    "Software Engineer Bangladesh",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "sakibnjr",
    "portfolio",
  ],
  authors: [
    { name: "Md. Najmus Sakib Nahid", url: "https://github.com/sakibnjr" },
  ],
  creator: "Md. Najmus Sakib Nahid",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Sakib Nahid Portfolio",
    title: "Md. Najmus Sakib Nahid — Full Stack Software Engineer",
    description:
      "CSE Graduate — Full Stack Developer building modern web apps with React, Next.js & Node.js. Focused on clean code, great UX, and shipping products that matter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Najmus Sakib Nahid — Full Stack Software Engineer",
    description:
      "CSE Graduate — Full Stack Developer building modern web apps with React, Next.js & Node.js.",
    creator: "@sakibnjr",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans antialiased scroll-smooth`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ZMZQ4QCRQK"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ZMZQ4QCRQK');
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
