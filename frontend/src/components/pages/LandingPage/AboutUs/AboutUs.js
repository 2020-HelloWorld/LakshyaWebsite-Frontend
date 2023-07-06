import React, { useEffect } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    const aboutUsSection = document.querySelector('.about-us');

    const fadeInOnScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const aboutUsObserver = new IntersectionObserver(fadeInOnScroll, {
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold value as needed
    });

    aboutUsObserver.observe(aboutUsSection);

    return () => {
      aboutUsObserver.unobserve(aboutUsSection);
    };
  }, []);

  return (
    <section className="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src="./student.png" alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit....
          </p>
          {/* Additional content */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
