// Card.js
import React from 'react';
import calendar from "../../../../../static/logo/calendar.svg";
import location from "../../../../../static/logo/location.svg";
import share from "../../../../../static/logo/share.svg";
import bookmark from "../../../../../static/logo/bookmark.svg";

const Card = ({ event }) => {
  return (
    <div className="bg-white w-[320px] h-full mx-4 my-2 hover:shadow hover:rounded-lg rounded-lg shadow-xl">
      <div className="top flex justify-center rounded-lg">
        <img
          className="w-full h-full object-cover p-2"
          src={event.image}
          alt={event.title}
        />
      </div>
  <div className="title font-semibold text-xs my-1 mx-4 flex items-center justify-between">
      <div>
        {event.title} {/*Title on the left side below the image*/}
      </div>

      <div className="top flex items-start justify-end mt-2 space-x-2">
        <button className='bg-white rounded-lg'>
          <img
            className="w-6 h-6 object-cover"
            src={share} // Share Icon on top-right side,same line as title
            alt="Share Icon"
          />
        </button>
        <button className='bg-white rounded-lg'>
          <img
            className="w-6 h-6 object-cover"
            src={bookmark} // BookMark Icon on top-right side,same line as title
            alt="Bookmark Icon"
          />
        </button>
      </div>

</div>
      
 { /* {-----------------Respective fields starts--------------} */ }
  <div className="bottom flex flex-col justify-center items-start p-3">
    
    <div className="category text-xs font-light my-1 mx-4 flex items-center">
      
      {event.category}
    </div>
  
    <div className="text-xs my-1 mx-4 flex items-center">
      <img
        className="w-4 h-4 mr-2"
        src={calendar} 
        alt="Date Icon"
      />
      {event.date}
    </div>
    <div className="text-xs my-1 mx-4 flex items-center">
      <img
        className="w-4 h-4 mr-2"
        src={location} 
        alt="Location Icon"
      />
      {event.location}
    </div>

    <div className="flex items-center my-1 mx-4">

      <div className="price text-blue-500 mr-2">{event.price}</div>onwards

      <button className="px-3 py-2 mx-5 text-[14px]  bg-blue-500 text-white">
        Register Now
      </button>

    </div>

  </div>
{ /* {-----------------Respective fields ends--------------} */ }


</div>
  );
};

export default Card;
