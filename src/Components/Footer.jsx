import React, { useState, useEffect } from 'react';
import '../../public/CSS/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletter = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company">
          <h3>ISA ICSA</h3>
          <p>ISA ICSA is an independent inspection body delivering structured Third Party Inspection (TPI) services for advanced railway system products.</p>

        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about/company-overview">Company Overview</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <li><a href="/contact">Contact</a></li> */}
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>#2 Floor 17/B1 Sector C, 1, KHB Yelahanka, Bengaluru - 560064, Karnataka</p>
          <p><a href="tel:+1234567890">+91 9353512544</a></p>
          <p><a href="mailto:info@isaicsa.com">admin@isa2025.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ISA ICSA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

