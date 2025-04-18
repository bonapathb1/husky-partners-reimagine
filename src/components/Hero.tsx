
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-husky-blue text-white pt-16"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070')`, 
          backgroundBlendMode: 'overlay' 
        }}
      />
      
      <div className="container-custom relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold mb-6 tracking-tight">
            Excellence in Legal Services <br />
            <span className="text-husky-gold">Across Cambodia</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            HUSKY & PARTNERS is a premier law firm providing comprehensive legal services 
            with deep local knowledge and international standards.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-husky-gold text-husky-blue hover:bg-husky-gold/90 text-lg px-8 py-6">
              Book a Consultation
            </Button>
            <Button variant="outline" className="border-white/50 text-white bg-white/5 text-lg px-8 py-6 hover:bg-white/10">
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-white/70 hover:text-white transition-colors duration-200 animate-bounce"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
