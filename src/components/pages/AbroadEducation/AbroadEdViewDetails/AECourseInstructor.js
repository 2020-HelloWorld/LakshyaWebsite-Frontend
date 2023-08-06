import React from 'react';

const AECourseInstructor = ({ teacherDetails, syllabus }) => {
  return (
    <div className="flex justify-center items-start h-screen px-3">
      <div className="shadow-lg rounded-lg overflow-hidden w-2/3 mt-10">
        {/* Box with course syllabus */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div className="p-4">
            <h3 className="mb-4 text-center font-oxygen">Course Syllabus</h3>
            {syllabus.map((module, index) => (
              <div key={index} className="mb-4">
                <details>
                  <summary className="font-bold cursor-pointer">{`Module ${index + 1}`}</summary>
                  <ul className="ml-4 list-disc">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex}>{topic}</li>
                    ))}
                  </ul>
                </details>
                {index < syllabus.length - 1 && (
                  <div className="border-solid border-[1px] border-gray-400 my-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Box with teacher details */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all mt-5">
          <div className="p-4">
            <h3 className="mb-4 font-oxygen">About the Teacher</h3>
            <img
              src={teacherDetails.imageUrl}
              alt={teacherDetails.name}
              className="rounded-full w-24 h-24 object-cover mb-4"
            />
            <h4 className="mb-2">{teacherDetails.name}</h4>
            <p className=" max-h-40 overflow-y-auto">{teacherDetails.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AECourseInstructor;
