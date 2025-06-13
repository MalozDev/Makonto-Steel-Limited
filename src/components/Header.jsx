import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/header-footer.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/assets/images/logo.png"
              alt="Makondo Steel Logo"
              className="logo"
            />
            <span className="brand-text">Makondo Steel</span>
          </Link>
        </div>

        <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={`nav-link ${isActivePage("/") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`nav-link ${isActivePage("/services") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${isActivePage("/projects") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/about"
            className={`nav-link ${isActivePage("/about") ? "active" : ""}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${isActivePage("/contact") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            to="/request-quote"
            className="nav-link cta-link"
            onClick={closeMenu}
          >
            Get Quote
          </Link>
        </div>

        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "active" : ""}`}></span>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Header;
