import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-section">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-left">
            <h3>KEY PERSON</h3>

          <div className="person-card">
            <p><strong>Mr. Balasaheb Natha Sawant</strong></p>
            <p>Mobile : +91 9921366271</p>
            <p>Email : balasahebsawant32@gmail.com</p>
          </div>

          <div className="person-card highlight">
            <p><strong>Mr. Ramesh Natha Sawant</strong></p>
            <p>Mobile : +91 9822974495</p>
            <p>Email : rameshsawant@gmail.com</p>
          </div>

          <div className="person-card">
            <p><strong>Mr. Mayur Balasaheb Sawant</strong></p>
            <p>Mobile : +91 9921252022</p>
            <p>Email : mayursawant@gmail.com</p>
          </div>
        </div>


        <div className="contact-right">
          <h3>ADDRESS</h3>

          <div className="address-box">
            <p>A/p: Pargaon Tarf Khed,</p>
            <p>Tal: Ambegaon, Dist: Pune,</p>
            <p>410512,Maharastra, INDIA</p>
            <p>📞 +91 86009 65757</p>
            <p>📞 +91 74985 12318</p>
            <p>✉️ bhimashankaragro@gmail.com</p>
          </div>

          {/* <div className="map-box">
            <iframe
              title="Bhimashankar Agro Cold Storage Location"
              src="https://maps.app.goo.gl/aUXuMiSXkTYxzb3C6"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div> */}

         <div className="map-box">
  <iframe
    title="Bhimashankar Agro Cold Storage Location"
    src="https://www.google.com/maps?q=Bhimashankar+Agro+Cold+Storage+Pune&output=embed"
    width="100%"
    height="320"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


        </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
