export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      
      <h2
        className="fw-semibold mb-4 text-center"
        style={{ color: "#0f172a" }}
      >
        Projects
      </h2>

      <div className="row g-4">

        {/* PROJECT 1 */}
        <div className="col-md-4">
          <div
            className="p-4 h-100"
            style={{
              borderRadius: "24px",
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            <h5 style={{ color: "#0f172a" }}>Wisata Bromo</h5>

            <p style={{ color: "#334155" }}>
              Website ini untuk mempromosikan wisata Bromo dengan desain modern dan interaktif.
            </p>

            <a
              href="https://github.com/arsyil11/laravel-wisata-bromo.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-semibold px-3 py-2 d-inline-block"
              style={{
                borderRadius: "999px",
                background: "#0d6efd",
                color: "white",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#0b5ed7";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#0d6efd";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View
            </a>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="col-md-4">
          <div
            className="p-4 h-100"
            style={{
              borderRadius: "24px",
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            <h5 style={{ color: "#0f172a" }}>Coney Island Recreations</h5>

            <p style={{ color: "#334155" }}>
              Website ini untuk mengunjungi tempat rekreasi di Coney Island dan bisa membeli tiket lewat website ini.
            </p>

            <a
              href="https://github.com/arsyil1208/rekreasi.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-semibold px-3 py-2 d-inline-block"
              style={{
                borderRadius: "999px",
                background: "#0d6efd",
                color: "white",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#0b5ed7";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#0d6efd";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View
            </a>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="col-md-4">
          <div
            className="p-4 h-100"
            style={{
              borderRadius: "24px",
              background: "rgba(255,255,255,0.25)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)";
            }}
          >
            <h5 style={{ color: "#0f172a" }}>Kode Pos Daerah Indonesia</h5>

            <p style={{ color: "#334155" }}>
              Platform pencarian kode pos Indonesia yang cepat, praktis, dan akurat berdasarkan lokasi yang Anda cari.
            </p>
            <a
              href="https://kode-pos-daerah-indonesia.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none fw-semibold px-3 py-2 d-inline-block"
              style={{
                borderRadius: "999px",
                background: "#0d6efd",
                color: "white",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#0b5ed7";
                e.target.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "#0d6efd";
                e.target.style.transform = "translateY(0)";
              }}
            >
              View
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}