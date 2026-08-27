import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Sakib Nahid",
    default: "Sakib Nahid developer portfolio",
  },
  description: "Website of Sakib Nahid, a software engineer and web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body></body>
    </html>
  );
}
