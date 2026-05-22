import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

import facebookIcon from "../assets/facebook-icon.png";
import twitterIcon from "../assets/twitter-icon.png";
import linkedinIcon from "../assets/linkedin-icon.png";
import instagramIcon from "../assets/instagram-icon.jpg";
import phoneIcon from "../assets/phone-icon.png";
import mobileIcon from "../assets/mobile-icon.png";
import emailIcon from "../assets/email-icon.jpg";
import addressIcon from "../assets/address-icon.jpg";

const Footer = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    problem: ""
  });
  const [loading, setLoading] = useState(false);

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ SINGLE SUBMIT FUNCTION (FIXED)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting enquiry", formData);

    try {
      const response = await fetch("http://localhost:5000/api/enquiries/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      let data = null;
      try { data = await response.json(); } catch (err) { /* ignore */ }

      if (response.ok) {
        alert("Enquiry submitted successfully!");
        setFormData({ name: "", email: "", contact: "", problem: "" });
      } else {
        console.error("Enquiry submission failed", response.status, data);
        alert("Submission failed: " + (data?.message || response.statusText || response.status));
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  }; // ✅ VERY IMPORTANT (YOU MISSED THIS)

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CONTACT */}
        <div className="footer-column">
          <h3>CONTACT US</h3>

          <div className="contact-info-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <span>Tel: +91 99213 66271</span>
          </div>

          <div className="contact-info-item">
            <img src={mobileIcon} alt="Mobile" className="contact-icon" />
            <span>Mob: +91 98229 74495</span>
          </div>

          <div className="contact-info-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <span>info@bhimashankarcoldstore.com</span>
          </div>

          <div className="contact-info-item">
            <img src={addressIcon} alt="Address" className="contact-icon" />
            <span>
              Bhimashankar Agro Cold Store, Pargaon Tarf Khed,
              Tal: Ambegaon, Dist: Pune, Maharashtra, India
            </span>
          </div>

          <div className="social-icons">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>NAVIGATION</h3>
          <ul className="footer-nav">
            <li><NavLink to="/overview">Overview</NavLink></li>
            <li><NavLink to="/solution">Cold Chain Solutions</NavLink></li>
            <li><NavLink to="/management">Cold Chain Management</NavLink></li>
            <li><NavLink to="/storage">Cold Storage</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-column">
          <h3>SERVICES</h3>
          <ul>
            <li>Potato Cold Storage</li>
            <li>Long-Term Potato Preservation</li>
            <li>Pre-Cooling & Curing Services</li>
            <li>Sprout Control Management</li>
            <li>Grading & Quality Inspection</li>
            <li>Inventory & Batch Tracking</li>
            <li>Safe Loading & Dispatch</li>
            <li>Market Release Support</li>
          </ul>
        </div>

        {/* ENQUIRY FORM */}
        <div className="footer-column">
          <h3>ANY QUERY?</h3>

          <form className="newsletter-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />

            <textarea
              name="problem"
              placeholder="Your Problem / Requirement"
              rows="3"
              value={formData.problem}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading}>{loading ? "Submit" : "Submit"}</button>

          </form>
        </div>



        



      </div>
    </footer>
  );
};

export default Footer;










