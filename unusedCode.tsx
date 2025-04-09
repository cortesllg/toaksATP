return (
  <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <div> Hello </div>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2 tracking-[-.01em]">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
            app/page.tsx
          </code>
          .
        </li>
        <li className="tracking-[-.01em]">
          Save and see your changes instantly.
        </li>
      </ol>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={20}
            height={20}
          />
          Deploy now
        </a>
        <a
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </main>
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Go to nextjs.org →
      </a>
    </footer>

    <section className="updates">
      <h2>Latest Updates</h2>
      <ul>
        <li>
          <strong>March 2025:</strong> Public meetings scheduled to discuss
          proposed improvements.
        </li>
        <li>
          <strong>February 2025:</strong> Completed the first phase of community
          feedback.
        </li>
        <li>
          <strong>January 2025:</strong> Initial draft of the updated plan is
          now available for review.
        </li>
      </ul>
    </section>

    <section className="call-to-action">
      <h2>Get Involved</h2>
      <p>
        We encourage residents to get involved in the planning process. Stay
        updated, provide feedback, and help shape the future of transportation
        in Thousand Oaks.
      </p>
      <Link href="/get-involved" className="cta-button">
        Learn How to Get Involved
      </Link>
    </section>

    {/* Left side - Survey redirect*/}
    <div className="survey-box">
      <h3 className="survey-title">Help Shape the Future</h3>
      <p className="survey-description">
        Your feedback is essential towards improvements in Thousand Oaks. Take
        our quick survey to share your thoughts!
      </p>
      {/* Survey component - still needs appropiate link */}
      <Link href="https://www.surveylink.com" passHref legacyBehavior>
        <a className="survey-button" target="_blank" rel="noopener noreferrer">
          Take the Survey
        </a>
      </Link>
    </div>

  
{
  /* Left Sidebar */
}
<aside
  style={{
    flex: isMobile ? "unset" : "0 0 18%",
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    gap: "1rem",
    textTransform: "uppercase",
    padding: "1rem 1rem",
  }}
>
  <h1
    style={{
      fontSize: "20px",
      fontWeight: "bold",
      color: "#007a33",
      marginBottom: "1rem",
    }}
  >
    How to Participate
  </h1>
  {participationItems.map((item, index) => (
    <div
      key={index}
      onClick={() => setActiveSection(item.section)}
      style={{
        color: activeSection === item.section ? "#003f7d" : "#005fa3",
        fontWeight: activeSection === item.section ? "600" : "400",
        fontSize: "14px",
        cursor: "pointer",
        transition: "color 0.2s",
      }}
      onMouseOver={(e) =>
        ((e.target as HTMLDivElement).style.color = "#003f7d")
      }
      onMouseOut={(e) =>
        ((e.target as HTMLDivElement).style.color =
          activeSection === item.section ? "#003f7d" : "#005fa3")
      }
    >
      {item.label}
    </div>
  ))}
</aside>;
  
  </div>
);


// ORIGINAL TSX FOR get-involved/page.tsx

// "use client";

// import Head from "next/head";
// import { useState, useEffect } from "react";

// import InvolvedIntro from "../components/InvolvedIntro";
// import Engagement from "../components/Engagement";
// import Survey from "../components/Survey";
// import Workshop from "../components/Workshop";
// import Contact from "../components/Contact";

// import "./get-involved.css";

