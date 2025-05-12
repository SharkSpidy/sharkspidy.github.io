import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ darkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Joseph Shibu
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#social">Social</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden flex flex-col justify-center items-center`}
        >
          <nav className="flex flex-col items-center space-y-8 text-xl">
            <MobileNavLink href="#about" onClick={toggleMobileMenu}>About</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#social" onClick={toggleMobileMenu}>Social</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

// NavLink component for desktop
const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
    >
      {children}
    </a>
  );
};

// NavLink component for mobile
const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({
  href,
  onClick,
  children,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
    >
      {children}
    </a>
  );
};

export default Header;