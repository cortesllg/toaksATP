import Image from "next/image";

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>City of Thousand Oaks Active Transportation Plan Update</title>
        <meta name="description" content="City of Thousand Oaks Active Transportation Plan Update" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <header className="hero">
        <img src="/images/city-header-logo.jpg" alt="City of Thousand Oaks Logo" />
      </header>

      {/* Container for the buttons */}
      <div className="button-container">
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
      </div>

      <div className="image-container">
        <img src="/images/header-image-from-site.jpg" alt="Header Image" className="header-image" />
        <div className="overlay-text">
          <h2>CITY OF THOUSAND OAKS ACTIVE TRANSPORTATION PLAN UPDATE</h2>
          <p className="p2">Get involved by sharing your input!</p>
        </div>
      </div>
      
        <section className="intro">
          <h2>About the Plan</h2>
          <p>The Active Transportation Plan (ATP) for Thousand Oaks aims to improve transportation options for pedestrians, cyclists, and other non-motorized forms of transportation. We're updating the plan to create a more sustainable, safe, and connected community.</p>
        </section>

        <section className="updates">
          <h2>Latest Updates</h2>
          <ul>
            <li>
              <strong>March 2025:</strong> Public meetings scheduled to discuss proposed improvements.
            </li>
            <li>
              <strong>February 2025:</strong> Completed the first phase of community feedback.
            </li>
            <li>
              <strong>January 2025:</strong> Initial draft of the updated plan is now available for review.
            </li>
          </ul>
        </section>

        <section className="call-to-action">
          <h2>Get Involved</h2>
          <p>We encourage residents to get involved in the planning process. Stay updated, provide feedback, and help shape the future of transportation in Thousand Oaks.</p>
          {/* Fix: Remove the <a> tag */}
          <Link href="/get-involved" className="cta-button">
            Learn How to Get Involved
          </Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 City of Thousand Oaks. All rights reserved.</p>
      </footer>
    </div>
  );
}
