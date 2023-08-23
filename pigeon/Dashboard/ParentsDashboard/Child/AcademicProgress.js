// components/AcademicProgress.js

import React from 'react';

const AcademicProgress = () => {
  const subjects = [
    { name: 'Mathematics', grade: 'A', progress: 85 },
    { name: 'Science', grade: 'B', progress: 70 },
    { name: 'Hindi', grade: 'A-', progress: 92 },
    // Add more subjects here
  ];

  return (
    <div className="bg-gray-200 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4  text-gray-800">
        Academic Progress
      </h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((subject, index) => (
          <div
            className="bg-white p-4 rounded-lg shadow-md text-gray-800"
            key={index}
          >
            <h3 className="text-lg font-semibold mb-2">{subject.name}</h3>
            <p className="text-gray-600">Grade: {subject.grade}</p>
            <p className="text-gray-600">Progress: {subject.progress}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicProgress;
