// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Public Key from the Integration page
// 6. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  // Replace with your EmailJS service ID
  serviceId: 'service_yashu_cleaners',
  
  // Replace with your EmailJS template ID
  templateId: 'template_yashu_contact',
  
  // Replace with your EmailJS public key
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY'
};

// Email template variables that will be sent:
// - from_name: Customer's name
// - from_email: Customer's email
// - phone: Customer's phone (optional)
// - message: Customer's message
// - to_email: Your business email (yashucleaners@gmail.com)
