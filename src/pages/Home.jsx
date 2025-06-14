import { Link } from "react-router-dom";
import "../assets/styles/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoLogoWhatsapp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="home-page">
      {/*Header component for nav bar*/}
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">
              Building Zambia's Future with
              <span className="highlight"> Premium Steel Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Leading steel fabrication and logistics company delivering
              exceptional construction solutions across Zambia and beyond.
            </p>
            <div className="hero-actions">
              <Link to="/request-quote" className="btn btn-primary">
                Get Free Quote
              </Link>
              <Link to="/projects" className="btn btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Expert Team</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">24/7</h3>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive steel solutions from design to delivery
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/assets/images/icons/fabrication.svg"
                  alt="Steel Fabrication"
                />
              </div>
              <h3 className="service-title">Steel Fabrication</h3>
              <p className="service-description">
                Custom steel fabrication services for industrial, commercial,
                and residential projects.
              </p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/assets/images/icons/construction.svg"
                  alt="Construction"
                />
              </div>
              <h3 className="service-title">Steel Construction</h3>
              <p className="service-description">
                Complete steel structure construction with expert project
                management and quality assurance.
              </p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/images/icons/logistics.svg" alt="Logistics" />
              </div>
              <h3 className="service-title">Logistics & Supply</h3>
              <p className="service-description">
                Efficient steel supply chain and logistics solutions for timely
                project delivery.
              </p>
              <Link to="/services" className="service-link">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Showcasing our latest steel construction achievements
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img
                  src="/assets/images/projects/project-1.jpg"
                  alt="Commercial Building"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h4 className="project-title">Modern Commercial Complex</h4>
                    <p className="project-location">Lusaka, Zambia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="/assets/images/projects/project-2.jpg"
                  alt="Industrial Warehouse"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h4 className="project-title">Industrial Warehouse</h4>
                    <p className="project-location">Ndola, Zambia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img
                  src="/assets/images/projects/project-3.jpg"
                  alt="Residential Complex"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <h4 className="project-title">Residential Steel Frame</h4>
                    <p className="project-location">Kitwe, Zambia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="projects-cta">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2 className="section-title">Why Choose Makondo Steel?</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Quality Assurance</h4>
                    <p>
                      Certified materials and rigorous quality control processes
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Timely Delivery</h4>
                    <p>
                      On-schedule project completion with efficient logistics
                    </p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Expert Team</h4>
                    <p>Experienced professionals with local market knowledge</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <div className="feature-content">
                    <h4>Competitive Pricing</h4>
                    <p>Value-driven solutions without compromising quality</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img
                src="/assets/images/team-work.jpg"
                alt="Makondo Steel Team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Steel Project?</h2>
            <p className="cta-subtitle">
              Get a free consultation and quote for your construction needs
            </p>
            <div className="cta-actions">
              <Link to="/request-quote" className="btn btn-primary">
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/+260975623742"
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp size={30} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
