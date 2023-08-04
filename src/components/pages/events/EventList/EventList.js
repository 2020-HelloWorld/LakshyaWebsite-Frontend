import React, { useState,useEffect } from "react";
import EventSearch from "./EventSearch";
import axios from "axios";
import banner from "../../../../static/design/eventbanner.svg";
import calendar from "../../../../static/logo/calendar.svg";
import location from "../../../../static/logo/location.svg";
import share from "../../../../static/logo/share.svg";
import bookmark from "../../../../static/logo/bookmark.svg";
import { Link } from 'react-router-dom';
const EventList = () => {
  // const eventsData = [
  //   {
  //     id: 1,
  //     title: "The Test Tribe",
  //     date: "Jul 15",
  //     location: "Topsia, Kolkata",
  //     price: "₹ 100",
  //     image: cimage,
  //     category: "Tech Conference",
  //   },
  //   {
  //     id: 2,
  //     title: "Event 2",
  //     date: "Aug 10",
  //     location: "City 2",
  //     price: "₹ 200",
  //     image: "/event2.jpg",
  //     category: "Seminar",
  //   },
  //   {
  //     id: 3,
  //     title: "Event 3",
  //     date: "Sep 5",
  //     location: "City 3",
  //     price: "₹ 150",
  //     image: "/event3.jpg",
  //     category: "Workshop",
  //   },
  //   {
  //     id: 4,
  //     title: "Event 4",
  //     date: "Sep 5",
  //     location: "City 3",
  //     price: "₹ 150",
  //     image: "/event3.jpg",
  //     category: "Tech Conference",
  //   },
    
  // ];
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState(events);
  // Function to group events by categories
  const groupEventsByCategory = (eventsData) => {
    const groupedEvents = {};
    eventsData.forEach((event) => {
      const { category } = event;
      if (groupedEvents[category]) {
        groupedEvents[category].push(event);
      } else {
        groupedEvents[category] = [event];
      }
    });
    return groupedEvents;
  };


  const fetchEvents = async () => {
    try {
      const response = await axios.post("/event/events/",{})
      .then((response)=>{
        setEvents(response.data);
        setFilteredEvents(response.data); 
        console.log(response.data)
      }) 
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // const [filteredEvents, setFilteredEvents] = useState(events);

  const handleSearch = (filteredEvents) => {
    setFilteredEvents(filteredEvents);
  };

  // Group events by categories
  const groupedEvents = groupEventsByCategory(filteredEvents);
  
  //sending eventID to backend
  const sendEventIdToBackend = async (eventId) => {
    try {
      await axios.post("/event/detail/", { eventId });
    } catch (error) {
      console.error("Error sending event ID to the backend:", error);
    }
  };
  return (
    <div className="relative bg-white w-full min-h-screen overflow-hidden text-left text-xl text-gray-200 font-oxygen">
      <div className="bg-white py-4 text-center"></div>
      <div className="relative bg-lavender flex flex-col md:flex-row items-start md:items-center mx-auto w-10/12 md:w-full max-w-screen-xl h-auto py-4 px-6 md:px-12 md:py-6 text-center rounded-lg">
        <div className="w-full md:w-[30%] hidden md:block">
          <img className="w-full" src={banner} alt="Image" />
        </div>
        <div className="w-full md:w-[70%]">
          <h2 className="font-semibold text-4xl mt-12">Events</h2>
          <p className="text-2xl">All the upcoming events will be displayed here</p>
        </div>
      </div>
      <div className="bg-white py-4 text-center"></div>
      <EventSearch events={events} onSearch={handleSearch} />
      <div className="mt-12 mx-auto max-w-screen-xl px-6 md:px-8 lg:px-10 xl:px-12">
        {Object.entries(groupedEvents).map(([category, events]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="relative bg-white rounded-xl shadow-lg">
                  <img className="w-full h-64 object-cover rounded-t-xl" src={event.image} alt="Event" />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-2xl">{event.title}</h3>
                      <div className="flex">
                        <img className="w-5 h-5 mr-2" src={bookmark} alt="Icon 1" />
                        <img className="w-5 h-5" src={share} alt="Icon 2" />

                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <img className="w-5 h-5 mr-2" alt="" src={calendar} />
                      <span>{event.date}</span>
                      <span className="mx-2 border-r border-solid border-black h-5" />
                      <img className="w-5 h-5 mr-2" alt="" src={location} />
                      <span>{event.location}</span>
                      {event.category && (
                        <span className="mx-2 bg-gray-300 text-gray-700 px-2 rounded-md text-sm">
                          {event.category}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center">
                        <span className="text-deepskyblue font-bold">{event.price}</span>
                        <span className="text-gray-600 ml-1">Onwards</span>
                      </div> */}
                    <Link to={`/event/detail/${event.id}`}>
                <button className="bg-blue-500 text-white px-5 py-3" >View Details</button>
                    </Link>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white py-20 text-center"></div>
    </div>
  );
};

export default EventList;
