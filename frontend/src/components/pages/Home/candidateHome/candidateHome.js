import React from 'react';
import NavBar from '../../../layout/Navbar/NavBar';
import './Candidates.css'

const Candidates = () => {
  return (
    <div className="container">

      <NavBar />

      <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Welcome to Lakshya</h1>
          <p>Unlock your potential with our mentors and explore amazing opportunities.</p>
          <button>Get Started</button>
        </div>
      </div>

      <h3 className="section-title">Mentors and Courses</h3>
      <div className="mentor-details">
        <div className="mentor-card">
          <h3>Mentor Name 1</h3>
          <p>Course: Course Name 1</p>
          <p>Experience: 5 years</p>
          <p>Expertise: Web Development</p>
          <p>Availability: Monday to Friday</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name 2</h3>
          <p>Course: Course Name 2</p>
          <p>Experience: 7 years</p>
          <p>Expertise: Data Science</p>
          <p>Availability: Tuesday to Saturday</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name 3</h3>
          <p>Course: Course Name 3</p>
          <p>Experience: 3 years</p>
          <p>Expertise: Mobile App Development</p>
          <p>Availability: Monday, Wednesday, Friday</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name 4</h3>
          <p>Course: Course Name 4</p>
          <p>Experience: 6 years</p>
          <p>Expertise: Machine Learning</p>
          <p>Availability: Tuesday, Thursday, Saturday</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name 5</h3>
          <p>Course: Course Name 5</p>
          <p>Experience: 4 years</p>
          <p>Expertise: UI/UX Design</p>
          <p>Availability: Monday to Saturday</p>
          <button className="register-button">Register</button>
        </div>
        <div className="mentor-card">
          <h3>Mentor Name 6</h3>
          <p>Course: Course Name 6</p>
          <p>Experience: 8 years</p>
          <p>Expertise: Full Stack Development</p>
          <p>Availability: Monday, Wednesday, Friday, Saturday</p>
          <button className="register-button">Register</button>
        </div>
      </div>      {/* Internship and Job Offers */}
      
        
      <h3 className="section-title">Internship / Job Offers</h3>
      <div className="internship-job-offers">
        {/* Offer Card 1 */}
        <div className="offer-card">
          <h4>Internship Opportunity 1</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 2 */}
        <div className="offer-card">
          <h4>Internship Opportunity 2</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 3 */}
        <div className="offer-card">
          <h4>Job Offer 1</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 4 */}
        <div className="offer-card">
          <h4>Internship Opportunity 3</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 5 */}
        <div className="offer-card">
          <h4>Job Offer 2</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 6 */}
        <div className="offer-card">
          <h4>Internship Opportunity 4</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 7 */}
        <div className="offer-card">
          <h4>Job Offer 3</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>

        {/* Offer Card 8 */}
        <div className="offer-card">
          <h4>Internship Opportunity 5</h4>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
      </div>

      <div className="events">
        <h3 className="section-title">Events</h3>
        <div className="event-card">
          <h4>Event Name 1</h4>
          <p>Date: September 15, 2023</p>
          <p>Time: 10:00 AM - 2:00 PM</p>
          <p>Venue: Example Venue</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card">
          <h4>Event Name 2</h4>
          <p>Date: October 5, 2023</p>
          <p>Time: 3:00 PM - 6:00 PM</p>
          <p>Venue: Another Venue</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card">
          <h4>Event Name 3</h4>
          <p>Date: November 10, 2023</p>
          <p>Time: 9:00 AM - 12:00 PM</p>
          <p>Venue: Third Venue</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card">
          <h4>Event Name 4</h4>
          <p>Date: December 1, 2023</p>
          <p>Time: 2:00 PM - 5:00 PM</p>
          <p>Venue: Fourth Venue</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card">
          <h4>Event Name 5</h4>
          <p>Date: January 15, 2024</p>
          <p>Time: 10:00 AM - 1:00 PM</p>
          <p>Venue: Fifth Venue</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
        <div className="event-card">
          <h4>Event Name 6</h4>
          <p>Date: February 20, 2024</p>
          <p>Time: 3:00 PM - 6:00 PM</p>
          <p>Venue: Sixth Venue</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.</p>
          <button className="register-button">Register</button>
        </div>
      </div>

      <div className="testimonials">
      <h3 className="section-title">Testimonials</h3>
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