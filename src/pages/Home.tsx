import About from '../components/home/About';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';
import Hero from '../components/home/Hero';
import Nav from '../components/home/Nav';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
