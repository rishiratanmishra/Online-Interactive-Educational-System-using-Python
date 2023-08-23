// components/CalendarNEvents.js

import React from 'react';

const CalendarNEvents = () => {
  const events = [
    {
      title: 'Parent-Teacher Meeting',
      date: '2023-09-10',
    },
    {
      title: 'Science Fair',
      date: '2023-09-15',
    },
    {
      title: 'Sports Day',
      date: '2023-09-25',
    },
    // Add more events here
  ];

  const holidays = [
    {
      title: 'Labor Day',
      date: '2023-09-04',
    },
    {
      title: 'Thanksgiving',
      date: '2023-11-23',
    },
    // Add more holidays here
  ];

  return (
    <div className="bg-gray-200 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4  text-gray-800">
        Calendar and Events (2023)
      </h2>
      <div className="grid lg:grid-cols-2 lg:grid-row-1 sm:grid-cols-1 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Upcoming Events</h3>
          <ul className="list-disc pl-6">
            {events.map((event, index) => (
              <li key={index}>
                {event.title} - {event.date}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Holiday Calendar</h3>
          <ul className="list-disc pl-6">
            {holidays.map((holiday, index) => (
              <li key={index}>
                {holiday.title} - {holiday.date}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarNEvents;
