// layout.tsx
import type { Metadata } from "next";
import "./globals.css";  // Keep the global CSS import for other styles.
import Link from "next/link";

export const metadata: Metadata = {
  title: "City of Thousand Oaks Active Transportation Plan Update",
  description: "Official updates for the Thousand Oaks Active Transportation Plan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}