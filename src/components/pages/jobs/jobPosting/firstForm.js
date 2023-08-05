import React from 'react';

const firstForm = ({ formData, onChange, onNextStep }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNextStep(); // Move to the next step
  };
  return (
    <>
    <div className="flex items-center justify-center py-12">
      <div className="bg-lavender w-[60rem] h-[10rem] flex items-center justify-center rounded-lg">
        <span className="text-black text-[30px] font-semibold">Post a Job</span>
      </div>
    </div>
    <div className="bg-gray-100 flex justify-center py-12 my-12">
      <div className="bg-white w-[60%] px-8 py-8 pl-6 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Post a Job</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-700 font-medium mb-2">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="title"
            className="border border-gray-300 rounded px-3 py-2 w-[95%]"
            placeholder="Job Title"
            
            value={formData.jobTitle}
                onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startdate" className="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              type="date"
              id="startdate"
              name="startdate"
              className="border border-gray-300 rounded px-3 py-2 w-[95%]"
              placeholder="startdate"
              value={formData.startdate}
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="applyBefore" className="block text-gray-700 font-medium mb-2">Apply Before</label>
            <input
              type="date"
              id="applyBefore"
              name="applyBefore"
              className="border border-gray-300 rounded px-3 py-2 w-[95%]"
              placeholder="applyBefore"
              value={formData.applyBefore}
                onChange={handleChange}
              />
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">TYPE</label>
            <input
              type="text"
              id="type"
              name="type"
              className="border border-gray-300 rounded px-3 py-2 w-[95%]"
              placeholder="Full time or Part time"
              value={formData.type}
                onChange={handleChange}
              />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="Duration" className="block text-gray-700 font-medium mb-2">Duration</label>
            <input
                type="text"
                name="duration"
                id="duration"
                className="border border-gray-300 rounded px-3 py-2 w-[95%]"
                placeholder="MM/YYYY"
                pattern="^(0[1-9]|1[0-2])\/\d{4}$"
                title="Please enter the duration in MM/YYYY format (e.g., 07/2023)"
                value={formData.duration}
                onChange={handleChange}
                />

          </div> */}
          <div className="mb-4">
          <label htmlFor="Salary" className="block text-gray-700 font-medium mb-2">Salary(in LPA)</label>
          <input
            type="number"
            name="salary"
            id="salary"
            className="border border-gray-300 rounded px-3 py-2 w-[95%]"
            placeholder="Enter salary amount"
            min="1"
            step="0.01"
            value={formData.salary}
                onChange={handleChange}
            />

          </div>
          <div className="mb-4">
          <label htmlFor="MinExperience" className="block text-gray-700 font-medium mb-2">Minimum Experience Required(in yrs)</label>
          <input
            type="number"
            name="MinExperience"
            id="MinExperience"
            className="border border-gray-300 rounded px-3 py-2 w-[95%]"
            placeholder="Minimum Experience"
            min="0"
            step="0.1"
            value={formData.MinExperience}
                onChange={handleChange}
            />

          </div>
          
          <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-medium mb-2">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            className="border border-gray-300 rounded px-3 py-2 w-[95%]"
            placeholder="Location"
            
            value={formData.location}
                onChange={handleChange}
            />
          </div>
          
          <div className="mb-4">
          <label htmlFor="NumberOfOpenings" className="block text-gray-700 font-medium mb-2">Number Of openings</label>
          <input
            type="number"
            name="numberOfOpenings"
            id="numberOfOpenings"
            className="border border-gray-300 rounded px-3 py-2 w-[95%]"
            placeholder="Enter number of openings"
            min="1"
            value={formData.numberOfOpenings}
                onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white text-[18px] px-8 py-3  rounded font-medium hover:bg-blue-600"
          >
            Next
          </button>
        </form>
      </div>
    </div>

    </>
  );
};

export default firstForm;