// export default function GetInvolved() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [activeSection, setActiveSection] = useState("InvolvedIntro");

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const participationItems = [
//     { label: "Get Started", section: "InvolvedIntro" },
//     { label: "Engagement Platform", section: "Engagement" },
//     { label: "Online Survey", section: "Survey" },
//     { label: "Public Workshops", section: "Workshop" },
//     { label: "Contact Us", section: "Contact" },
//   ];

//   const pollOptions = [
//     "People driving too fast",
//     "Drivers not yielding or stopping at intersections",
//     "Distracted driving",
//     "Lack of connected sidewalks/bike paths",
//     "Poor maintenance of sidewalks/bike paths",
//     "Lack of crosswalks",
//     "Lack of protected bike lanes",
//     "Lack of lighting",
//     "Poor visibility at intersections",
//     "Lack of traffic violation enforcement",
//     "Potholes",
//     "Other (please specify)",
//   ];

//   return (
//     <div>
//       <Head>
//         <title>City of Thousand Oaks Active Transportation Plan Update</title>
//         <meta
//           name="description"
//           content="City of Thousand Oaks Active Transportation Plan Update"
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="image-container1">
//         <img
//           src="/images/Header Image.jpg"
//           alt="Header Image"
//           className="header-image"
//         />
//         <div className="overlay-text1">
//           <div className="bg-heading">GET INVOLVED</div>
//           <div className="fg-subtitle">
//             Learn how you can get involved with improvements in your city
//           </div>
//         </div>
//       </div>

//       {/* Main Section */}
//       <div
//         style={{
//           display: "flex",
//           flexDirection: isMobile ? "column" : "row",
//           maxWidth: "80%",
//           alignContent: "center",
//           marginTop: "3rem",
//           padding: "3rem 3rem",
//           gap: "2rem",
//         }}
//       >
//         {/* Left Sidebar */}
//         <aside
//           style={{
//             flex: isMobile ? "unset" : "0 0 18%",
//             display: "flex",
//             flexDirection: "column",
//             fontSize: "14px",
//             gap: "1rem",
//             textTransform: "uppercase",
//             padding: "1rem 1rem",
//           }}
//         >
//           <h1
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               color: "#007a33",
//               marginBottom: "1rem",
//             }}
//           >
//             How to Participate
//           </h1>
//           {participationItems.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveSection(item.section)}
//               style={{
//                 color: activeSection === item.section ? "#003f7d" : "#005fa3",
//                 fontWeight: activeSection === item.section ? "600" : "400",
//                 fontSize: "14px",
//                 cursor: "pointer",
//                 transition: "color 0.2s",
//               }}
//               onMouseOver={(e) =>
//                 ((e.target as HTMLDivElement).style.color = "#003f7d")
//               }
//               onMouseOut={(e) =>
//                 ((e.target as HTMLDivElement).style.color =
//                   activeSection === item.section ? "#003f7d" : "#005fa3")
//               }
//             >
//               {item.label}
//             </div>
//           ))}
//         </aside>
//         {/* Center Content */}
//         <main
//           style={{
//             flex: isMobile ? "unset" : "0 0 60%",
//             backgroundColor: "white",
//             padding: "2rem",
//             display: "flex",
//             flexDirection: "column",
//             gap: "1.5rem",
//           }}
//         >
//           {/* Title */}
//           <h1
//             style={{
//               fontSize: "28px",
//               fontWeight: "700",
//               color: "#007a33",
//               textTransform: "uppercase",
//               margin: 0,
//               textAlign: "center",
//             }}
//           >
//             Share Your Thoughts
//           </h1>
//           {/* Divider */}
//           <hr
//             style={{
//               border: "none",
//               borderTop: "3px double #d1d5db",
//               width: "60%",
//               margin: "0 auto",
//             }}
//           />
//           {activeSection === "InvolvedIntro" && (
//             <InvolvedIntro isMobile={isMobile} />
//           )}
//           {activeSection === "Engagement" && <Engagement isMobile={isMobile} />}
//           {activeSection === "Survey" && <Survey isMobile={isMobile} />}
//           {activeSection === "Workshop" && <Workshop isMobile={isMobile} />}
//           {activeSection === "Contact" && <Contact isMobile={isMobile} />}
//         </main>

//         {/* Right Sidebar */}
//         <aside
//           style={{
//             flex: isMobile ? "unset" : "0 0 22%",
//             backgroundColor: "white",
//             padding: "2rem",
//             fontSize: "14px",
//           }}
//         >
//           <h3
//             style={{
//               fontSize: "20px",
//               fontWeight: "bold",
//               color: "#313F58",
//               textAlign: "center",
//               textTransform: "uppercase",
//               textDecoration: "underline",
//               textUnderlineOffset: "4px",
//               marginBottom: "1rem",
//             }}
//           >
//             Quick Poll
//           </h3>

//           <p
//             style={{
//               marginBottom: "1.5rem",
//               color: "#4b5563",
//               fontSize: "16px",
//               fontWeight: "bold",
//               lineHeight: "1.5",
//               textAlign: "left",
//             }}
//           >
//             What do you think are the top three (3) issues affecting your safety
//             in Thousand Oaks?
//           </p>

//           {/* Poll Form */}
//           <form
//             style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
//           >
//             {pollOptions.map((option, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   fontWeight: "500",
//                   color: "#005fa3",
//                   cursor: "pointer",
//                   transition: "color 0.2s",
//                 }}
//                 onMouseOver={(e) =>
//                   ((e.target as HTMLDivElement).style.color = "#003f7d")
//                 }
//                 onMouseOut={(e) =>
//                   ((e.target as HTMLDivElement).style.color = "#313F58")
//                 }
//               >
//                 <input
//                   type="checkbox"
//                   id={`option-${index}`}
//                   name="safety-concerns"
//                   style={{
//                     width: "18px",
//                     height: "18px",
//                     marginRight: "0.75rem",
//                     border: "1.5px solid #d1d5db",
//                     borderRadius: "0.25rem",
//                     appearance: "none",
//                     accentColor: "#16a34a",
//                   }}
//                 />
//                 <label
//                   htmlFor={`option-${index}`}
//                   style={{
//                     fontSize: "14px",
//                     color: "#313F58",
//                     margin: 0,
//                     cursor: "pointer",
//                   }}
//                 >
//                   {option}
//                 </label>
//               </div>
//             ))}

//             {/* Submit Button */}
//             <div style={{ paddingTop: "1.5rem", textAlign: "center" }}>
//               <button
//                 type="submit"
//                 style={{
//                   backgroundColor: "#007a33",
//                   color: "white",
//                   fontWeight: "bold",
//                   padding: "0.5rem 1.5rem",
//                   fontSize: "14px",
//                   borderRadius: "9999px",
//                   border: "none",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s",
//                   textTransform: "uppercase",
//                   alignSelf: "center",
//                 }}
//                 onMouseOver={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#005fa3")
//                 }
//                 onMouseOut={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#007a33")
//                 }
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </aside>
//       </div>
//     </div>
//   );
// }


// <aside
// style={{
//   flex: isMobile ? "unset" : "0 0 22%",
//   backgroundColor: "white",
//   padding: "1rem 1rem",
//   fontSize: "14px",
//   alignSelf: "flex-start",
// }}
// >
// <h3
//   className="sidebar-title"
//   style={{
//     textDecoration: "underline",
//     textAlign: "center",
//     color: "#007a33",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     marginBottom: "1rem",
//   }}
// >
//   Help Shape the Future
// </h3>

// <p
//   style={{
//     marginBottom: "1.5rem",
//     color: "#4b5563",
//     fontSize: "16px",
//     fontWeight: "bold",
//     lineHeight: "1.5",
//     textAlign: "left",
//   }}
// >
//   Your feedback is essential towards making improvements in Thousand
//   Oaks. Take our quick survey to share your thoughts!
// </p>

// <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
//   <Link href="https://www.surveylink.com" passHref legacyBehavior>
//     <a
//       style={{
//         backgroundColor: "#007a33",
//         color: "white",
//         fontWeight: "bold",
//         padding: "0.5rem 1.5rem",
//         fontSize: "14px",
//         borderRadius: "9999px",
//         border: "none",
//         cursor: "pointer",
//         transition: "background-color 0.3s",
//         textTransform: "uppercase",
//         textDecoration: "none",
//         display: "inline-block",
//       }}
//       target="_blank"
//       rel="noopener noreferrer"
//       onMouseOver={(e) =>
//         (e.currentTarget.style.backgroundColor = "#005fa3")
//       }
//       onMouseOut={(e) =>
//         (e.currentTarget.style.backgroundColor = "#007a33")
//       }
//     >
//       Take the Survey
//     </a>
//   </Link>
// </div>

// </aside>