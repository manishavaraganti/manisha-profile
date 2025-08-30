import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Store the user's email and name from the form
    const userEmail = form.current.user_email.value;
    const userName = form.current.user_name.value;

    // First, send mail to the admin
    emailjs
      .sendForm(
        "service_j7kjf4y", // ✅ Your service ID
        "template_cz5s26j", // ✅ Admin template ID
        form.current,
        "tviqzuppS-rb5yMIe" // ✅ Your Public Key
      )
      .then(
        (result) => {
          console.log("Admin email sent:", result.text);

          // Now, send the "thank you" email to the user
          emailjs.send(
            "service_j7kjf4y", // same service
            "template_wysbkr3", // ✅ User template ID
            {
              // Make sure these keys match your EmailJS template variables
              to_email: userEmail,
              user_name: userName,
              service: form.current.service.value,
              user_message: form.current.user_message.value,
            },
            "tviqzuppS-rb5yMIe"
          );

          setSuccess(true);
          e.target.reset();

          // ✅ Add the alert message here for a successful submission
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Admin email error:", error.text);
          // ✅ You can also add an alert for a failed submission
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let’s Connect</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
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
            placeholder="Write your requirements or anything..."
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;