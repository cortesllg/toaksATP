import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  isMobile: boolean;
}

const Contact = ({ isMobile }: ContactProps) => {
  const form = useRef<HTMLFormElement>(null);
  // details regarding emailjs services have been partially removed
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_ay73hxk",
        "template_m5kfvif",
        form.current,
        "nGDyKMmDutAYPKxKK",
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsModalOpen(true); // Open the Thank You popup
          form.current?.reset(); // Reset form
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again later.");
        },
      );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
        position: "relative",
      }}
    >
      {/* Intro Text */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "justify",
          lineHeight: "1.75",
        }}
      >
        Thank you for reaching out! The online comment period officially closed
        on <span style={{ fontWeight: "bold", color: "red" }}>March 14th</span>.
        We appreciate your feedback and interest in improving transportation
        safety in the City of Thousand Oaks. Your input helps us build a better,
        safer community for everyone. The revised Active Transportation Plan
        will be presented to the City Council on March 24, 2026.{" "}
      </p>

      {/* Contact Form Section would go below*/}
    </div>
  );
};

export default Contact;
