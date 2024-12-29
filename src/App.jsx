import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Parallax } from "./components/parallax/Parallax";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <a href="#">
          <Navbar />
          <Hero />
        </a>
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>Services</section>
      <section id="Portifolio">
        <Parallax type="portifolio" />
      </section>
      <section>Portifolio 1</section>
      <section>Portifolio 2</section>
      <section>Portifolio 3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
