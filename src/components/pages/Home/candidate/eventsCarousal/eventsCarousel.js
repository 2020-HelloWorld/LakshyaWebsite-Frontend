import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import Card from './eventCard'; 
import imagecover from "../../../../../static/design/techtribe.svg";

const events = [
  {
    id: 1,
    title: 'Event 1',
    date: 'Sep 1',
    location: 'City 1',
    price: '₹ 100',
    image:imagecover,
    category: 'Tech Conference',
  },
  {
    id: 2,
    title: 'Event 2',
    date: 'Sep 3',
    location: 'City 2',
    price: '₹ 120',
    image: imagecover,
    category: 'Tech Conference',
  },
  {
    id: 3,
    title: 'Event 3',
    date: 'Sep 4',
    location: 'City 3',
    price: '₹ 150',
    image: imagecover,
    category: 'Tech Conference',
  },
  {
    id: 4,
    title: 'Event 4',
    date: 'Sep 5',
    location: 'City 4',
    price: '₹ 140',
    image: imagecover,//can be changed accordingly
    category: 'Tech Conference',
  },
  {
    id: 5,
    title: 'Event 5',
    date: 'Sep 6',
    location: 'City 5',
    price: '₹ 170',
    image: imagecover,
    category: 'Tech Conference',
  },
  {
    id: 6,
    title: 'Event 6',
    date: 'Sep 6',
    location: 'City 6',
    price: '₹ 160',
    image: imagecover,
    category: 'Tech Conference',
  },
  {
    id: 7,
    title: 'Event 7',
    date: 'Sep 7',
    location: 'City 7',
    price: '₹ 170',
    image: imagecover,
    category: 'Tech Conference',
  },
];

const Carousel=()=> {
  const [eventsData, setEventsData] = useState(events);

  const scrollLeft = () => {
    document.getElementById('content').scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById('content').scrollLeft += 400;
  };

  return (
    <div className="relative">
      <div className="text-center py-8 mt-8 text-[32px] font-bold">Upcoming Events</div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          className="p-3 rounded-full text-white bg-gray-200 hover:bg-gray-700"
        >
          <FiChevronLeft />
        </button>
      </div>


      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={scrollRight}
          className="p-3 rounded-full text-white bg-gray-200 hover:bg-gray-700"
        >
          <FiChevronRight />
        </button>
      </div>

      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {eventsData.map((event) => (
          <div key={event.id}>
            <Card event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
