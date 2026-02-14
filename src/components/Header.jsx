import React from "react";

const NAV_ANCHORS = [
  { label: "About", href: "#about" },
  { label: "App", href: "#app" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: "var(--header-height)",
        backgroundColor: "rgba(255,255,255,0.95)",
        borderBottom: "1px solid #e5e5e5",
        padding: "0.75rem 1.5rem",
      }}
    >
      <nav
        style={{
          maxWidth: 960,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ fontWeight: 700, fontSize: "1.125rem" }}>
          Imputex LLC
        </a>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1.5rem",
          }}
        >
          {NAV_ANCHORS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                style={{
                  color: "#444",
                  fontSize: "0.9375rem",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
