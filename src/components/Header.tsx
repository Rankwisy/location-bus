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
    { name: 'Accueil', href: '/', title: 'Location bus et minibus avec chauffeur à Bruxelles' },
    { name: 'Services', href: '/services', title: 'Services transport bus Bruxelles' },
    { name: 'Flotte', href: '/flotte', title: 'Minibus et bus avec chauffeur' },
    { name: 'LEZ', href: '/lez-bruxelles', badge: true, title: 'Normes LEZ Bruxelles 2026' },
    { name: 'Excursions', href: '/excursions', title: 'Excursions touristiques en bus Belgique et Europe' },
    { name: 'À Propos', href: '/qui-sommes-nous', title: 'Qui sommes-nous : expertise transport Bruxelles' },
    { name: 'Contact', href: '/contactez-nous', title: 'Demander un devis personnalisé gratuit' },
    { name: 'Blog', href: '/blog', title: 'Blog et conseils transport' },
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
        isScrolled ? 'bg-white shadow-lg py-1.5' : 'bg-white/95 backdrop-blur-sm py-2'
      }`}>
        <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://ik.imagekit.io/by733ltn6/location-bus/cropped-Logo-Location_bus-1.png?updatedAt=1757933964171"
              alt="Location Bus Belgique - Logo officiel service transport bus avec chauffeur à Bruxelles"
              className={`transition-all duration-300 ${
                isScrolled ? 'h-9 sm:h-10' : 'h-10 sm:h-11 md:h-12'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-4 xl:gap-x-5 flex-shrink-0">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  // Parent menu item with dropdown
                  <div className="flex items-center">
                    <Link
                      to={item.href}
                      className={`text-sm font-medium transition-colors duration-200 hover:text-teal-600 flex items-center whitespace-nowrap ${
                        isActiveRoute(item.href, item.children)
                          ? 'text-teal-600 border-b-2 border-teal-600' 
                          : 'text-gray-900'
                      }`}
                    >
                      {item.name}
                      <ChevronDown size={14} className="ml-0.5 transition-transform group-hover:rotate-180" />
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
                    title={'title' in item ? item.title : undefined}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-teal-600 flex items-center whitespace-nowrap ${
                      location.pathname === item.href
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : 'text-gray-900'
                    } ${item.badge ? 'bg-green-100 px-2 py-0.5 rounded-full text-green-800 hover:bg-green-200 hover:text-green-900 text-xs' : ''}`}
                  >
                    {item.badge && <Leaf size={14} className="mr-1" />}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-x-3 flex-shrink-0">
            <a 
              href="mailto:info@location-bus.be"
              className="flex items-center text-gray-800 hover:text-teal-600 transition-colors"
            >
              <Mail size={16} className="mr-1.5" />
              <span className="text-xs font-semibold">info@location-bus.be</span>
            </a>
            <a 
              href="tel:+3223420734"
              className="flex items-center bg-teal-400 hover:bg-teal-500 text-gray-900 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Phone size={16} className="mr-1.5" />
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
                          title={'title' in item ? item.title : undefined}
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
                      title={'title' in item ? item.title : undefined}
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