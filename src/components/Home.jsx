import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile2.jpg";

const Home = () => {
  return (
   <section
  className="home"
  style={{ backgroundImage: `url(${profileImg})` }}
>
  <div className="home-content">
    <h1>Hi, I'm Manisha</h1>
   <h3>Fullstack Developer</h3>
    <p>
  I'm a passionate full-stack developer with experience in building responsive, secure, 
  and scalable web applications. I specialize in React, Node.js, MongoDB/MySQL, 
  and API integrations.
</p>

    <div className="btn-box">
      <a 
  href="https://www.linkedin.com/in/manisha-varaganti/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="linkedin-btn"
>
  LinkedIn
</a>

      <Link to="/contact" className="btn contact-btn">
  Let's Talk
</Link>
    </div>
  </div>

 
</section>

  );
};

export default Home;
