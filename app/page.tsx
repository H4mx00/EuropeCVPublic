import Navbar from '../Homepage/Components/Navbar';
import Hero from '../Homepage/Components/Hero';
import Features from '../Homepage/Components/Features';
import TemplatesSection from '../Homepage/Components/TemplatesSection';
import Testimonials from '../Homepage/Components/Testimonials';
import HowItWorks from '../Homepage/Components/HowItWorks';
import FAQ from '../Homepage/Components/FAQ';
import CTACard from '../Homepage/Components/CTACard';
import Footer from '../Homepage/Components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <Features />
      <TemplatesSection />
      <Testimonials />
      <HowItWorks />
      <FAQ />
      <CTACard />
      <Footer />
    </main>
  );
}
