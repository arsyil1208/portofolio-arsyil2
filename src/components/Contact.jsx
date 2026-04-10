export default function Contact() {
  return (
    <section id="contact" className="container py-5 d-flex justify-content-center">

      <div
        className="text-center px-4 py-5"
        style={{
          maxWidth: "700px",
          width: "100%",
          borderRadius: "28px",

          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",

          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: "0 10px 40px rgba(0,0,0,0.25)",

          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >

        {/* TITLE */}
        <h2
          className="fw-semibold mb-3"
          style={{ color: "#0f172a" }}
        >
          Contact
        </h2>

        {/* EMAIL */}
        <p
          style={{
            color: "#334155",
            fontSize: "16px",
          }}
        >
          arsyil1208@gmail.com | WhatsApp
        </p>

        {/* BUTTON WA */}
        <a
          href="https://wa.me/6287777160675"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-block fw-semibold px-4 py-2 mt-3 text-decoration-none"
          style={{
            borderRadius: "999px",

            // 🔵 PRIMARY (Bootstrap)
            background: "#0d6efd",
            color: "white",

            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
            e.target.style.background = "#0b5ed7"; // hover lebih gelap
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
            e.target.style.background = "#0d6efd";
          }}
        >
          Send Message
        </a>

      </div>

    </section>
  );
}