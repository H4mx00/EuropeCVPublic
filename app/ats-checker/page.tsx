import Navbar from '../../Homepage/Components/Navbar';
import Footer from '../../Homepage/Components/Footer';
import Hero from '../../ATSChecker/Components/Hero';
import HowItWorks from '../../ATSChecker/Components/HowItWorks';
import FAQ from '../../ATSChecker/Components/FAQ';

export default function ATSCheckerPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FAQ />
      <Footer />
    </main>
  );
}
