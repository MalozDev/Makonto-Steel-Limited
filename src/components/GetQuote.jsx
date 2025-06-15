import React, { useState } from "react";
import { submitQuoteRequest } from "../../firebase-config";
import "../assets/styles/GetQuote.css";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    projectType: "",
    projectLocation: "",
    projectDescription: "",
    timeframe: "",
    budget: "",
    additionalNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.contactPerson.trim())
      newErrors.contactPerson = "Contact person is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.projectType.trim())
      newErrors.projectType = "Project type is required";
    if (!formData.projectLocation.trim())
      newErrors.projectLocation = "Project location is required";
    if (!formData.projectDescription.trim())
      newErrors.projectDescription = "Project description is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit to Firestore
      await submitQuoteRequest(formData);

      // Show success message
      setShowSuccess(true);
    } catch (error) {
      console.error("Error submitting quote request:", error);
      alert(
        "There was an error submitting your request. Please try again or contact us directly at +260 975 623 742."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="quote-container">
        <div className="quote-success-message">
          <div className="quote-success-icon animate-checkmark">✓</div>
          <h2 className="quote-success-title">
            Quote Request Submitted Successfully!
          </h2>
          <p className="quote-success-text">
            Thank you for your interest in Makondo Steel Limited. We have
            received your quote request and will review it carefully.
          </p>
          <p className="quote-success-text">
            Our team will contact you within 24-48 hours with a detailed
            quotation tailored to your project requirements.
          </p>
          <div className="quote-success-actions">
            <button
              className="quote-btn-primary"
              onClick={() => {
                setShowSuccess(false);
                setFormData({
                  companyName: "",
                  contactPerson: "",
                  email: "",
                  phone: "",
                  projectType: "",
                  projectLocation: "",
                  projectDescription: "",
                  timeframe: "",
                  budget: "",
                  additionalNotes: "",
                });
              }}
            >
              Submit Another Request
            </button>
            <p className="quote-contact-info">
              Need immediate assistance? Call us at{" "}
              <strong>+260 975 623 742</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <div className="quote-header">
        <h1 className="quote-title">Request a Quote</h1>
        <p className="quote-subtitle">
          Get a professional quotation for your steel construction project
        </p>
      </div>

      <form className="quote-form-container" onSubmit={handleSubmit}>
        <div className="quote-section">
          <h3 className="quote-section-title">Company Information</h3>
          <div className="quote-form-row">
            <div className="quote-form-group">
              <label className="quote-label">Company Name *</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className={`quote-input ${
                  errors.companyName ? "quote-input-error" : ""
                }`}
                placeholder="Enter your company name"
              />
              {errors.companyName && (
                <span className="quote-error-text">{errors.companyName}</span>
              )}
            </div>
            <div className="quote-form-group">
              <label className="quote-label">Contact Person *</label>
              <input
                type="text"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleInputChange}
                className={`quote-input ${
                  errors.contactPerson ? "quote-input-error" : ""
                }`}
                placeholder="Enter contact person name"
              />
              {errors.contactPerson && (
                <span className="quote-error-text">{errors.contactPerson}</span>
              )}
            </div>
          </div>

          <div className="quote-form-row">
            <div className="quote-form-group">
              <label className="quote-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`quote-input ${
                  errors.email ? "quote-input-error" : ""
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <span className="quote-error-text">{errors.email}</span>
              )}
            </div>
            <div className="quote-form-group">
              <label className="quote-label">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`quote-input ${
                  errors.phone ? "quote-input-error" : ""
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="quote-error-text">{errors.phone}</span>
              )}
            </div>
          </div>
        </div>

        <div className="quote-section">
          <h3 className="quote-section-title">Project Details</h3>
          <div className="quote-form-row">
            <div className="quote-form-group">
              <label className="quote-label">Project Type *</label>
              <input
                type="text"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className={`quote-input ${
                  errors.projectType ? "quote-input-error" : ""
                }`}
                placeholder="e.g., Warehouse, Storage Shed, High Rise Building, Canopy, etc."
              />
              {errors.projectType && (
                <span className="quote-error-text">{errors.projectType}</span>
              )}
              <small className="quote-small-text">
                Examples: Warehouse, Storage Shed, High Rise Building, Canopy,
                Milling Plant, Sliding Gates, Tank Stands, Palisade Fences,
                Window Frames, School Furniture, Hospital Beds, Residential
                Building, Commercial Building
              </small>
            </div>
            <div className="quote-form-group">
              <label className="quote-label">Project Location *</label>
              <input
                type="text"
                name="projectLocation"
                value={formData.projectLocation}
                onChange={handleInputChange}
                className={`quote-input ${
                  errors.projectLocation ? "quote-input-error" : ""
                }`}
                placeholder="Enter project location"
              />
              {errors.projectLocation && (
                <span className="quote-error-text">
                  {errors.projectLocation}
                </span>
              )}
            </div>
          </div>

          <div className="quote-form-group">
            <label className="quote-label">Project Description *</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className={`quote-textarea ${
                errors.projectDescription ? "quote-input-error" : ""
              }`}
              placeholder="Provide detailed description of your project requirements, dimensions, specifications, etc."
              rows={4}
            />
            {errors.projectDescription && (
              <span className="quote-error-text">
                {errors.projectDescription}
              </span>
            )}
          </div>

          <div className="quote-form-row">
            <div className="quote-form-group">
              <label className="quote-label">Project Timeframe</label>
              <select
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                className="quote-select"
              >
                <option value="">Select timeframe</option>
                <option value="immediate">Immediate (Within 1 month)</option>
                <option value="1-3-months">1-3 months</option>
                <option value="3-6-months">3-6 months</option>
                <option value="6-12-months">6-12 months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
            <div className="quote-form-group">
              <label className="quote-label">Estimated Budget (ZMW)</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="quote-select"
              >
                <option value="">Select budget range</option>
                <option value="under-50k">Under K50,000</option>
                <option value="50k-100k">K50,000 - K100,000</option>
                <option value="100k-250k">K100,000 - K250,000</option>
                <option value="250k-500k">K250,000 - K500,000</option>
                <option value="500k-1m">K500,000 - K1,000,000</option>
                <option value="over-1m">Over K1,000,000</option>
                <option value="discuss">Prefer to discuss</option>
              </select>
            </div>
          </div>
        </div>

        <div className="quote-section">
          <h3 className="quote-section-title">Additional Information</h3>
          <div className="quote-form-group">
            <label className="quote-label">Additional Notes</label>
            <textarea
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Any additional information or special requirements"
              rows={3}
              className="quote-textarea"
            />
            <small className="quote-small-text">
              For drawings, plans, or reference images, please email them
              directly to <strong>malozdev@gmail.com</strong> after submitting
              this form.
            </small>
          </div>
        </div>

        <div className="quote-footer">
          <button
            type="submit"
            className={`quote-btn-primary ${
              isSubmitting ? "quote-btn-disabled" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
          </button>
          <p className="quote-footer-note">
            * Required fields. We'll respond within 24-48 hours with your
            detailed quotation.
          </p>
        </div>
      </form>
    </div>
  );
};

export default GetQuote;
