import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HawkStatus - Simple Uptime Monitoring",
  description:
    "Ensure uninterrupted website performance with HawkStatus, the leading uptime monitoring tool. Real-time monitoring, free uptime monitoring, instant alerts, and performance insights to keep your online presence at its best. Stay ahead with HawkStatus! simple uptime monitoring",
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
