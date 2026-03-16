import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      {/* Fixed Navigation Header */}
      <Header />
      
      <main>
        {/* Phase 2: Hero Section */}
        <Hero />
        
        {/* Phase 3: About Clinic & Doctors */}
        <About />
        
        {/* Phase 4: Why Choose Us (Features) */}
        <Features />
        
        {/* Phase 5: Services & Procedures */}
        <Services />
        
        {/* Phase 7: Clinic Gallery */}
        <Gallery />
        
        {/* Phase 6: Patient Testimonials */}
        <Testimonials />
      </main>

      {/* Phase 9: Global Footer / Contact */}
      <Footer />
    </>
  );
}

export default App;
