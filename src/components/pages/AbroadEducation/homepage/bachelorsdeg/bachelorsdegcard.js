import React from 'react'
import share from "../../../../../static/logo/share.svg";
import bookmark from "../../../../../static/logo/bookmark.svg";

//     id: 1,
//     title:'Course 1'
//     onlinedur:'3 weeks',
//     offlinedur:'4 weeks',
//     onlinefees:'1000rs',
//     offlinefees:'1000rs',
//     image:techtribe

const bachelorsdegcard = ({deg1}) => {
    return(
        <div className="bg-white w-[320px] h-full mx-4 my-2 hover:shadow hover:rounded-lg rounded-lg shadow-xl">
        <div className="top flex justify-center rounded-lg">
          <img
            className="w-full h-full object-cover p-2"
            src={deg1.image}
            alt={deg1.title}
          />
        </div>
    <div className="title font-semibold font-oxygen text-[1.7rem] my-1 mx-4 flex items-center justify-between">
        <div>
          {deg1.title} {/*Title on the left side below the image*/}
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

    <div className='font-semibold mx-1.5'>
          DURATION {/*Title on the left side below the image*/}
       </div>
      <div className="category text-xs font-light my-1 mx-4 flex items-center">
      
        <div className="flex items-center text-slate-700 mb-4 ml-2">
        online: {deg1.onlinedur}
        <span className="mx-2"></span>
        offline: {deg1.offlinedur}
        </div>
      </div>


      <div className="font-semibold mx-1.5">
      FEES {/*Title on the left side below the image*/}
    </div>
      <div className="category text-xs font-light my-1 mx-4 flex items-center">
      
    
    <div className="flex items-center text-slate-700 mb-4 ml-2">
      online: {deg1.onlinefees}
      <span className="mx-2"></span>
      offline: {deg1.offlinefees}
    </div>
  
  </div>
    
      
  
      <div className="flex items-center my-2 justify-center">  
        <button className="px-3 py-2 mx-2 text-[14px]  bg-blue-500 text-white">
          View Details
        </button>
  
      </div>
  
    </div>
  { /* {-----------------Respective fields ends--------------} */ }
  
  
  </div>
    )
  
}

export default bachelorsdegcard