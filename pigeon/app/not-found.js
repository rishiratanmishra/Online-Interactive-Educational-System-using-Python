import React from 'react';
import Error from '../public/dribble.gif';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="text-center">
            <div className="bg-center bg-cover h-2/4 w-60 mx-auto rounded-full border border-white">
              {/* You can replace the placeholder URL with your actual logo image */}
              <Image src={Error} alt="404-image" height={300} width={300} />
            </div>
            <h1 className="text-6xl font-bold mt-6">404</h1>
            <h3 className="text-6xl">Look like you're lost</h3>
            <p className="text-lg mt-4">
              The page you are looking for is not available!
            </p>
            <a
              href="/"
              className="text-white bg-purple-900 hover:bg-green-600 px-6 py-2 rounded mt-4 inline-block"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
