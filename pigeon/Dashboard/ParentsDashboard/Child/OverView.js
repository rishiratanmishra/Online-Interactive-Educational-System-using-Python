'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

const OverView = () => {
  const [studentData, setStudentData] = useState(null);
  const subjects = ['Maths', 'Hindi', 'English', 'Science'];

  // Replace '25' with dynamic student ID
  const studentId = 25; // Change this to the actual student ID

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/student/${studentId}/`
        );
        setStudentData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudentData();
  }, [studentId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-2">
      {studentData && (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Student Profile</h2>
          <div className="flex items-center">
            <div className="w-24 h-24 border-4 rounded-full overflow-hidden bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100">
              <img
                src={studentData.profilePicture}
                alt="student-pic"
                className="w-full h-full object-cover"
                width={60}
                height={60}
              />
            </div>
            <div className="ml-4 text-black">
              <h2 className="text-lg font-semibold">
                Name: {studentData.fullName}
              </h2>
              <p className="text-sm">Class: {studentData.std}</p>
              <p className="text-sm">Date of Birth: {studentData.dob}</p>
              <p className="text-sm">Address: {studentData.address}</p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-2">
          Connect with Subject Teachers
        </h2>
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

export default OverView;
