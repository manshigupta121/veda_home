import React from 'react';

// This is a single, self-contained React component that renders
// an "About Us" section with an image and text content.
const App = () => {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto">
      {/* Image Section */}
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src="https://i.imgur.com/WbQnbas.png" alt="About Us" />
        </div>
      </div>
      
      {/* Text Content Section */}
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-red-900 border-b-2 border-yellow-500 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            About <span className="text-yellow-500">Veda Structure</span>
          </h2>
          <p className="text-gray-700">
            Veda Structure is your one-stop shop for all astrology needs. Established in 2022, we are a team of highly qualified astrologers, pundits, and experts dedicated to providing a safe, efficient, pleasant, and personalized experience in the field of astrology, numerology, horoscope prediction, Vedic Puja and various related products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
