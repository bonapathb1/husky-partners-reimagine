
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Team', href: '#team' },
    { name: 'News', href: '#news' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#home" className="flex items-center">
          {/* Replace with actual logo */}
          <div className="h-12 w-auto">
            <div className="text-husky-blue font-serif font-bold text-2xl">
              HUSKY <span className="text-husky-gold">&</span> PARTNERS
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-husky-blue hover:text-husky-gold text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-1 text-husky-blue">
                <Globe size={16} />
                <span>EN</span>
                <ChevronDown size={14} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Khmer</DropdownMenuItem>
              <DropdownMenuItem>中文</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="bg-husky-blue text-white hover:bg-husky-blue/80">
            Book a Consultation
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-husky-blue hover:text-husky-gold text-lg font-medium transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-husky-blue">
                    <Globe size={16} />
                    <span>EN</span>
                    <ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Khmer</DropdownMenuItem>
                  <DropdownMenuItem>中文</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button className="bg-husky-blue text-white hover:bg-husky-blue/80">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
