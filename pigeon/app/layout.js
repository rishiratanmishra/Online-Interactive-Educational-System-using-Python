"use client"

import React, { useState, useEffect } from 'react';
import HorizontalNav from '@/components/Navbar/HorizontalNav';
import './globals.css';
import { Inter } from 'next/font/google';
import SideNav from '@/components/Navbar/SideNav';
import Loader from './loading';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Pigeon LMS',
  description: 'Makes Interaction Easy with Child Tutors',
};

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace this with your actual data fetching or loading logic)
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Add your head content here */}
      </head>
      <body className={`${inter.className} ${loading ? 'loading' : ''}`}>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* Main Navbar */}
            <div className="main-navbar">
              {/* Sidebar Navbar */}
              <div className="side-navbar">
                <SideNav />
              </div>
              {/* Horizontal Navbar */}
              <div className="horizontal-navbar">
                <HorizontalNav />
              </div>
            </div>
            {/* Body Section */}
            <div className="body-child-pass">{children}</div>
          </>
        )}
      </body>
    </html>
  );
}
