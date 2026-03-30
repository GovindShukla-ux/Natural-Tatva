import { Suspense, lazy, Component } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// ===== LAZY LOAD PAGES (better performance) =====
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const WhyJaggery = lazy(() => import("./pages/WhyJaggery"));
const OurProcess = lazy(() => import("./pages/OurProcess"));
const Products = lazy(() => import("./pages/Products"));
const NotFound = lazy(() => import("./pages/NotFound"));

// ===== ERROR BOUNDARY =====
// Catches chunk load failures on bad mobile networks
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // In production, you could send this to an error tracking service
    console.error("Page load error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="min-h-screen flex items-center justify-center text-center p-8"
          style={{ backgroundColor: "var(--color-bg)" }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-primary-dark)",
                marginBottom: "1rem",
              }}
            >
              Something went wrong.
            </h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                marginBottom: "1.5rem",
              }}
            >
              The page failed to load. Please check your connection and try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                backgroundColor: "var(--color-primary)",
                color: "var(--color-white)",
                padding: "0.75rem 2rem",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                cursor: "pointer",
                border: "none",
                minHeight: "44px",
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ===== PAGE LOADING FALLBACK =====
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center">
        <div
          className="w-12 h-12 rounded-full border-4 animate-spin mx-auto mb-4"
          style={{
            borderColor: "var(--color-primary)",
            borderTopColor: "transparent",
          }}
          role="status"
          aria-label="Loading page"
        />
        <p style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}>
          Loading...
        </p>
      </div>
    </div>
  );
}

// ===== ANIMATED ROUTES =====
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-jaggery" element={<WhyJaggery />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 - catches all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// ===== MAIN APP =====
function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />

        {/* Skip to main content - Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div className="relative min-h-screen flex flex-col">
          <Navbar />

          <main
            id="main-content"
            className="flex-grow"
            aria-label="Main content"
          >
            <ErrorBoundary>
              <Suspense fallback={<PageLoader />}>
                <AnimatedRoutes />
              </Suspense>
            </ErrorBoundary>
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
