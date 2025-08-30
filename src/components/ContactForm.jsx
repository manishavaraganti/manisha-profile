import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j7kjf4y", 
        "template_cz5s26j", 
        form.current,
        "tviqzuppS-rb5yMIe"
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log("Email error:", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <h2 className="contact-title">Let’s Connect</h2>

      <label>Your Name</label>
      <input type="text" name="user_name" required />

      <label>Your Email</label>
      <input type="email" name="user_email" required />

      <label>Services</label>
      <select name="service" required>
        <option value="">-- Select a Service --</option>
        <option value="Static Page">Static Page</option>
        <option value="Dynamic Page">Dynamic Page</option>
        <option value="Custom Website">Custom Website</option>
        <option value="E-commerce Website">E-commerce Website</option>
        <option value="Full Website">Full Website</option>
        <option value="API Integration">API Integration</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Responsive Design">Responsive Design</option>
      </select>

      <label>Message</label>
      <textarea
        name="user_message"
        maxLength="200"
        placeholder="Write your requirements..."
        required
      />

      <button type="submit">Send Message</button>

      {success && <p className="success-popup">✅ Message sent successfully!</p>}
    </form>
  );
};

export default ContactForm;
