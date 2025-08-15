import React, { useState } from 'react';
import Button from '../ui/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create email content
      const subject = `New Contact Form Message from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0A` +
                   `Email: ${formData.email || 'Not provided'}%0D%0A` +
                   `Phone: ${formData.phone || 'Not provided'}%0D%0A%0D%0A` +
                   `Message:%0D%0A${formData.message}`;
      
      // Create mailto link
      const mailtoLink = `mailto:yashucleaners@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      
      // Open local email client
      window.open(mailtoLink);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Show toast notification
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? 'error' : ''}
        ></textarea>
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-notification">
          <div className="toast-content">
            <span className="toast-icon">✓</span>
            <span className="toast-message">Email client opened! Complete sending from your email app.</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
