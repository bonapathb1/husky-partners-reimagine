
import { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
    { 
      name: 'About', 
      href: '#about',
      submenu: [
        { name: 'Our History', href: '#history' },
        { name: 'Mission & Values', href: '#mission' },
        { name: 'Why Choose Us', href: '#why-us' },
      ]
    },
    { 
      name: 'Practice Areas', 
      href: '#practice-areas',
      submenu: [
        { name: 'Corporate Law', href: '#corporate' },
        { name: 'Real Estate', href: '#real-estate' },
        { name: 'Dispute Resolution', href: '#dispute' },
        { name: 'Mergers & Acquisitions', href: '#mergers' },
      ]
    },
    { name: 'Team', href: '#team' },
    { name: 'News', href: '#news' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`hidden lg:block w-full bg-husky-blue text-white py-2 transition-all duration-300 ${
        isScrolled ? 'opacity-0 h-0 py-0 overflow-hidden' : 'opacity-100'
      }`}>
        <div className="container-custom flex justify-end items-center space-x-6">
          <a href="tel:+85512345678" className="flex items-center gap-2 text-sm hover:text-husky-gold transition-colors">
            <Phone size={14} />
            <span>+855 12 345 678</span>
          </a>
          <a href="mailto:info@huskyandpartners.com" className="flex items-center gap-2 text-sm hover:text-husky-gold transition-colors">
            <Mail size={14} />
            <span>info@huskyandpartners.com</span>
          </a>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-white hover:text-husky-gold hover:bg-transparent">
                <Globe size={14} />
                <span className="text-sm">EN</span>
                <ChevronDown size={12} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border border-gray-200">
              <DropdownMenuItem className="hover:bg-husky-blue/10 cursor-pointer">English</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-husky-blue/10 cursor-pointer">Khmer</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-husky-blue/10 cursor-pointer">中文</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Main Header */}
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <a href="#home" className="flex items-center">
            <div className="h-12 w-auto">
              <div className="text-husky-blue font-serif font-bold text-2xl">
                HUSKY <span className="text-husky-gold">&</span> PARTNERS
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu className="mr-4">
              <NavigationMenuList>
                {navLinks.map((link) => 
                  link.submenu ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className="text-husky-blue hover:text-husky-gold hover:bg-transparent focus:bg-transparent">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-1 p-2">
                          {link.submenu.map((sublink) => (
                            <li key={sublink.name}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={sublink.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-husky-blue/10 hover:text-husky-blue focus:bg-husky-blue/10"
                                >
                                  <div className="text-sm font-medium">{sublink.name}</div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <a 
                        href={link.href}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "text-husky-blue hover:text-husky-gold hover:bg-transparent focus:bg-transparent"
                        )}
                      >
                        {link.name}
                      </a>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1 text-husky-blue hover:text-husky-gold">
                    <Globe size={16} />
                    <span>EN</span>
                    <ChevronDown size={14} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm border border-gray-200">
                  <DropdownMenuItem className="hover:bg-husky-blue/10 cursor-pointer">English</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-husky-blue/10 cursor-pointer">Khmer</DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-husky-blue/10 cursor-pointer">中文</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button className="bg-husky-blue hover:bg-husky-blue/90 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]">
                Book a Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button 
            variant="ghost" 
            className="lg:hidden text-husky-blue hover:text-husky-gold hover:bg-transparent"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md absolute top-full left-0 w-full shadow-lg py-4 border-t border-gray-100">
            <div className="container-custom flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-gray-100 pb-2">
                  <a 
                    href={link.href}
                    className="text-husky-blue hover:text-husky-gold text-lg font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <div className="pl-4 mt-2 space-y-2">
                      {link.submenu.map((sublink) => (
                        <a 
                          key={sublink.name} 
                          href={sublink.href}
                          className="text-gray-600 hover:text-husky-blue block text-sm py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="flex flex-col space-y-4 pt-4">
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-husky-blue" />
                  <a href="tel:+85512345678" className="text-gray-700">+855 12 345 678</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-husky-blue" />
                  <a href="mailto:info@huskyandpartners.com" className="text-gray-700">info@huskyandpartners.com</a>
                </div>
              </div>
              
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
                    <DropdownMenuItem className="cursor-pointer">English</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">Khmer</DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">中文</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <Button className="bg-husky-blue text-white hover:bg-husky-blue/90 shadow-md">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
