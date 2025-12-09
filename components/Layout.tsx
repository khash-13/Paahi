import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-offwhite dark:bg-[#050505] text-charcoal dark:text-offwhite transition-colors duration-500">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMenuOpen 
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm border-b border-neutral-200 dark:border-neutral-900' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="z-50 group">
            <h1 className="text-2xl font-display font-bold tracking-wider group-hover:text-gold-500 transition-colors">
              PAAHI
            </h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-wide hover:text-gold-500 transition-colors uppercase ${
                    isActive ? 'text-gold-500' : 'text-neutral-600 dark:text-neutral-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="#contact" className="px-5 py-2 border border-current rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gold-500 hover:border-gold-500 hover:text-white transition-all">
              Book a Call
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 lg:hidden z-50">
            <button onClick={toggleTheme} className="p-2">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-offwhite dark:bg-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="text-2xl font-serif dark:text-white text-neutral-900 hover:text-gold-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-8 px-8 py-3 bg-gold-500 text-white rounded-full text-sm uppercase tracking-widest font-bold">
            Contact Us
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 dark:bg-black border-t border-neutral-200 dark:border-neutral-900 py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold">PAAHI</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              A luxury content studio crafting visual stories for ambitious brands.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-400">Contact</h3>
            <div className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <MapPin size={16} className="mt-1 shrink-0" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <Mail size={16} />
              <a href="mailto:hello@paahi.com" className="hover:text-gold-500">hello@paahi.com</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-400">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-bold text-neutral-400">Newsletter</h3>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-neutral-700 w-full py-2 focus:outline-none focus:border-gold-500 text-sm"
              />
              <button className="text-xs uppercase tracking-widest font-bold hover:text-gold-500">Join</button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-900 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Paahi Productions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}