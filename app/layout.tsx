import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Sakib Nahid",
    default: "Sakib Nahid developer portfolio",
  },
  description: "Website of Sakib Nahid, a software engineer and web developer.",
  openGraph: {
    title: "Sakib Nahid",
    description:
      "Website of Sakib Nahid, a software engineer and web developer.",
    url: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased max-w-7xl mx-auto px-8`}>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
