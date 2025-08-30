import React from "react";
import { useInView } from "react-intersection-observer"; // ✅ Import useInView
import "./Services.css";

// Import your images
import apiImg from "../assets/api1.png";
import ecommerceImg from "../assets/ecommerce2.png";
import paymentImg from "../assets/payment1.png";
import responsiveImg from "../assets/responsive1.webp";
import webImg from "../assets/web1.jpg";
import StaticImg from "../assets/static.jpg"

const ServiceCard = ({ img, alt, title }) => {
  // ✅ Use useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.2,    // Trigger when 20% of the element is visible
  });

  return (
    // ✅ Add the ref and a dynamic class based on inView status
    <div ref={ref} className={`service-card ${inView ? "is-visible" : ""}`}>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
};

const Services = () => {
  // Define your services data to make it more manageable
  const servicesData = [
    {
      img: webImg,
      alt: "Custom Website Development",
      title: "Custom Website Development",
    },
    {
      img: responsiveImg,
      alt: "Responsive Design",
      title: "Responsive Design",
    },
    {
      img: apiImg,
      alt: "API Development & Integration",
      title: "API Development & Integration",
    },
    {
      img: ecommerceImg,
      alt: "E-commerce Functionality",
      title: "E-commerce Functionality",
    },
    {
      img: paymentImg,
      alt: "Payment Gateway Integration",
      title: "Payment Gateway Integration",
    },
    {
      img: StaticImg,
      alt: "Static and Dynamic",
      title: "Static and Dynamic",
    },
  ];

  return (
    <section className="services-section" id="services">
      <h2 className="services-title">My Services</h2>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            img={service.img}
            alt={service.alt}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;