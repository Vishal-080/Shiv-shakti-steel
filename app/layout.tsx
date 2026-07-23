import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shiv Shakti Steel | Jaipur's trusted steel partner",
  description:
    "Compare live TMT bar quotes, cement, wire and construction materials from Shiv Shakti Steel in Jaipur.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
