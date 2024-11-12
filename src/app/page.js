import Image from "next/image";
import Header from "./components/header";
import Hero from "./pages/hero"
import About from "./pages/about"
import Skills from "./pages/skills"
import Project from "./pages/project"
import Contact from "./pages/contact"
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills/>
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
