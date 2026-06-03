import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FadeIn from "./components/FadeIn";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <FadeIn delay={0}>
        <About />
      </FadeIn>
      <FadeIn delay={100}>
        <Skills />
      </FadeIn>
      <FadeIn delay={100}>
        <Projects />
      </FadeIn>
      <FadeIn delay={100}>
        <Experience />
        </FadeIn>
      <FadeIn delay={100}>
        <Contact />
      </FadeIn>
      <FadeIn delay={0}>
        <Footer />
      </FadeIn>
    </main>
  );
}