
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'de' as Language, name: 'Deutsch', flag: '🇩🇪' },
    { code: 'ar' as Language, name: 'العربية', flag: '🇸🇦' },
    { code: 'es' as Language, name: 'Español', flag: '🇪🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <nav className="bg-black/20 border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">MG</span>
            </div>
            <span className="text-xl font-bold text-white">Mein Genie</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.home')}
            </Link>
            <Link to="/formino" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.formino')}
            </Link>
            <Link to="/termino" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.termino')}
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.about')}
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.pricing')}
            </Link>
            <Link to="/help" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.help')}
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              {t('nav.contact')}
            </Link>
            <a href="tel:+4917686315894" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">+49 176 86315894</span>
            </a>
            
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400 hover:bg-white/10">
                  <Languages className="h-4 w-4 mr-1" />
                  <span>{currentLanguage?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border-white/20">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="text-white hover:bg-white/10 cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild className="text-white hover:text-cyan-400 hover:bg-white/10">
              <Link to="/login">{t('nav.login')}</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black">
              <Link to="/register">{t('nav.register')}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 border-t border-white/10">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.home')}
              </Link>
              <Link
                to="/formino"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.formino')}
              </Link>
              <Link
                to="/termino"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.termino')}
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.pricing')}
              </Link>
              <Link
                to="/help"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.help')}
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <a
                href="tel:+4917686315894"
                className="block px-3 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="h-4 w-4 inline mr-2" />
                +49 176 86315894
              </a>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="text-white text-sm mb-2">Language:</div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`px-2 py-1 rounded text-xs ${
                        language === lang.code
                          ? 'bg-cyan-400 text-black'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {lang.flag} {lang.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col space-y-2 px-3 pt-4">
                <Button variant="ghost" asChild className="justify-start text-white hover:text-cyan-400 hover:bg-white/10">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>{t('nav.login')}</Link>
                </Button>
                <Button asChild className="justify-start bg-gradient-to-r from-green-400 to-cyan-400 hover:from-green-500 hover:to-cyan-500 text-black">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>{t('nav.register')}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
