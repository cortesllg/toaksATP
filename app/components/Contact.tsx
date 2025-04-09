interface ContactProps {
  isMobile: boolean;
}

const Contact = ({ isMobile }: ContactProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        maxWidth: "100%",
        padding: isMobile ? "1rem" : "2rem",
      }}
    >
      {/* Intro Text */}
      <p
        style={{
          fontSize: isMobile ? "15px" : "16px",
          color: "#4b5563",
          fontWeight: 500,
          textAlign: "left",
          lineHeight: "1.75",
        }}
      >
        We'd love to hear from you! Please share your transportation safety
        concerns or general suggestions to help shape the future of active
        transportation in the City of Thousand Oaks.
      </p>

      {/* Contact Form */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {/* Name Field */}
        <input
          type="text"
          placeholder="Your Name"
          style={{
            padding: "0.75rem 1rem",
            fontSize: "14px",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          style={{
            padding: "0.75rem 1rem",
            fontSize: "14px",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
          }}
        />

        {/* Message Field */}
        <textarea
          placeholder="Your Message or Suggestions"
          rows={12}
          style={{
            padding: "1rem",
            fontSize: "14px",
            border: "1px solid #d1d5db",
            borderRadius: "0.375rem",
            resize: "vertical",
          }}
        />

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "#007a33",
            color: "white",
            fontWeight: "bold",
            padding: "0.5rem 1.5rem",
            fontSize: "14px",
            borderRadius: "9999px",
            border: "none",
            cursor: "pointer",
            transition: "background-color 0.3s",
            textTransform: "uppercase",
            alignSelf: "center",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#005fa3")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#007a33")
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
