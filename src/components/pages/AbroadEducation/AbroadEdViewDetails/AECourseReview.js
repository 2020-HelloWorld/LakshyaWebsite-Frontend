import React from 'react';

const AECourseReview = ({ testimonials }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-4 -mt-20 md:-mt-20">
      <h2 className="font-oxygen text-[30px] mb-4 text-center">Student Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="border-solid border-[1px] border-gray-300 p-3 rounded-lg">
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p>{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AECourseReview;
