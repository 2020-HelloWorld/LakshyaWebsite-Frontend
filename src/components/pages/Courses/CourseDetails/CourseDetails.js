import React from 'react';
import CourseTitle from './CourseTitle';
import CourseDescription from './CourseDescription';
import CourseInstructor from './CourseInstructor';
import CourseReview from './CourseReview';
import { Navbar,Footer } from '../../../layout';

const CourseDetails = {
  id: 123,
  title: 'Dummy Course Title',
  description: 'Lorem impsum dolor sit amet consectutor.Lectus diam elefiend nulla est sit vulputate.Molestie adipiscing curabitur felis elit rhoncus malesuda massa morbi natta.',
  imageUrl: 'https://example.com/course-image.jpg',
  weeks: 12,
  registeredPeople: 1200,
  rating: 4.8,
  price:1400,
  info:'Lorem impsum dolor sit amet consectutor.Lectus diam elefiend nulla est sit vulputate',
  perks: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Curabitur felis elit, rhoncus malesuada massa ut, rhoncus malesuada massa ut.',
  ],
  training: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Curabitur felis elit, rhoncus malesuada massa ut, rhoncus malesuada massa ut.',
  ],
  teacherDetails: {
    name: 'John Doe',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur felis elit, rhoncus malesuada massa ut, rhoncus malesuada massa ut.',
    imageUrl: 'https://example.com/teacher-image.jpg',
  },
  syllabus: [
    {
      topics: ['Module 1:Introduction to the course'],
    },
    {
      topics: ['Module 2: Lorem ipsum dolor sit amet'],
    },
    {
      topics: ['Module 3: Curabitur felis elit'],
    },
    {
      topics: ['Module 4: Rhoncus malesuada massa ut'],
      // Add more topics as needed for each module
    },
  ],
  testimonials: [
    {
      id: 1,
      name: 'John Smith',
      comment:
        'This course has been a game-changer for me. The instructor explains complex topics in a simple and engaging manner.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      comment:
        'I highly recommend this course to anyone looking to learn and master the subject. The syllabus is well-structured and covers everything you need to know.',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      comment:
        'The teacher is knowledgeable and passionate about the topic. The training material is top-notch and easy to follow.',
    },
    {
      id: 4,
      name: 'Emily Williams',
      comment:
        'I am amazed by the quality of this course. The teacher\'s expertise and teaching style make learning enjoyable.',
    },
  ],
};

const CourseDetailsPage = () => {
  return (
    <div>
    <Navbar/>
      <CourseTitle
        title={CourseDetails.title}
        description={CourseDetails.description}
        imageUrl={CourseDetails.imageUrl}
        weeks={CourseDetails.weeks}
        registeredPeople={CourseDetails.registeredPeople}
        rating={CourseDetails.rating}
        price={CourseDetails.price}
      />
     <CourseDescription
        info={CourseDetails.info}
        perks={CourseDetails.perks}
        training={CourseDetails.training}
      />
     <CourseInstructor
          teacherDetails={CourseDetails.teacherDetails}
          syllabus={CourseDetails.syllabus}
        />
      <CourseReview testimonials={CourseDetails.testimonials} />
      

        
      <Footer/>
    </div>
  );
};

export default CourseDetailsPage;
