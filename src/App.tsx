import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import Services from './components/Services';
import Stats from './components/Stats';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ValuePillars />
      <Services />
      <Stats />
      <HowItWorks />
      <Testimonials />
      <Packages />
      <Portfolio />
      <QuoteForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;