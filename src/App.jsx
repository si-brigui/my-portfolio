import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="page">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
