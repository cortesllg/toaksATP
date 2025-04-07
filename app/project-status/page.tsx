import Head from 'next/head';
import Link from 'next/link';

export default function ProjectStatus() {
  return (
    <div>
      <Head>
        <title>City of Thousand Oaks Active Transportation Plan Update</title>
        <meta name="description" content="City of Thousand Oaks Active Transportation Plan Update" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="image-container1">
        <img src="/images/Header Image.jpg" alt="Header Image" className="header-image" />
        <div className="overlay-text1">
          <div className="bg-heading">PROJECT STATUS</div>
          <div className="fg-subtitle">See what is ongoing with the improvements in the City of Thousand Oaks</div>
        </div>
      </div>
            
    </div>
  );
  }