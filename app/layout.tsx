// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
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
        {/* Header with logo */}
        <header className="hero">
          <img src="/images/city-header-logo.jpg" alt="City of Thousand Oaks Logo" />
        </header>

        {/* Navigation buttons */}
        <nav className="button-container">
          <Link href="/" className="cta-button">
            <span>HOME</span>
            <div className="cta-description">Home page</div>
          </Link>
          <Link href="/pages/get-involved" className="cta-button">
            <span>GET INVOLVED</span>
            <div className="cta-description">Share your input with us</div>
          </Link>
          <Link href="/pages/project-status" className="cta-button">
            <span>PROJECT STATUS</span>
            <div className="cta-description">Project Overview and Events</div>
          </Link>
          <Link href="/pages/documentation" className="cta-button">
            <span>DOCUMENTATION</span>
            <div className="cta-description">Available Documentation</div>
          </Link>
          <Link href="/pages/contact-us" className="cta-button">
            <span>CONTACT US</span>
            <div className="cta-description">Get in Touch, Send a Message</div>
          </Link>
        </nav>

        {/* Main content area */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <p>&copy; 2025 City of Thousand Oaks. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}