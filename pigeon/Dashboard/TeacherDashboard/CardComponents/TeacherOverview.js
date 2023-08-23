import React from 'react';
import Image from 'next/image';
import TeacherPic from '../../../public/barun.jpeg';

const TeacherOverview = () => {
  const subjects = [
    '6',
    '7',
    '9',
    '10',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Teacher Profile</h2>
        <div className="flex items-center">
          <div className="w-24 h-24 border-4 rounded-full overflow-hidden bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100">
            <Image
              src={TeacherPic}
              alt="teacher-pic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4 text-black">
            <h2 className="text-lg font-semibold">Name: Barun Kumar</h2>
            <p className="text-sm">Class: 10th</p>
            <p className="text-sm">Date of Birth: 06/04/2002</p>
            <p className="text-sm">Address: Ballia, Uttar Pradesh</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">Connect with Your Classes</h2>
        <div className="grid grid-cols-2 gap-2">
          {subjects.map((subject) => (
            <button
              key={subject}
              className="bg-white text-gray-700 py-2 px-4 rounded w-full hover:bg-gray-300 transition-colors"
            >
              {subject}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherOverview;
