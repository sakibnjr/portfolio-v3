import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Sakib Nahid",
    default: "Md. Najmus Sakib Nahid — Full Stack Software Engineer",
  },
  description:
    "CSE Graduate — Full Stack Developer building modern web apps with React, Next.js & Node.js. Focused on clean code, great UX, and shipping products that matter.",
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
    <html lang="en" className="antialiased scroll-smooth">
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
      <body>{children}</body>
    </html>
  );
}
