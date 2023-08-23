import React from 'react';
import { FaUserTie, FaUserGraduate, FaHouseUser } from 'react-icons/fa';
import { Ubuntu } from 'next/font/google';
import Card from './Card';

const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

const CoordCard = () => {
  return (
    <>
      <div>
        <h3 className={`${ubuntu.className}`}> Dashboard</h3>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-rows-1 mt-5 gap-4 justify-center items-center overflow-x-auto">
        <Card
          icon={
            <FaUserTie className="text-4xl text-green-600 hover:text-yellow-600" />
          }
          title="Teachers"
          count="80"
          link1="/register-teacher"
          link2="/viewall"
        />
        <Card
          icon={
            <FaUserGraduate className="text-4xl text-green-600 hover:text-yellow-600" />
          }
          title="Students"
          count="380"
          link1="/register-student"
          link2="/viewall"
        />
        <Card
          icon={
            <FaHouseUser className="text-4xl text-green-600 hover:text-yellow-600" />
          }
          title="Parents"
          count="280"
          link1="/register-parent"
          link2="/viewall"
        />
      </div>
    </>
  );
};

export default CoordCard;
