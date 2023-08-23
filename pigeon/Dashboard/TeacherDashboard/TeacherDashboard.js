
import React from 'react';
import TeacherOverview from './CardComponents/TeacherOverview';
import UpcomingInfo from './CardComponents/UpcomingInfo';

const TeacherDashboard = () => {
    return (
        <>
        <div className="flex flex-col gap-6">
        <div className="bg-green-600 p-4 text-black grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-rows-2 justify-between">
        <p className="text-xl">
          Hi, <span className="text-yellow-500 font-semibold">Barun KUMAR</span>
        </p>
        <p className="text-gray-300 text-right">Manage Your Classes</p>
      </div>
      
            
    
    
            
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Dashboard</h2>
          </div>
       <TeacherOverview/>
            <UpcomingInfo/>
            </div>
          </>
      
  );
};

export default TeacherDashboard;
