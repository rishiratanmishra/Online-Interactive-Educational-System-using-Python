import React from 'react';
import Link from 'next/link';

const Card = ({ icon, title, count, link1,link2, icon2 }) => {
  return (
    <div className="flex flex-col justify-between p-8 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-lg shadow-xl hover:shadow-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon}
          <span className="text-lg font-bold text-yellow-400">{title} :</span>
        </div>
        <div className="text-xl font-bold text-yellow-400">{count}</div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="flex space-x-2">
          <Link href={link1}>
          <button
            className="px-6 py-2 rounded-lg bg-yellow-400 text-gray-900 hover:bg-yellow-500 transition duration-300"
          >
            + Add
            </button>
            </Link>
          <Link href={link2}>
            <button
              className="px-6 py-2 rounded-lg bg-indigo-900 text-white hover:bg-indigo-800 transition duration-300"
            >
              View All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
