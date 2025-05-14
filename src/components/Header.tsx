import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, FileText, HelpCircle, CheckSquare, Lightbulb, FileQuestion } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/quem-precisa', title: 'Quem Precisa Declarar', icon: <CheckSquare size={20} /> },
    { path: '/passo-a-passo', title: 'Passo a Passo', icon: <FileText size={20} /> },
    { path: '/dicas', title: 'Dicas para Economizar', icon: <Lightbulb size={20} /> },
    { path: '/faq', title: 'Perguntas Frequentes', icon: <HelpCircle size={20} /> },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-green-600 to-blue-600'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center gap-2">
            <FileQuestion className={`h-8 w-8 ${isScrolled ? 'text-green-600' : 'text-white'}`} />
            <span className={`font-bold text-xl md:text-2xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Guia Fácil IR
            </span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-1 transition-colors ${
                  isActive(link.path)
                    ? isScrolled 
                      ? 'text-green-600 font-medium' 
                      : 'text-white font-medium underline'
                    : isScrolled 
                      ? 'text-gray-700 hover:text-green-600' 
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.icon}
                <span>{link.title}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 py-3 border-b border-gray-100 ${
                  isActive(link.path) ? 'text-green-600 font-medium' : 'text-gray-700'
                }`}
              >
                {link.icon}
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;