import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Smriti',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mauris eu lorem mattis commodo.',
      image: 'testimonial1.jpg', // Replace with the URL of Smriti's image
    },
    {
      id: 2,
      name: 'Ananya',
      content: 'Nullam tincidunt dolor et lacus luctus, et consectetur nisl ultrices. Fusce sit amet sagittis lorem.',
      image: 'testimonial2.jpg', // Replace with the URL of Ananya's image
    },
    {
      id: 3,
      name: 'Mayank',
      content: 'Vivamus gravida lacus vel tellus ullamcorper, ac tempus lacus vulputate. Sed vel malesuada felis.',
      image: 'testimonial3.jpg', // Replace with the URL of Mayank's image
    },
  ];

  return (
    <div className='testimonial-background'>
       
    <div className="testimonial-container">
    
      {testimonials.map(testimonial => (
        <div className="testimonial-panel" key={testimonial.id}>
          <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
          <p className="testimonial-content">{testimonial.content}</p>
          <p className="testimonial-name">- {testimonial.name}</p>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default Testimonial;
