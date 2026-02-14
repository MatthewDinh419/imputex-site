import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="snap-section">
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          marginBottom: "1rem",
        }}
      >
        Contact
      </h2>
      <p style={{ marginBottom: "0.5rem", color: "#333" }}>
        Reach us at{" "}
        <a
          href="mailto:mdinh@imputex.com"
          style={{ color: "#0066cc", textDecoration: "underline" }}
        >
          mdinh@imputex.com
        </a>
        .
      </p>
      <p style={{ fontSize: "0.9375rem", color: "#666" }}>
        For business inquiries and support, use the email above. We typically
        respond within one business day.
      </p>
    </section>
  );
}
