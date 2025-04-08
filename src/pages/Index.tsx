
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import PracticeAreas from "@/components/PracticeAreas";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
