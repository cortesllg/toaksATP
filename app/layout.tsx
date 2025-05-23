// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import GoogleTranslate from "./components/GoogleTranslate";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "City of Thousand Oaks Active Transportation Plan Update",
  description:
    "Official updates for the Thousand Oaks Active Transportation Plan.",
  icons: {
    icon: "images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Header with logo + Translation button on top right*/}
        <header className="hero">
          <div className="translate-button">
            <GoogleTranslate />
          </div>
          <Link href="/">
            <img
              src="/images/ATP 2025@1080x-100.jpg"
              alt="City of Thousand Oaks Logo"
            />
          </Link>
        </header>

        {/* Navigation buttons */}
        <nav className="button-container">
          <Link href="/" className="cta-button">
            <span>HOME</span>
            <div className="cta-description">Home page</div>
          </Link>
          <Link href="/get-involved" className="cta-button">
            <span>GET INVOLVED</span>
            <div className="cta-description">Share your input with us</div>
          </Link>
          <Link href="/project-status" className="cta-button">
            <span>PROJECT STATUS</span>
            <div className="cta-description">Project Overview and Events</div>
          </Link>
          <Link href="/documentation" className="cta-button">
            <span>DOCUMENTATION</span>
            <div className="cta-description">Available Documentation</div>
          </Link>
          <Link href="/contact-us" className="cta-button">
            <span>CONTACT US</span>
            <div className="cta-description">Get in Touch, Send a Message</div>
          </Link>
        </nav>

        {/* Main content area */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img
                src="/images/ATP 2025@1080x.png"
                alt="City of Thousand Oaks"
              />
            </div>
            <div className="footer-links">
              <div>
                <h3>Get in Touch</h3>
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/get-involved">Get Involved</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Send a Message</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>Explore</h3>
                <ul>

                  <li>
                    <Link href="/project-status">Project Events</Link>
                  </li>
                  <li>
                    <Link href="/documentation">Project Information</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-contact">
              <h3>
                Thousand Oaks City Hall
                <br />
                2100 Thousand Oaks Blvd.
                <br />
                Thousand Oaks, CA 91362
              </h3>
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/CityofThousandOaks/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/cityofthousandoaks/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com/cityofthousandoaks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube size={24} />
                </a>
                <a
                  href="https://x.com/cityofto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
