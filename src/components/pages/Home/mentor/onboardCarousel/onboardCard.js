import React from 'react'

const onboardCard = ({mentor}) => {
  return (
    <div className="bg-white w-[260px] h-full mx-4 mb-8 hover:shadow hover:rounded-lg rounded-lg shadow-xl">
  <div className="top flex justify-center rounded-t-lg">
    <img
      className="w-[12rem] h-[12rem] p-2"
      src={mentor.image} // Replace with mentor image
      alt={mentor.name} // Use mentor name as alt text
    />
  </div>
  <div className="title font-semibold text-xl my-1 mx-7">
    <div>
      {mentor.name} {/* Mentor name */}
    </div>
  </div>

  <div className="bottom flex flex-col justify-center items-start p-3">
    <div className="category text-xs font-light my-1 mx-4 flex items-center">
      {mentor.content} {/* Mentor content */}
    </div>
    
  </div>
</div>

  )
}

export default onboardCard