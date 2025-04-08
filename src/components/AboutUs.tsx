
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974"
                  alt="HUSKY & PARTNERS Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-husky-blue p-8 rounded-lg flex flex-col justify-center">
                <p className="text-5xl font-serif text-husky-gold mb-2">15+</p>
                <p className="text-white text-lg">Years of Excellence in Legal Services</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="section-title text-husky-blue">About <span className="text-husky-gold">Us</span></h2>
            
            <p className="text-gray-700 mb-6">
              HUSKY & PARTNERS is a leading law firm in Cambodia, committed to delivering 
              exceptional legal services with integrity and excellence. With a deep understanding 
              of the local business environment and international legal standards, we provide 
              strategic counsel to clients across various sectors.
            </p>
            
            <p className="text-gray-700 mb-8">
              Our multilingual team of experienced attorneys offers comprehensive legal solutions 
              tailored to meet the unique needs of each client. We pride ourselves on our 
              meticulous attention to detail, innovative approach, and unwavering commitment to 
              achieving the best outcomes for those we represent.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Client-Focused Approach",
                "Multilingual Team",
                "Local Knowledge",
                "International Standards"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="text-husky-gold mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-husky-blue text-white hover:bg-husky-blue/90">
              Learn More About Our Firm
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
