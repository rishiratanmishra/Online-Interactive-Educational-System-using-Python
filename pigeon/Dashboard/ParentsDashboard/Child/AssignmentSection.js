// components/AssignmentSection.js

import React from 'react';

const AssignmentSection = () => {
  const assignments = [
    {
      subject: 'Mathematics',
      title: 'Practice Problems',
      description: 'Complete exercises 1 to 10 from the textbook.',
      dueDate: '2023-09-01',
    },
    {
      subject: 'Science',
      title: 'Research Project',
      description: 'Choose a topic and submit a research proposal.',
      dueDate: '2023-09-05',
    },
    {
      subject: 'History',
      title: 'Essay Assignment',
      description: 'Write a 2-page essay on the Industrial Revolution.',
      dueDate: '2023-09-10',
    },
    // Add more assignments here
  ];

  return (
    <div className="bg-gray-200 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4  text-gray-800">
        Homework and Assignments
      </h2>
      <div>
        {assignments.map((assignment, index) => (
          <div
            className="bg-white p-4 rounded-lg shadow-md mb-4"
            key={index}
          >
            <h3 className="text-lg font-semibold mb-2">
              {assignment.subject} - {assignment.title}
            </h3>
            <p className="text-gray-600 mb-2">
              Due Date: {assignment.dueDate}
            </p>
            <p className="text-gray-800">{assignment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentSection;
