import React from "react";
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="contact-kicker">Get in touch</p>
        <h1>Contact</h1>

        <div className="contact-card">
          <div className="contact-item contact-name">
            <PersonIcon />
            <span>Liuwen Yu</span>
          </div>

          <a
            className="contact-item"
            href="https://yuliuwen.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            <LanguageIcon />
            <span>yuliuwen.github.io</span>
          </a>

          <a
            className="contact-item"
            href="mailto:yuliuwen02@gmail.com"
          >
            <EmailIcon />
            <span>yuliuwen02@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;