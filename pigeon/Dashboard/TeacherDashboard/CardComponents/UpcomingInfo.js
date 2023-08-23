"use client"

import React from 'react';
import { BsCalendar, BsPlus, BsTrash, BsPencil } from 'react-icons/bs';

const UpcomingInfo = () => {
  const upcomingEvents = [
    {
      title: 'Parent-Teacher Meeting',
      date: '2023-08-25',
    },
    {
      title: 'Workshop: Effective Teaching Strategies',
      date: '2023-09-05',
    },
  ];

  const upcomingAssignments = [
    {
      title: 'Maths Assignment: Chapter 5',
      dueDate: '2023-08-30',
    },
    {
      title: 'Science Assignment: Experiment Report',
      dueDate: '2023-09-10',
    },
  ];

  const notifications = [
    {
      title: 'New Study Material Uploaded',
      date: '2023-08-18',
    },
    {
      title: 'Important Announcement: Exam Schedule',
      date: '2023-08-22',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upcoming Information</h2>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold">
            <BsCalendar className="mr-2 inline-block text-blue-500" /> Upcoming Events
          </h3>
          <BsPlus className="inline-block text-4xl text-green-500 cursor-pointer" />
        </div>
        <ul className="space-y-2">
          {upcomingEvents.map((event, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b border-gray-300">
              <span>{event.title}</span>
              <div className="space-x-2">
                <BsPencil className="inline-block text-blue-500 cursor-pointer" />
                <BsTrash className="inline-block text-red-500 cursor-pointer" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* ... Similarly for other sections */}
    </div>
  );
};

export default UpcomingInfo;
