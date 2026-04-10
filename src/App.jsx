import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div
      className="min-vh-100 text-black position-relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 10% 10%, rgba(255,255,255,0.9), transparent 40%),
          radial-gradient(circle at 90% 20%, rgba(255,255,255,0.6), transparent 40%),
          radial-gradient(circle at 50% 80%, rgba(255,255,255,0.4), transparent 50%),
          linear-gradient(135deg, #f5f5f7, #e5e7eb, #d1d5db)
        `,
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "rgba(255,255,255,0.4)",
          filter: "blur(120px)",
          top: "-100px",
          left: "-100px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(255,255,255,0.3)",
          filter: "blur(120px)",
          bottom: "-100px",
          right: "-100px",
          zIndex: 0,
        }}
      />

      <img
        src="/noise.jpeg"
        alt="noise"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",

          pointerEvents: "none",
        }}
      />


      <div style={{ position: "relative", zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>

    </div>
  );
}