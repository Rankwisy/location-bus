import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FleetPage from './pages/FleetPage';
import ExcursionsPage from './pages/ExcursionsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import LEZBruxellesPage from './pages/LEZBruxellesPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import PolitiqueConfidentialitePage from './pages/PolitiqueConfidentialitePage';
import CGVPage from './pages/CGVPage';
import NotFoundPage from './pages/NotFoundPage';

function RedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const lang = searchParams.get('lang');

    if (lang) {
      const cleanPath = location.pathname.replace(/^\/en\//, '/');
      window.location.replace(cleanPath);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <RedirectHandler />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/flotte" element={<FleetPage />} />
              <Route path="/excursions" element={<ExcursionsPage />} />
              <Route path="/qui-sommes-nous" element={<AboutPage />} />
              <Route path="/contactez-nous" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />

              {/* Legal and Compliance Pages */}
              <Route path="/lez-bruxelles" element={<LEZBruxellesPage />} />
              <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
              <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />} />
              <Route path="/conditions-generales-vente" element={<CGVPage />} />

              {/* 301 Redirects from old English URLs to French URLs */}
              <Route path="/fleet" element={<Navigate to="/flotte" replace />} />
              <Route path="/about" element={<Navigate to="/qui-sommes-nous" replace />} />
              <Route path="/contact" element={<Navigate to="/contactez-nous" replace />} />

              {/* 301 Redirects from /en/* paths */}
              <Route path="/en/services" element={<Navigate to="/services" replace />} />
              <Route path="/en/fleet" element={<Navigate to="/flotte" replace />} />
              <Route path="/en/flotte" element={<Navigate to="/flotte" replace />} />
              <Route path="/en/excursions" element={<Navigate to="/excursions" replace />} />
              <Route path="/en/about" element={<Navigate to="/qui-sommes-nous" replace />} />
              <Route path="/en/qui-sommes-nous" element={<Navigate to="/qui-sommes-nous" replace />} />
              <Route path="/en/contact" element={<Navigate to="/contactez-nous" replace />} />
              <Route path="/en/contactez-nous" element={<Navigate to="/contactez-nous" replace />} />
              <Route path="/en/blog" element={<Navigate to="/blog" replace />} />
              <Route path="/en/blog/:slug" element={<Navigate to="/blog/:slug" replace />} />
              <Route path="/en/*" element={<Navigate to="/" replace />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;