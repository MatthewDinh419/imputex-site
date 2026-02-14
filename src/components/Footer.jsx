import React from "react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div
      className="snap-section"
      style={{
        borderTop: "1px solid #e5e5e5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <footer
        style={{
          padding: "1.5rem 1.5rem",
          textAlign: "center",
          fontSize: "0.875rem",
          color: "#666",
        }}
      >
        <p>Imputex LLC</p>
        <p style={{ marginTop: "0.25rem" }}>Software development</p>
        <p style={{ marginTop: "0.25rem" }}>&copy; {currentYear}</p>
      </footer>
    </div>
  );
}
