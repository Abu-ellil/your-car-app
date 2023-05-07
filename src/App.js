import "./App.css";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";

import Crds from "./components/Cards/Crds";
import CarsGallery from "./components/cars/CarsGallery";
import Testimonials from "./components/testimonials/Testimonials";
import Logos from "./components/Logos/Logos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main">
      <Nav />
      <Hero />
      <AboutUs />
      <Services />

      <Crds />

      <CarsGallery />
      <Testimonials />
      <Logos />
      <Footer />
    </div>
  );
}

export default App;
