import React, { useState, useEffect } from 'react';

const AnimatedCard = ({ title, description }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimating(false), 750); // Adjust duration as needed
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const handleMouseEnter = () => setIsAnimating(true);
  const handleMouseLeave = () => setIsAnimating(false);

  const gradientClasses = isAnimating ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-pink-500 to-purple-500';

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bg-white flex sm:flex-auto shadow-lg rounded-lg overflow-hidden mx-w-full sm:max-w-full transition duration-300 ease-in-out transform hover:-translate-y-1 ${gradientClasses}`}
    >
      <div className="lg:p-12 p-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-xl">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
