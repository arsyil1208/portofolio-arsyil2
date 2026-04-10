import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed-top w-100 d-flex justify-content-center"
      style={{
        zIndex: 999,
        paddingTop: "12px",
      }}
    >
      <div
        className="container d-flex justify-content-between align-items-center px-4 py-2"
        style={{
          maxWidth: "900px",
          borderRadius: "22px",

          background: scrolled
            ? "rgba(255, 255, 255, 0.65)"
            : "rgba(255, 255, 255, 0.4)",

          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",

          border: "1px solid rgba(255,255,255,0.6)",

          boxShadow: scrolled
            ? "0 10px 30px rgba(0,0,0,0.12)"
            : "0 6px 20px rgba(0,0,0,0.08)",

          transition: "all 0.4s ease",
        }}
      >
        {/* LOGO */}
        <h6
          className="fw-semibold mb-0"
          style={{
            color: "#111827",
            letterSpacing: "0.5px",
          }}
        >
          Arsyil.dev
        </h6>

        {/* MENU */}
        <div className="d-flex align-items-center gap-4">
          {["About", "Projects", "Contact"].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-decoration-none fw-medium"
              style={{
                color: "#111827",
                fontSize: "14px",
                opacity: 0.7,
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = "1";
                e.target.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = "0.7";
                e.target.style.transform = "translateY(0)";
              }}
            >
              {item}
            </a>
          ))}

          {/* BUTTON */}
          <a
            href="#contact"
            className="text-decoration-none fw-semibold px-3 py-1"
            style={{
              borderRadius: "999px",
              background: "rgba(255,255,255,0.8)",
              color: "#111827",
              fontSize: "13px",
              border: "1px solid rgba(0,0,0,0.05)",
              backdropFilter: "blur(10px)",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,1)";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.8)";
              e.target.style.transform = "scale(1)";
            }}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}