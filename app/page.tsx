import Header from "../sections/header";
import Hero from "../sections/hero";
import About from "../sections/about";
import Footer from "../sections/footer";
import Copyright from "../sections/copyright";
import Projects from "@/sections/projects";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <Copyright />
    </>
  );
}
