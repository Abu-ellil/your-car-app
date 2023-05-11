import "./App.css";
import Nav from "./components/navbar/Nav";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import CarsGallery from "./components/cars/CarsGallery";
import Testimonials from "./components/testimonials/Testimonials";
import Logos from "./components/Logos/Logos";
import Footer from "./components/Footer/Footer";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="main">
      <Nav />
      <div className="container">
      <Hero />
      <AboutUs />
      <Services />
      <Shop />
      <CarsGallery />
      <Testimonials />
      <Logos />
      <Footer />
    </div>
    </div>
  );
}

export default App;
