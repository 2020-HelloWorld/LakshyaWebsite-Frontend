import React from 'react';
import './Candidates.css';

const Candidates = () => {
  return (
    <div className="container">
      {/* <nav className="navbar">
        <div className="company-name">Lakshya</div>
        <div className="login-signup-button">
          <button>Login / Signup</button>
        </div>
      </nav> */}

    <nav className="navbar">
      <div className="navbar-left">
        <img src={process.env.PUBLIC_URL + '/logo.jpeg'}  alt="Company Logo" className="logo" />
        <div className="company-name">Lakshya</div>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Contact Us</button>
        <button className="navbar-button">Get Started</button>
        <button className="login-signup-button">Log In / Sign Up</button>
      </div>
    </nav>

      <div className="hero">
        <h1>Welcome to Lakshya</h1>
        <p>Unlock your potential with our mentors and explore amazing opportunities.</p>
        <button>Get Started</button>
      </div>

      <div className="mentor-details">
        <div className="mentor-card">
          <h3>Mentor Name</h3>
          <p>Course: Course Name</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name</h3>
          <p>Course: Course Name</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name</h3>
          <p>Course: Course Name</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name</h3>
          <p>Course: Course Name</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name</h3>
          <p>Course: Course Name</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name</h3>
          <p>Course: Course Name</p>
          <button className="register-button">Register</button>
        </div>
      </div>
      {/* Internship and Job Offers */}
      <div className="internship-job-offers">
        {/* Offer Card 1 */}
        <div className="offer-card">
          <h4>Internship Opportunity 1</h4>
          <button>Register</button>
        </div>

        {/* Offer Card 2 */}
        <div className="offer-card">
          <h4>Internship Opportunity 2</h4>
          <button>Register</button>
        </div>

        {/* Offer Card 3 */}
        <div className="offer-card">
          <h4>Job Offer 1</h4>
          <button>Register</button>
        </div>
      </div>
      <div className="testimonials">
        <div className="testimonial-card">
          <p>"Lakshya has been a game-changer for me. The mentorship program helped me gain valuable insights and grow my skills in the industry. Highly recommended!"</p>
          <p className="testimonial-author">- John Doe</p>
        </div>
        <div className="testimonial-card">
          <p>"The internship opportunities provided by Lakshya are top-notch. I had the chance to work on real-world projects and build a strong foundation for my career."</p>
          <p className="testimonial-author">- Jane Smith</p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2023 Lakshya. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Candidates;