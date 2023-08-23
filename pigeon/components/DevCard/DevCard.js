"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const Card = ({ Link1Link, Link2Link, Link3Link, Link1, Link2, Link3, Linkedin, LinkedinLink,  WhatsappLink, DeveloperName, DeveloperPost, DeveloperImage }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4">
          <button
            onClick={toggleDropdown}
            className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className={`w-5 h-5 ${dropdownVisible ? 'transform rotate-180' : ''}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
          {dropdownVisible && (
            <div
              id="dropdown"
              className="z-10 absolute mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul className="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href={Link1Link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {Link1}
                  </a>
                </li>
                <li>
                  <a
                    href={Link2Link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {Link2}
                  </a>
                </li>
                <li>
                  <a
                    href={Link3Link}
                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {Link3}
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center pb-10">
          <Image
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={DeveloperImage}
            alt="developer-image"
            width={150}
            height={50}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{DeveloperName}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">{DeveloperPost}</span>
          <div className="flex mt-4 space-x-3 md:mt-6">
            <a
              href={LinkedinLink}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {Linkedin}
            </a>
            <a
              href={WhatsappLink}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
Contact            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
