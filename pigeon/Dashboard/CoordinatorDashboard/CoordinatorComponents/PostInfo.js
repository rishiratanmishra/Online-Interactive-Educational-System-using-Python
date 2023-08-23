import React from 'react';
import { BsCalendar, BsPlus, BsFileText, BsBell } from 'react-icons/bs';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

  const SectionCard = ({ title, icon, content }) => (
    <div className="bg-white rounded-lg p-4 shadow-md flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          {icon}
          <h3 className={`${ubuntu.className} text-lg font-semibold ml-2`}>{title}</h3>
        </div>
        <button className="bg-purple-900 rounded-full p-2 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none">
          <BsPlus className="text-white text-xl" />
        </button>
      </div>
      <ul className="space-y-2 flex-grow">
        {content.map((item, index) => (
          <li
            key={index}
            className="flex items-center py-2 border-b border-gray-300 transition duration-300 hover:bg-gray-100"
          >
            <span>{item.title || item.dueDate}</span>
          </li>
        ))}
      </ul>
    </div>
  )
  
  
  
  
  

const PostInfo = () => {
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

  const feesAlert = [
    {
      title: 'Submit Fees Before Exam',
      dueDate: '2023-08-30',
    },
  ];

  const notifications = [
    {
      title: 'School Dress Prebooking Starts',
      date: '2023-08-18',
    },
    {
      title: 'Important Announcement: Exam Schedule',
      date: '2023-08-22',
    },
  ];

  return (
    <div className="bg-gray-300 p-8 rounded-lg">
      <h2 className={`${ubuntu.className} text-2xl font-semibold mb-6`}>Post Information</h2>
      <div className="grid gap-6 md:grid-cols-3">
        <SectionCard
          title="Upcoming Events"
          icon={<BsCalendar className="mr-2 text-blue-500 text-2xl" />}
          content={upcomingEvents}
        />
        <SectionCard
          title="Fees Alert"
          icon={<BsFileText className="mr-2 text-yellow-500 text-2xl" />}
          content={feesAlert}
        />
        <SectionCard
          title="Notifications"
          icon={<BsBell className="mr-2 text-red-500 text-2xl" />}
          content={notifications}
        />
      </div>
    </div>
  );
};

export default PostInfo;
