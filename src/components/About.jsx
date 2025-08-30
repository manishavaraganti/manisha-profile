import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./About.css";
import profileImg from "../assets/profile1.jpg";

const About = () => {
  const [showHireForm, setShowHireForm] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j7kjf4y",    // your EmailJS service ID
        "template_cz5s26j",  // your template ID
        form.current,
        "tviqzuppS-rb5yMIe"  // your public key
      )
      .then(() => {
        setSubmitted(true);
        e.target.reset();
      })
      .catch((err) => console.log("Email error:", err));
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* About Content */}
        <div className="about-content">
    <h2>About Me</h2>
<p>
  I'm a passionate <strong>MERN Full Stack Web Developer</strong> skilled in 
  <strong> React.js, Node.js, Express.js, MySQL, HTML, CSS,</strong> and <strong>JavaScript</strong>. 
  I specialize in building <strong>responsive</strong>, <strong>high-performance</strong>, and 
  <strong> user-friendly</strong> websites and web applications that deliver real results.
</p>
<p>
  In addition to full-time opportunities, I also work as a <strong>freelance web developer</strong>, 
  helping businesses and individuals build <strong>custom websites</strong>, 
  <strong>portfolio pages</strong>, <strong>business applications</strong>, and 
  <strong> e-commerce platforms</strong> tailored to their unique requirements.
</p>
<p>
  My expertise includes <strong>custom website development</strong>, 
  <strong> e-commerce solutions</strong>, <strong>API integration</strong>, and 
  <strong> secure payment gateway setup</strong>. I combine <strong> clean, modern designs </strong> 
   with <strong> seamless functionality</strong> to create digital solutions that meet client needs 
  and achieve business goals.
</p>

<p>
  Whether you're a business looking to establish a strong online presence or a recruiter 
  searching for a dedicated developer, I bring <strong> problem-solving skills</strong>, 
  <strong> attention to detail</strong>, and a <strong> passion for innovation</strong> to 
  every project I work on.
</p>

<p>
  Let's turn your ideas into <strong> scalable</strong>, <strong> secure</strong>, and 
  <strong> high-quality</strong> solutions that help you stand out online.
</p>

          {/* Buttons */}
          <div className="about-buttons">
            <button onClick={() => setShowHireForm(true)} className="btn hire-btn">
              Hire Me
            </button>
            <button onClick={() => setShowResume(true)} className="btn resume-btn">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* Hire Me Form */}
      {showHireForm && (
        <div className="popup-overlay">
          <div className="popup-container">
            <button className="close-btn" onClick={() => setShowHireForm(false)}>✖</button>
            {!submitted ? (
              <form ref={form} onSubmit={sendEmail} className="contact-form">
                <h2 className="contact-title">Hire Me</h2>
                <label>Your Name</label>
                <input type="text" name="user_name" required />

                <label>Your Email</label>
                <input type="email" name="user_email" required />


                <label>Message</label>
                <textarea name="user_message" maxLength="200" placeholder="Briefly describe your project..." required />

                <button type="submit">Send Request</button>
              </form>
            ) : (
              <div className="thankyou-container">
                <h2>🎉 Thank You!</h2>
                <p>Thanks for contacting me! I'll review your message and get in touch with you soon.</p>
              </div>
            )}
          </div>
        </div>
      )}

           {/* Resume Modal */}
      {showResume && (
        <div className="popup-overlay">
          <div className="popup-container resume-popup">
            <button className="close-btn" onClick={() => setShowResume(false)}>✖</button>
            <h2>My Resume</h2>
           <iframe
  src={process.env.PUBLIC_URL + "/Manisha_Varaganti_Resume.pdf"}
  title="Resume"
  className="resume-frame"
></iframe>

<a
  href={process.env.PUBLIC_URL + "/Manisha_Varaganti_Resume.pdf"}
  download="Manisha_Varaganti_Resume.pdf"
>
  <button className="btn download-btn">Download Resume</button>
</a>

          
          </div>
        </div>
      )}
    </section>
  );
};

export default About;




