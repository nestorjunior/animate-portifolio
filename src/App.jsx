import "./app.scss";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <a href="#">
          <Navbar />
          <Hero />
        </a>
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portifolio">Parallax</section>
      <section>Portifolio 1</section>
      <section>Portifolio 2</section>
      <section>Portifolio 3</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
