import React, { useState } from "react";

const EventSearch = ({ events, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredEvents = events.filter((event) => {
      return (
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.category.toLowerCase().includes(searchTerm.toLowerCase()) // Include the category in the search
      );
    });

    onSearch(filteredEvents);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    onSearch(events);
  };

  return (
    <div className="flex flex-col items-center mb-12">
      <div className="relative w-full max-w-xl">
        <div className="flex">
          <input
            type="text"
            className="flex-grow border border-gray-300 px-5 py-2 font-oxygen focus:outline-none"
            placeholder="Search events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="bg-gray-100 text-white px-4 py-2  focus:outline-none"
              onClick={handleClearSearch}
            >
              Clear
            </button>
          )}
          <button
            className="ml-2 bg-gray-100 text-white px-4 py-2 focus:outline-none"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventSearch;