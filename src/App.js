import './App.css';
import Hero from './components/hero/Hero';
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';

import CarsGallery from './components/cars/CarsGallery';
import Testimonials from './components/testimonials/Testimonials';
import Logos from './components/Logos/Logos';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="main">
      <Hero />
      <AboutUs />
      <Services />

      <CarsGallery />
      <Testimonials />
      <Logos/>
      <Footer/>
    </div>
  );
}

export default App;
