import React from 'react';
import { Link } from 'react-router-dom';
import './Candidates.css'; // Add your own CSS file for styling
import NavBar from '../../../layout/Navbar/NavBar';

const Candidates = () => {
  // Dummy data for mentors, job offers, events, and testimonials
  const mentors = [
    {
      name: 'Mentor Name 1',
      course: 'Course Name 1',
      experience: '5 years',
      expertise: 'Web Development',
      availability: 'Monday to Friday',
    },
    {
      name: 'Mentor Name 2',
      course: 'Course Name 2',
      experience: '7 years',
      expertise: 'Data Science',
      availability: 'Tuesday to Saturday',
    },
    // Add more mentors as needed
  ];

  const jobOffers = [
    {
      title: 'Internship Opportunity 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.',
    },
    {
      title: 'Internship Opportunity 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.',
    },
    // Add more job offers as needed
  ];

  const events = [
    {
      name: 'Event Name 1',
      date: 'September 15, 2023',
      time: '10:00 AM - 2:00 PM',
      venue: 'Example Venue',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.',
    },
    {
      name: 'Event Name 2',
      date: 'October 5, 2023',
      time: '3:00 PM - 6:00 PM',
      venue: 'Another Venue',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in libero vel justo scelerisque malesuada. Sed sed lorem non turpis cursus auctor.',
    },
    // Add more events as needed
  ];

  const testimonials = [
    {
      content:
        'Lakshya has been a game-changer for me. The mentorship program helped me gain valuable insights and grow my skills in the industry. Highly recommended!',
      author: 'John Doe',
    },
    {
      content:
        'The internship opportunities provided by Lakshya are top-notch. I had the chance to work on real-world projects and build a strong foundation for my career.',
      author: 'Jane Smith',
    },
    // Add more testimonials as needed
  ];

  return (
    <><NavBar /><div className="homepage-container">
      <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Welcome to Lakshya</h1>
          <p>Unlock your potential with our mentors and explore amazing opportunities.</p>
          <Link to='/'><button>Get Started</button></Link>
        </div>
      </div>

      <h3 className="section-title">Mentors and Courses</h3>
      <div className="mentor-details">
        {mentors.map((mentor, index) => (
          <div key={index} className="mentor-card">
            <h3>{mentor.name}</h3>
            <p>Course: {mentor.course}</p>
            <p>Experience: {mentor.experience}</p>
            <p>Expertise: {mentor.expertise}</p>
            <p>Availability: {mentor.availability}</p>
            <button className="register-button">Register</button>
          </div>
        ))}
      </div>

      <h3 className="section-title">Internship / Job Offers</h3>
      <div className="internship-job-offers">
        {jobOffers.map((offer, index) => (
          <div key={index} className="offer-card">
            <h4>{offer.title}</h4>
            <p>Description: {offer.description}</p>
            <button className="register-button">Register</button>
          </div>
        ))}
      </div>

      <div className="events">
        <h3 className="section-title">Events</h3>
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h4>{event.name}</h4>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Venue: {event.venue}</p>
            <p>Description: {event.description}</p>
            <button className="register-button">Register</button>
          </div>
        ))}
      </div>

      <div className="testimonials">
        <h3 className="section-title">Testimonials</h3>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.content}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>

      <div className="footer">
        <p>&copy; 2023 Lakshya. All rights reserved.</p>
      </div>
    </div></>
  );
};

export default Candidates;
