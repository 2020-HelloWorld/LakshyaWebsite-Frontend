import React from 'react';
import characters from '../../../static/design/characters.svg';

const Vision = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between my-8">
      <div className="flex-1 px-4 my-4">
        <h2>
          <b className="text-[35px] md:text-[4xl] font-semibold text-gray-800 mx-2 md:mx-8">
            About Us
          </b>
        </h2>
        <p className="text-base md:text-[19px] mx-2 md:mx-8">
          Lakshya empowers women and students through 1000 women leaders as mentors and role models, offering career resources, career previews, and a supportive peer community. Mentors help discover interests and provide guidance.
        </p>
        <p className="text-base md:text-[19px] mx-2 md:mx-8">
          Lakshya promotes women in STEM fields, assists students in Tier 2 and 3 cities, and supports entrepreneurship programs for women and students.
        </p>
        <br></br><br></br>
        <h2>
          <b className="text-[35px] md:text-4xl font-semibold text-gray-800 mx-2 my-[20px] md:mx-8">
            Vision
          </b>
        </h2>
        <p className="text-base md:text-[19px] mx-2 md:mx-8">
          At Lakshya we have a vision to empower women and provide training to them to ensure that they are confident and get back to the workforce. Lakshya has a vision to ensure that students are provided industry-ready training programs that help them to secure right jobs. We have an objective to work with Tier2 and Tier3 city college students and provide them internship projects which will get them exposure to projects and the latest technological trends.
        </p>
        <p className="text-base md:text-[19px] mx-2 md:mx-8">
          For students who aspire to go abroad we provide trainings on IELTS / PTE / OTE. We have tie-up with more than 350 colleges across AU/ NZ / Singapore / US / UK / Malaysia to study Abroad.
        </p>
        <p className="text-base md:text-[19px] mx-2 md:mx-8">
          We provide them the right career guidance which will help them secure good scholarships based on their merit and profile.
        </p>
      </div>
      <div className="flex-1 px-8 my-4">
        <img src={characters} alt="Your Image" className="max-w-full" />
      </div>
    </div>
  );
};

export default Vision;
