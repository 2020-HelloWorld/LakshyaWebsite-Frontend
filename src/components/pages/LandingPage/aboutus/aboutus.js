import React, { useEffect } from 'react';
import './aboutus.css';
import aboutUsImage from '../../../../static/design/student.png';

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
          <img src={aboutUsImage} alt="About Us" />
        </div>
        <div className="about-us-content">
          <h2>About Us</h2>
          <p>
          Lakshya aims to empower women and students by leveraging the expertise of over 1000 women leaders who will serve as mentors and role models. Our mentors will work closely with women and students to help them discover their interests and provide guidance. We are committed to offering a wide range of career resources, including career-specific learning opportunities, career previews, corporate interactions, informative blogs, engaging webinars, live sessions, and a supportive peer community. Our focus extends to promoting women in STEM fields and assisting students in Tier 2 and Tier 3 cities to become industry-ready through targeted training programs. As a core initiative, Lakshya also actively promotes entrepreneurship programs for women and students, collaborating with incubation centers to provide comprehensive training and empowerment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
