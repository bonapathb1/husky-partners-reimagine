
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-husky-blue text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              {/* Replace with actual logo */}
              <div className="text-white font-serif font-bold text-3xl">
                HUSKY <span className="text-husky-gold">&</span> PARTNERS
              </div>
            </div>
            <p className="text-white/70 mb-6">
              A premier law firm providing comprehensive legal services with local knowledge and international standards.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-husky-gold hover:text-husky-blue transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-husky-gold hover:text-husky-blue transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-husky-gold hover:text-husky-blue transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-husky-gold hover:text-husky-blue transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-husky-gold">Practice Areas</h3>
            <ul className="space-y-3">
              {[
                'Corporate & Commercial',
                'Dispute Resolution',
                'Real Estate & Construction',
                'Mergers & Acquisitions',
                'Investment & Banking',
                'Labor & Employment'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white/70 hover:text-husky-gold transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-husky-gold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Team', href: '#team' },
                { name: 'News & Insights', href: '#news' },
                { name: 'Careers', href: '#careers' },
                { name: 'Contact Us', href: '#contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-husky-gold transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif font-medium mb-6 text-husky-gold">Languages</h3>
            <ul className="space-y-3">
              {[
                'English',
                'ភាសាខ្មែរ (Khmer)',
                '中文 (Chinese)'
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-husky-gold transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-serif font-medium mt-8 mb-4 text-husky-gold">Contact Us</h3>
            <p className="text-white/70">
              info@huskyandpartners.com<br />
              +855 23 123 456
            </p>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between">
          <div className="text-white/70 text-sm">
            © {currentYear} HUSKY & PARTNERS. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
            <a href="#" className="hover:text-husky-gold transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-husky-gold transition-colors duration-200">Terms of Use</a>
            <a href="#" className="hover:text-husky-gold transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
