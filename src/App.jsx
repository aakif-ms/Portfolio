import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Education />
        <Project />
        <div className="my-16 flex justify-center">
          <a
            href="https://github.com/aakif-ms"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-neutral-900">
            More Projects
          </a>
        </div>
        <Contact />
      </div>
    </div>
  );
}
