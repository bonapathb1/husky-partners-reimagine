
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "HUSKY & PARTNERS provided exceptional legal support for our business expansion in Cambodia. Their team's deep local knowledge and international expertise were invaluable.",
      name: "John Thompson",
      position: "CEO, Global Investments Ltd.",
      company: "Global Investments Ltd.",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069"
    },
    {
      quote: "The attorneys at HUSKY & PARTNERS demonstrated remarkable professionalism and strategic thinking in resolving our complex dispute. Highly recommended for their expertise.",
      name: "Lisa Chen",
      position: "Legal Director",
      company: "Asia Pacific Trading Co.",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069"
    },
    {
      quote: "Working with HUSKY & PARTNERS on our real estate investments has been a seamless experience. Their attention to detail and client-focused approach sets them apart.",
      name: "David Rodriguez",
      position: "Managing Director",
      company: "Property Ventures International",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=2069"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonialsRef.current) {
      testimonialsRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="section bg-husky-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Client <span className="text-husky-gold">Testimonials</span></h2>
          <p className="section-subtitle text-white/80 mx-auto">
            Hear what our clients have to say about their experience working with HUSKY & PARTNERS.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              ref={testimonialsRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="w-full px-4"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="mb-6 text-husky-gold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                          <path d="M11.9 8.4c-.5-.3-.1-.9.5-1.3 2-1.3 2.1-3.5 1.8-5.4-.2-.5.4-1 1-.7 1 .6 2.1 1.4 2.8 2.3 3.2 3.9 2.4 7.7 0 11.6-2 3.2-5.9 2.4-7.4-.5-1.5-3 .2-5.2 1.3-6zm-8 0c-.5-.3-.1-.9.5-1.3 2-1.3 2.1-3.5 1.8-5.4-.2-.5.4-1 1-.7 1 .6 2.1 1.4 2.8 2.3 3.2 3.9 2.4 7.7 0 11.6-2 3.2-5.9 2.4-7.4-.5-1.5-3 .2-5.2 1.3-6z"></path>
                        </svg>
                      </div>
                      <p className="text-lg font-medium mb-6">{testimonial.quote}</p>
                      <div className="flex flex-col items-center">
                        <p className="font-serif text-xl">{testimonial.name}</p>
                        <p className="text-white/70">{testimonial.position}</p>
                        <p className="text-husky-gold">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={prevTestimonial}
            >
              <ChevronLeft />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index ? 'bg-husky-gold' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              className="border-white/20 text-white hover:bg-white/10"
              onClick={nextTestimonial}
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl text-center mb-8">Trusted by Leading Organizations</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {/* Placeholder for client logos */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 w-32 bg-white/20 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
