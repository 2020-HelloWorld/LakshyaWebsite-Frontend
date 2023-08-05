import React from 'react';
import calendar from '../../../../static/logo/calendar.svg';
import location from '../../../../static/logo/location.svg';
import share from '../../../../static/logo/share.svg';
import speakerimage from '../../../../static/design/testimonial3.jpg';
import orgimage from '../../../../static/design/testimonial2.jpg';
import cimage from '../../../../static/design/companylogin.png';
import bookmark from '../../../../static/logo/bookmark.svg';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

const EventDetails = () => {
  const { eventId } = useParams();
  const EventDetails = {
    event: {
      title: "Event Name",
      details: {
        date: "Date of event",
        location: "Area",
        time: "9:00pm",
        category: "Online",
        image: cimage,
      },
    },
    eventInfo: {
      title: "Event Information",
      details: {
        info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna vitae massa tincidunt, eget volutpat velit vulputate. Nulla facilisi. Sed eu nunc euismod, sollicitudin erat quis, volutpat libero. In viverra consequat justo, vel ultrices elit dictum vel. Sed ultrices lacinia ipsum, ac volutpat sapien commodo vel. Ut mollis felis in lacus posuere tincidunt. Vivamus consequat, felis at consequat mollis, mauris sapien dictum lorem, vel ultrices mauris odio id justo. Proin volutpat nunc in lectus gravida, quis egestas mauris euismod. Praesent eleifend nibh et elit elementum posuere.",
        date: "Some date text",
        Time: "Time",
        eventType: "Some event type text",
        officialLinks: "Some official links text",
        venue: "Some venue text",
      },
    },
    speakerDetails: {
      name: "Speaker Details",
      details: {
        description: "Some speaker details text",
        image: speakerimage,
      },
    },
    organizerDetails: {
      name: "Organizer",
      details: {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna vitae massa tincidunt, eget volutpat velit vulputate. Nulla facilisi. Sed eu nunc euismod, sollicitudin erat quis, volutpat libero. In viverra consequat justo, vel ultrices elit dictum vel. Sed ultrices lacinia ipsum, ac volutpat sapien commodo vel. Ut mollis felis in lacus posuere tincidunt. Vivamus consequat, felis at consequat mollis, mauris sapien dictum lorem, vel ultrices mauris odio id justo. Proin volutpat nunc in lectus gravida, quis egestas mauris euismod. Praesent eleifend nibh et elit elementum posuere.",
        image:orgimage
      },
    },
  };
  const [eventData, setEventData] = useState(EventDetails);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.post("/event/details/",{eventId:eventId}) 
        .then((response)=>{
          setEventData(response.data);
        })
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEventData();
  }, []);

  if (!eventData) {
    return <div>Loading...</div>;
  }

  
  const {
    event,
    eventInfo,
    speakerDetails,
    organizerDetails,
  } = eventData;
  
  return (
    <div className="relative bg-white w-full h-auto overflow-hidden text-left text-xl text-gray-200 font-oxygen">
      <div className="bg-white py-10 text-center"></div>
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">

          <div className="bg-gainsboro h-[360px]  rounded-lg">
            <img src={event.details.image} alt="Event" className="w-full h-full object-fit:cover" />
          </div>

          <div className="flex items-center justify-between p-3">
            <div className="flex flex-col items-start gap-2">
              <b>{event.title}</b>
              <div className="grid grid-cols-2 gap-1 text-base">
                <div className="flex items-center">
                  <img className="w-4 h-4" alt="" src={calendar} />
                  <div>{event.details.date}</div>
                </div>
                <div className="flex items-center">
                  <img className="w-4 h-4" alt="" src={location} />
                  <div>{event.details.location}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-4 h-4" alt="" src={bookmark} />
              <img className="w-4 h-4" alt="" src={share} />
            </div>
          </div>
          <p className="px-3 py-2 text-deepskyblue">
            <span>{event.details.time}</span>
           
          </p>
          <div className="flex items-center justify-end p-3">
            <span className="mx-2 bg-gray-300 text-gray-700 px-2 rounded-md text-sm">
              {event.details.category}
            </span>
            <button className="bg-deepskyblue w-24 h-10 flex items-center justify-center text-white font-bold hover:bg-cornflowerblue rounded">
              Register
            </button>
          </div>

        </div>

        {/* Event Information */}
        <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">
          <h1 className="text-2xl font-bold p-3">{eventInfo.title}</h1>
          <p className="text-base ml-3">{eventInfo.details.info}</p>
          <div className="p-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-lg font-bold">Date</h2>
                <p className="text-base">{eventInfo.details.date}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Time</h2>
                <p className="text-base">{eventInfo.details.Time}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Event Type</h2>
                <p className="text-base">{eventInfo.details.eventType}</p>
              </div>
              <div>
                <h2 className="text-lg font-bold">Official Links</h2>
                <a className='text-blue-500 hover:text-cornflowerblue cursor-pointer'>{EventDetails.eventInfo.details.officialLinks}</a>
              </div>
             
              <div>
                <h2 className="text-lg font-bold">Venue</h2>
                <p className="text-base">{eventInfo.details.venue}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Speaker Details and Organizer Details */}
        <div className="flex flex-col md:flex-row mb-16 space-y-4 md:space-y-0 md:space-x-4">
          {/* Speaker Details */}
          <div className="relative rounded-lg border-[1px] border-solid border-darkgray  flex-3 flex-wrap flex-col mr-2" style={{ flex: '0 0 auto', flexShrink: '0' }}>
            <div className="bg-gainsboro md:w-80 sm:w-full  aspect-w-4 aspect-h-3 h-[225px]  rounded-lg overflow-hidden ">
              <img src={speakerDetails.details.image} alt="Speaker" className="w-full h-full object-fit:cover" />
            </div>
            <h1 className="text-xl font-bold p-3">{speakerDetails.name}</h1>
            <div className="p-1 " style={{ maxWidth: "300px" }}>
              <h2 className="text-lg font-bold">Speaker</h2>
              <p className="text-base">{speakerDetails.details.description}</p>
            </div>
          </div>

         {/* Organizer Details */}
<div className="relative rounded-lg border-[1px] border-solid border-darkgray flex-1 flex-col">
  <div className="flex items-center justify-between"> {/* Use flex, items-center, and justify-between classes */}
    <div className="bg-gainsboro w-[300px] h-[300px] rounded-lg overflow-hidden ml-4 mt-1">
      <img src={organizerDetails.details.image} alt="Organizer" className="w-full h-full object-cover" />
    </div>
    <div className="w-2/3 ml-8"> {/* Adjust the margin and width as needed */}
      <h1 className="text-2xl font-bold">{organizerDetails.name}</h1>
      <div className="p-3">
        <div>
          <h2 className="text-lg font-bold">Description</h2>
          <p className="text-base">{organizerDetails.details.description}</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
  );
};

export default EventDetails;
