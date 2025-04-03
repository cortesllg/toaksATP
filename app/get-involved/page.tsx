import Head from 'next/head';
import Link from 'next/link';

export default function GetInvolved() {
  return (
    <div>
      <Head>
        <title>City of Thousand Oaks Active Transportation Plan Update</title>
        <meta name="description" content="City of Thousand Oaks Active Transportation Plan Update" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-container">
        <img src="/images/header-image-from-site.jpg" alt="Header Image" className="header-image" />
        <div className="overlay-text">
          <h2>GET INVOLVED</h2>
          <p className="p2">Learn how you can get involved with improvements in your city</p>
        </div>
      </div>
      
    </div>
  );
  }