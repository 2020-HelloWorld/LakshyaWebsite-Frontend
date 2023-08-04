import React, { useState } from 'react';
import cimage from "../../../../static/design/companylogin.png"
import CourseFilter from './CourseFilter';
import start from '../../../../static/logo/start.svg';
import user from '../../../../static/logo/topimg3.svg';
import language from '../../../../static/logo/translate.png';
import category1 from '../../../../static/logo/apps.svg'
import { Link } from 'react-router-dom';

const courseData = [
  {
    id: 1,
    name: 'Course 1',
    startDate: '2023-07-20',
    numLearners: 300,
    language: 'English',
    image: cimage,
    category: 'Web Development',
  },
  {
    id: 2,
    name: 'Course 2',
    startDate: '2023-08-05',
    numLearners: 500,
    language: 'Spanish',
    image: 'https://via.placeholder.com/300',
    category: 'Data Science',
  },
  {
    id: 3,
    name: 'Course 3',
    startDate: '2023-08-05',
    numLearners: 500,
    language: 'Spanish',
    image: 'https://via.placeholder.com/300',
    category: 'Business',
  },
  {
    id: 4,
    name: 'Course 4',
    startDate: '2023-08-05',
    numLearners: 500,
    language: 'Spanish',
    image: 'https://via.placeholder.com/300',
    category: 'Web Development',
  },
  {
    id: 5,
    name: 'Course 5',
    startDate: '2023-08-05',
    numLearners: 500,
    language: 'Spanish',
    image: 'https://via.placeholder.com/300',
    category: 'Web Development',
  },

  // Add more courses as needed
];

const logos = [
  {
    alt: 'Followers Logo',
    src: start,
  },
  {
    alt: 'Briefcase Logo',
    src: user,
  },
  {
    alt: 'Building Logo',
    src: language,
  },
  {
    alt: 'Location Logo',
    src: category1,
  },
  // Add more logo objects as needed
];

const CourseList = () => {
  const [title, setTitle] = useState('');
  const [learners, setLearner] = useState('');
  const [language, setLanguage] = useState('');
  const [category, setCategory] = useState('');

  const filteredCourse = courseData.filter((course) => {
    // Apply filtering logic based on the selected filters
    return (
      course.name.toLowerCase().includes(title.toLowerCase()) &&
      (learners ? course.numLearners.toString().includes(learners) : true) &&
      course.language.toLowerCase().includes(language.toLowerCase()) &&
      (category ? course.category.toLowerCase().includes(category.toLowerCase()) : true)
    );
  });

  const handleClearAll = () => {
    setTitle('');
    setLearner('');
    setLanguage('');
    setCategory('');
  };

  // Get the list of unique categories from the courseData
  const uniqueCategories = Array.from(new Set(courseData.map((course) => course.category)));

  return (
    <div className="flex flex-col md:flex-row mt-8 md:mt-16">
    <CourseFilter
      title={title}
      learners={learners}
      language={language}
      category={category}
      setTitle={setTitle}
      setLearner={setLearner}
      setLanguage={setLanguage}
      setCategory={setCategory}
      handleClearAll={handleClearAll}
    />

    <div className="w-full p-4 md:w-3/4 overflow-auto">
      {uniqueCategories.map((category) => {
        // Filter courses by the selected category
        const filteredCoursesByCategory = filteredCourse.filter(
          (course) => course.category === category
        );

        // If there are no courses in the category after applying filters, do not display the category title
        if (filteredCoursesByCategory.length === 0) {
          return null;
        }

        return (
          <div key={category} className="mb-8">
            {/* Display the category title only if there are courses in the category */}
            <h2 className="text-2xl font-bold mb-8">{category}</h2>
            <div className="flex flex-wrap my-4">
              {filteredCoursesByCategory.map((course) => (
                <div
                  key={course.id}
                  className="w-full md:w-1/2 lg:w-1/3 mb-8"
                >
                  {/* Updated course cards */}
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden mx-4 my-4 hover:shadow-xl"
                  >
                    <img
                      className="object-cover w-full h-48 md:h-56 rounded-t-lg"
                      src={course.image}
                      alt={course.name}
                    />
                    <div className="p-6" style={{ lineHeight: '0.1' }}>
                      <h3 className="text-xl font-bold">{course.name}</h3>
                      {/* Rest of the course details here */}
                      <div className="flex items-center ">
                        <img
                          className="w-5 h-5 mr-2"
                          src={logos[0].src} // Start Date Icon
                          alt={logos[0].alt}
                        />
                        <p>{course.startDate}</p>
                      </div>
                      <div className="flex items-center ">
                        <img
                          className="w-5 h-5 mr-2"
                          src={logos[1].src} // Number of Learners Icon
                          alt={logos[1].alt}
                        />
                        <p>{course.numLearners}</p>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="w-5 h-5 mr-2"
                          src={logos[2].src} // Language Icon
                          alt={logos[2].alt}
                        />
                        <p>{course.language}</p>
                      </div>
                      <div className="flex items-center">
                        <img
                          className="w-5 h-5 mr-2"
                          src={logos[3].src} // Category Icon
                          alt={logos[3].alt}
                        />
                        <p>{course.category}</p> {/* Display the category */}
                      </div>
                      <div className="bg-blue-200 text-blue-800 font-bold px-5 py-2 rounded-lg mt-4">
                          <Link to={`/course/description/${course.id}`}>
                        <button className="bg-blue-200 text-blue-800 font-bold px-4 py-2 rounded-lg hover:underline">
                          View Details
                        </button>
                           </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div className="bg-white py-10"></div>
    </div>
  </div>
  );
};

export default CourseList;

