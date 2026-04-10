export default function About() {
  return (
    <section id="about" className="container py-5 d-flex justify-content-center">

      <div
        className="p-5"
        style={{
          maxWidth: "900px",
          borderRadius: "24px",

          background: "rgba(255, 255, 255, 0.35)",

          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",

          border: "1px solid rgba(255,255,255,0.4)",

          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >

        {/* TITLE */}
        <h2
          className="fw-semibold mb-3"
          style={{
            color: "#0f172a",
            letterSpacing: "0.3px",
          }}
        >
          About Me
        </h2>

        {/* TEXT */}
        <p
          style={{
            color: "#334155",
            lineHeight: "1.7",
          }}
        >
          Saya adalah siswa dari SMK Wikrama Bogor dengan jurusan 
          Pengembangan Perangkat Lunak dan Gim (PPLG). 
          Saya memiliki minat yang besar di bidang pengembangan web, 
          baik sebagai frontend maupun backend developer.
        </p>

        <p
          style={{
            color: "#334155",
            lineHeight: "1.7",
          }}
        >
          Saya berpengalaman dalam membuat website menggunakan 
          teknologi seperti Laravel, React.js, dan HTML dasar. 
          Saya juga terus belajar untuk mengembangkan kemampuan saya 
          dalam membangun tampilan yang modern, responsif, dan interaktif.
        </p>

      </div>

    </section>
  );
}