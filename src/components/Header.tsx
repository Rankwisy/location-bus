import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Mail, ChevronDown, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenuId, setOpenSubMenuId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Flotte', href: '/flotte' },
    { name: 'LEZ', href: '/lez-bruxelles', badge: true },
    { name: 'Excursions', href: '/excursions' },
    { name: 'À Propos', href: '/qui-sommes-nous' },
    { name: 'Contact', href: '/contactez-nous' },
    { name: 'Blog', href: '/blog' },
  ];

  const toggleSubMenu = (menuName: string) => {
    setOpenSubMenuId(openSubMenuId === menuName ? null : menuName);
  };

  const isActiveRoute = (href: string, children?: Array<{ name: string; href: string }>) => {
    if (location.pathname === href) return true;
    if (children) {
      return children.some(child => location.pathname === child.href);
    }
    return false;
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
      >
        Aller au contenu principal
      </a>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3 sm:py-4'
      }`}>
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171"
              alt="Location Bus Belgique - Logo officiel service transport bus avec chauffeur à Bruxelles"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-14 md:h-16'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  // Parent menu item with dropdown
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      className={`font-medium transition-colors duration-200 hover:text-teal-600 flex items-center ${
                        isActiveRoute(item.href, item.children)
                          ? 'text-teal-600 border-b-2 border-teal-600' 
                          : 'text-gray-900'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                    </Link>
                    
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-lg shadow-lg border py-2 min-w-48">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`block px-4 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-teal-600 ${
                              location.pathname === child.href ? 'text-teal-600 bg-gray-50' : 'text-gray-900'
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular menu item
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 hover:text-teal-600 flex items-center ${
                      location.pathname === item.href
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : 'text-gray-900'
                    } ${item.badge ? 'bg-green-100 px-3 py-1 rounded-full text-green-800 hover:bg-green-200 hover:text-green-900' : ''}`}
                  >
                    {item.badge && <Leaf size={16} className="mr-1" />}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="mailto:info@location-bus.be"
              className="flex items-center text-gray-800 hover:text-teal-600 transition-colors"
            >
              <Mail size={18} className="mr-2" />
              <span className="text-sm font-bold">info@location-bus.be</span>
            </a>
            <a 
              href="tel:+3223420734"
              className="flex items-center bg-teal-400 hover:bg-teal-500 text-gray-900 px-4 py-2 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Phone size={18} className="mr-2" />
              +32 2 342 07 34
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    // Parent menu item with expandable submenu
                    <div>
                      <div className="flex items-center justify-between px-4 py-3">
                        <Link
                          to={item.href}
                          className={`font-medium transition-colors hover:text-teal-600 ${
                            isActiveRoute(item.href, item.children) ? 'text-teal-600' : 'text-gray-900'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <button
                          onClick={() => toggleSubMenu(item.name)}
                          className="p-1 hover:bg-gray-100 rounded transition-colors"
                          aria-label={`Toggle ${item.name} submenu`}
                        >
                          <ChevronDown 
                            size={20} 
                            className={`transition-transform ${
                              openSubMenuId === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>
                      
                      {/* Expandable submenu */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        openSubMenuId === item.name ? 'max-h-96' : 'max-h-0'
                      }`}>
                        <div className="bg-gray-50 border-t">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className={`block px-8 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-teal-600 ${
                                location.pathname === child.href ? 'text-teal-600 bg-gray-100' : 'text-gray-800'
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Regular menu item
                    <Link
                      to={item.href}
                      className={`block px-4 py-4 font-medium transition-colors hover:bg-gray-50 hover:text-teal-600 min-h-[44px] flex items-center ${
                        location.pathname === item.href ? 'text-teal-600 bg-gray-50' : 'text-gray-900'
                      } ${item.badge ? 'bg-green-50' : ''}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.badge && <Leaf size={16} className="mr-2 text-green-600" />}
                      <span className={item.badge ? 'text-green-700 font-semibold' : ''}>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 py-4 border-t mt-4">
                <a
                  href="tel:+3223420734"
                  className="flex items-center justify-center bg-teal-400 hover:bg-teal-500 text-gray-900 px-6 py-4 rounded-lg font-semibold transition-colors w-full min-h-[48px]"
                >
                  <Phone size={20} className="mr-2" />
                  +32 2 342 07 34
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;