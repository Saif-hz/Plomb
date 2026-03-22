import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FloatingCallButton from './components/FloatingCallButton';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import Services from './components/Services';
import TrustStrip from './components/TrustStrip';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="min-h-screen pb-28 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Reviews />
        <FAQ />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
