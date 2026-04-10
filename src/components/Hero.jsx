export default function Hero() {
  return (
    <section className="vh-100 d-flex align-items-center justify-content-center text-center px-3">
      
      <div
        className="px-4 py-5"
        style={{
          borderRadius: "32px",
          maxWidth: "800px",

          background: "rgba(255,255,255,0.25)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",

          border: "1px solid rgba(255,255,255,0.35)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >

        {/* FOTO PROFIL */}
        <div className="mb-4 d-flex justify-content-center">
          <img
            src="/profil.jpeg" 
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "cover",
              borderRadius: "50%",

              border: "3px solid rgba(255,255,255,0.6)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",

              background: "rgba(255,255,255,0.3)",
              padding: "3px",
            }}
          />
        </div>

        {/* TITLE */}
        <h1
          className="fw-bold mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: "#0f172a",
          }}
        >
          Hi, I'm{" "}
          <span style={{ color: "#0A84FF" }}>
            De'Arsyil Putera Pertama
          </span>{" "}
          👋
        </h1>

        {/* SUBTITLE */}
        <p
          className="mb-4"
          style={{
            fontSize: "18px",
            color: "#334155",
          }}
        >
          Frontend Developer • Backend at SMK Wikrama Bogor
        </p>

        {/* BUTTON PRIMARY */}
        <button
          className="fw-semibold px-4 py-2"
          style={{
            borderRadius: "999px",

            background: "#0d6efd",
            border: "none",
            color: "white",

            boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#0b5ed7";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#0d6efd";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
          }}
        >
          Explore
        </button>

      </div>

    </section>
  );
}