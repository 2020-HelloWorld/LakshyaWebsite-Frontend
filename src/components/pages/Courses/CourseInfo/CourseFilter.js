import React from 'react';
import filter from '../../../../static/logo/filter.png';

const CourseFilter = ({
  title,
  learners,
  language,
  category,
  setTitle,
  setLearner,
  setLanguage,
  setCategory,
  handleClearAll,
}) => {
  return (
    <div className="flex flex-col w-full md:w-1/4 p-4 border border-gray-500 rounded-lg bg-white mt-4 rounded-2xl box-border min-w-[200px] min-h-[450px] max-h-[450px] overflow-auto text-lg border-[1px] border-solid border-darkgray md:ml-auto md:order-first">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img className="mr-2 w-4 h-4" src={filter} alt="Filter Icon" />
            <h2 className="text-lg font-oxygen mb-4">FILTERS</h2>
          </div>
          <button
            className="text-sm text-blue-500 ml-auto bg-white"
            onClick={handleClearAll}
          >
            CLEAR ALL
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-oxygen">Course Title</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
            placeholder="e.g. Web Dev"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-oxygen">Learners</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
            value={learners}
            placeholder="e.g.300"
            onChange={(e) => setLearner(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-oxygen">Language</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
            placeholder="e.g. English"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-oxygen">Category</label>
          <input
            type="text"
            className="border border-gray-300 rounded px-2 py-2 w-5/6 font-oxygen"
            placeholder="e.g."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseFilter;
