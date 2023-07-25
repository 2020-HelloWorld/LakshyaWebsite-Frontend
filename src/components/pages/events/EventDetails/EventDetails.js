import calendar from '../../../../static/logo/calendar.svg';
import location from '../../../../static/logo/location.svg';
import share from '../../../../static/logo/share.svg';
import cimage from "../../../../static/design/companylogin.png";
import bookmark from '../../../../static/logo/bookmark.svg';

const EventDetails = () => {
  const eventDetails = {
    event: {
      title: "Event Name",
      details: {
        date: "Date of event",
        location: "Area",
        price: "Registration fees",
        category:"category",
        image: './image', 
      }
    },
    eventInfo: {
      title: "Event Information",
      details: {
        date: "Some date text",
        fees: "Some entry fees text",
        eventType: "Some event type text",
        officialLinks: "Some official links text",
        editions: "Some editions text",
        venue: "Some venue text",
      },
      
    },
    speakerDetails: {
      title: "Speaker Details",
      details: {
        speaker: "Some speaker details text",
        image: './speakerImage',
      },
     
    },
    locationDetails: {
      title: "Location Details",
      details: {
        location: "Some location details text",
        image: './locationImage',
      },
     
    },
    organizerDetails: {
      title: "Organizer Details",
      details: {
        organizer: "Some organizer details text",
      },
    },
  };

  return (
    <div className="relative bg-white w-full h-auto overflow-hidden text-left text-xl text-gray-200 font-oxygen">
      <div className="bg-white py-10 text-center"></div>
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">
          
            <div className="bg-gainsboro h-[360px] rounded-lg">
              <img src={eventDetails.event.details.image} alt="Event" className="w-full h-full object-cover" />
            </div>
          
          <div className="flex items-center justify-between p-3">
            <div className="flex flex-col items-start gap-2">
              <b>{eventDetails.event.title}</b>
              <div className="grid grid-cols-2 gap-1 text-base">
                <div className="flex items-center">
                  <img className="w-4 h-4" alt="" src={calendar} />
                  <div>{eventDetails.event.details.date}</div>
                </div>
                <div className="flex items-center">
                  <img className="w-4 h-4" alt="" src={location} />
                  <div>{eventDetails.event.details.location}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-4 h-4" alt="" src={bookmark} />
              <img className="w-4 h-4" alt="" src={share}/>
            </div>
          </div>
          <p className="px-3 py-2 text-deepskyblue">
            <span>{eventDetails.event.details.price}</span>
            <span className="text-gray-200"> Onwards</span>
          </p>
          <div className="flex items-center justify-end p-3">
          <span className="mx-2 bg-gray-300 text-gray-700 px-2 rounded-md text-sm">
                          {eventDetails.event.details.category}
                        </span>
            <button className="bg-deepskyblue w-24 h-10 flex items-center justify-center text-white font-bold hover:bg-cornflowerblue rounded">
              Register
            </button>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">
            
              <div className="bg-gainsboro h-[250px] rounded-lg">
                <img src={eventDetails.speakerDetails.details.image} alt="Speaker" className="w-full h-full  object-cover" />
              </div>
           

            <h1 className="text-2xl font-bold p-3">{eventDetails.speakerDetails.title}</h1>
            <div className="p-3">
            <h2 className="text-lg font-bold">Speaker</h2>
            <p className="text-base">{eventDetails.speakerDetails.details.speaker}</p>
          </div>
          </div>

          <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">
           

            <h1 className="text-2xl font-bold p-3">{eventDetails.eventInfo.title}</h1>
            <div className="p-3">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(eventDetails.eventInfo.details).map(([key, value]) => (
                  <div key={key}>
                    <h2 className="text-lg font-bold">{key}</h2>
                    <p className="text-base">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">
            
              <div className="bg-gainsboro h-[225px] rounded-lg">
                <img src={eventDetails.locationDetails.details.image} alt="Location" className="w-full h-full object-cover" />
              </div>
            

            <h1 className="text-2xl font-bold p-3">{eventDetails.locationDetails.title}</h1>
            <div className="p-3">
            <h2 className="text-lg font-bold">Location</h2>
            <p className="text-base">{eventDetails.locationDetails.details.location}</p>
          </div>
          </div>

          <div className="relative rounded-lg border-[1px] border-solid border-darkgray mb-5">
            

            <h1 className="text-2xl font-bold p-3">{eventDetails.organizerDetails.title}</h1>
            <div className="p-3">
              {Object.entries(eventDetails.organizerDetails.details).map(([key, value]) => (
                <div key={key}>
                  <h2 className="text-lg font-bold">{key}</h2>
                  <p className="text-base">{value}</p>
                </div>
              ))}
              <button className="bg-deepskyblue w-24 h-10 flex items-center justify-center text-white font-bold  ml-auto mt-24 hover:bg-cornflowerblue rounded">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-10 text-center"></div>
    </div>
  );
};

export default EventDetails;
