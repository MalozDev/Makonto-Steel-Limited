import { Link } from "react-router-dom";
import "../assets/styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = "mailto:info@makondosteel.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+260123456789";
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/260123456789?text=Hello%20Makondo%20Steel!%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      "_blank"
    );
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <Link to="/">
                <img
                  src="/assets/images/logo-white.png"
                  alt="Makondo Steel Logo"
                  className="footer-logo"
                />
              </Link>
              <h3>Makondo Steel & Logistics Ltd.</h3>
              <p>
                Building Zambia's future with premium steel solutions and
                exceptional service delivery across all construction sectors.
              </p>

              {/* Quick Contact Actions */}
              <div className="footer-quick-actions">
                <button
                  onClick={handlePhoneClick}
                  className="quick-action-btn"
                  title="Call us"
                >
                  <img src="/assets/images/icons/phone.svg" alt="Phone" />
                  <span>Call Now</span>
                </button>
                <button
                  onClick={handleWhatsAppClick}
                  className="quick-action-btn whatsapp"
                  title="WhatsApp us"
                >
                  <img src="/assets/images/icons/whatsapp.svg" alt="WhatsApp" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleEmailClick}
                  className="quick-action-btn"
                  title="Email us"
                >
                  <img src="/assets/images/icons/email.svg" alt="Email" />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul>
              <li>
                <Link to="/services#steel-fabrication">Steel Fabrication</Link>
              </li>
              <li>
                <Link to="/services#construction">Steel Construction</Link>
              </li>
              <li>
                <Link to="/services#logistics">Logistics & Supply</Link>
              </li>
              <li>
                <Link to="/services#consulting">Engineering Consulting</Link>
              </li>
              <li>
                <Link to="/services#maintenance">Maintenance Services</Link>
              </li>
              <li>
                <Link to="/services#custom-solutions">Custom Solutions</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/about#team">Our Team</Link>
              </li>
              <li>
                <Link to="/projects">Portfolio</Link>
              </li>
              <li>
                <Link to="/about#certifications">Certifications</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/request-quote">Request Quote</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <img src="/assets/images/icons/location.svg" alt="Location" />
                <div>
                  <strong>Head Office</strong>
                  <p>
                    Industrial Area, Plot 1234
                    <br />
                    Lusaka, Zambia
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <img src="/assets/images/icons/phone.svg" alt="Phone" />
                <div>
                  <strong>Phone</strong>
                  <p>+260 123 456 789</p>
                  <p>+260 987 654 321</p>
                </div>
              </div>

              <div className="contact-item">
                <img src="/assets/images/icons/email.svg" alt="Email" />
                <div>
                  <strong>Email</strong>
                  <p>info@makondosteel.com</p>
                  <p>quotes@makondosteel.com</p>
                </div>
              </div>

              <div className="contact-item">
                <img src="/assets/images/icons/clock.svg" alt="Hours" />
                <div>
                  <strong>Business Hours</strong>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="social-section">
              <h5>Follow Us</h5>
              <div className="social-links">
                <a
                  href="https://facebook.com/makondosteel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src="/assets/images/icons/facebook.svg" alt="Facebook" />
                </a>
                <a
                  href="https://linkedin.com/company/makondosteel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn" />
                </a>
                <a
                  href="https://instagram.com/makondosteel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <img
                    src="/assets/images/icons/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://twitter.com/makondosteel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <img src="/assets/images/icons/twitter.svg" alt="Twitter" />
                </a>
                <a
                  href="https://youtube.com/makondosteel"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <img src="/assets/images/icons/youtube.svg" alt="YouTube" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h4>Stay Updated</h4>
            <p>
              Subscribe to our newsletter for the latest updates on projects and
              industry insights.
            </p>
          </div>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
              <img src="/assets/images/icons/arrow-right.svg" alt="Subscribe" />
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} Makondo Steel & Logistics Ltd. All rights
              reserved.
            </p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
          <div className="footer-certifications">
            <img
              src="/assets/images/certifications/iso-cert.png"
              alt="ISO Certification"
            />
            <img
              src="/assets/images/certifications/safety-cert.png"
              alt="Safety Certification"
            />
            <img
              src="/assets/images/certifications/quality-cert.png"
              alt="Quality Certification"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
