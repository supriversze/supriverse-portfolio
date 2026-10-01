import React, { useState, useEffect } from 'react';
import { useThemeMode } from '../context/ThemeModeContext';
import { ModeSwitcher } from './ModeSwitcher';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const { isTechnical, isCreative, setMode } = useThemeMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Technical', href: '#technical', id: 'technical' },
    { label: 'Creative', href: '#creative', id: 'creative' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string, id: string) => {
    setMobileMenuOpen(false);
    if (id === 'creative') {
      setMode('creative');
      setTimeout(() => {
        const el = document.getElementById('creative-work') || document.getElementById('creative');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (id === 'technical') {
      setMode('technical');
      setTimeout(() => {
        const el = document.getElementById('technical');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white focus-visible:outline-none cursor-pointer"
            aria-label="Supriverse - Supriya Suresh Portfolio Home"
          >
            <div className={`w-8 h-8 rounded-lg bg-slate-900 border flex items-center justify-center transition-colors duration-300 shadow-sm ${
              isTechnical ? 'border-blue-500/50 group-hover:border-blue-400' : 'border-yellow-400/50 group-hover:border-yellow-300'
            }`}>
              <span className={`font-mono text-sm font-extrabold text-transparent bg-clip-text ${
                isTechnical
                  ? 'bg-gradient-to-r from-blue-400 to-sky-300'
                  : 'bg-gradient-to-r from-yellow-300 to-amber-400'
              }`}>
                S
              </span>
            </div>
            <span className="tracking-tight font-extrabold text-slate-100 flex items-center">
              {PERSONAL_INFO.brandName}
              <span
                className={`inline-block w-1.5 h-1.5 rounded-full ml-0.5 transition-colors duration-300 ${
                  isTechnical
                    ? 'bg-blue-500 shadow-[0_0_8px_#3b82f6]'
                    : 'bg-yellow-400 shadow-[0_0_8px_#facc15]'
                }`}
              />
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 bg-slate-900/60 border border-slate-800/70 backdrop-blur-md"
          >
            {navLinks.map((link) => {
              const isActive =
                (link.id === 'technical' && isTechnical) ||
                (link.id === 'creative' && isCreative) ||
                activeSection === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href, link.id);
                  }}
                  className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isTechnical
                        ? 'text-blue-400 bg-blue-500/10 font-semibold'
                        : 'text-yellow-400 bg-yellow-400/10 font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                  {link.id === 'creative' && (
                    <span className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full border ${
                      isCreative
                        ? 'bg-yellow-400 text-slate-950 font-bold border-yellow-400'
                        : 'bg-yellow-400/15 text-yellow-300 border-yellow-400/30'
                    }`}>
                      Active
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Mode Switcher & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop Mode Switcher */}
            <div className="hidden sm:block">
              <ModeSwitcher size="md" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 md:hidden focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 pt-2 pb-5 bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5 pb-4 border-b border-slate-800/80">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href, link.id);
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  (link.id === 'technical' && isTechnical) || (link.id === 'creative' && isCreative)
                    ? isTechnical
                      ? 'text-blue-400 bg-blue-950/30'
                      : 'text-yellow-400 bg-yellow-950/30'
                    : 'text-slate-200 hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-2">
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
              Identity Persona
            </span>
            <ModeSwitcher size="md" className="w-full justify-center" />
          </div>
        </div>
      )}
    </header>
  );
};
