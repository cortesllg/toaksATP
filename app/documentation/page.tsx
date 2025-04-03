import Head from 'next/head';
import Link from 'next/link';

export default function Documentation() {
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
          <h2>INFORMATION AND DOCUMENTATION</h2>
          <p className="p2">Get a more in-depth view of what is being done</p>
        </div>
      </div>
      
    </div>
  );
  }