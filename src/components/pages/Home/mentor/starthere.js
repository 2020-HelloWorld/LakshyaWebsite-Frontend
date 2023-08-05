import React from 'react'
import starthereimg from '../../../../static/design/starthere.svg'

const starthere = () => {
  return (
    
<section className="bg-white py-16">
  <div className="mx-auto text-center mb-8">
    <h1 className="text-[35px] font-oxygen">
      How can I be a part of the Mentoring Platform?
    </h1>
  </div>
  <div className="flex justify-center items-center md:px-8">
    <div className="p-8 bg-lightsteelblue rounded-md md:w-3/4 flex flex-col md:flex-row justify-center md:justify-start items-center">
      <div className="md:w-1/2 p-2">
        <img src={starthereimg} alt="Mentor" className="w-[15rem] h-[15rem] rounded-md" />
      </div>
      <div className="md:w-1/2 md:pl-2 my-4">
        <h2 className='font-oxygen font-thin'>Create Your Mentor Profile</h2>
        <p className="text-gray-700 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor nisl nec ex facilisis, a ultrices quam vehicula. Nulla vel scelerisque odio.
        </p>
        <div className="mt-4">
          <button className="bg-gray-100 text-white px-4 py-2 rounded">
            Start here
          </button>
        </div>
      </div>
    </div>
  </div>
</section>



    
  )
}

export default starthere 