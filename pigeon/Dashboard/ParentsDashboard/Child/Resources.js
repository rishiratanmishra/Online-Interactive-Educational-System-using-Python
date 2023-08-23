// components/Resources.js

import React from 'react';

const Resources = () => {
  const resources = [
    {
      title: 'Mathematics Practice Worksheets',
      description: 'Download practice worksheets for various math topics.',
      link: 'https://example.com/math-worksheets',
    },
    {
      title: 'Science Experiment Videos',
      description: 'Watch educational videos demonstrating science experiments.',
      link: 'https://example.com/science-videos',
    },
    {
      title: 'Language Arts Reading List',
      description: 'Access a recommended reading list for language arts enthusiasts.',
      link: 'https://example.com/reading-list',
    },
    // Add more resources here
  ];

  return (
    <div className="bg-gray-200 p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4  text-gray-800">
        Educational Resources
      </h2>
      <div>
        {resources.map((resource, index) => (
          <div
            className="bg-white p-4 rounded-lg shadow-md mb-4"
            key={index}
          >
            <h3 className="text-lg font-semibold mb-2">
              <a
                href={resource.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.title}
              </a>
            </h3>
            <p className="text-gray-800">{resource.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
