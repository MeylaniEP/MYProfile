import Image from "next/image";
import Header from "./components/header";
import Hero from "./pages/hero"
import About from "./pages/about"
import Skills from "./pages/skills"
import Project from "./pages/project"
import Contact from "./pages/contact"
import Footer from "./components/footer"
import Email from "./components/email"
import BeyondCode from "./pages/beyondCode";

export default function Home() {
  return (
    <div>
      <Header />
      <Email />
      <Hero />
      <About />
      <Skills/>
      <Project />
      <Contact />
      <BeyondCode />
      <Footer />
    </div>
  );
}
