import React, { useState } from "react";

const images = ["/10.jpg", "/11.jpg", "/12.jpg", "/4.jpg"];


const rev = [
    {
        img: "/10.jpg",
        text: "dfgdfg",
    },
    {
        img: "/11.jpg",
        text: "fasgsdgsdh",
    },
    {
        img: "/12.jpg",
        text: "sdffgsfgsdf"
    },
    {
        img: "/1.jpg",
        text: "fgsdfgafg",
    },
]
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className="bg-black">
      <h1 className="text-center text-white  text-5xl font-bold">Testimonials</h1>
      <div className="px-20 md:px-72 py-20 ">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 relative w-full  ">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute block w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-0 transition duration-700 ease-in-out overflow-hidden rounded-full ${
                  currentSlide === index ? "opacity-100" : ""
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="object-cover object-center w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full focus:outline-none ${
                  currentSlide === index
                    ? "bg-white/50 dark:bg-gray-800/50"
                    : "bg-white/30 dark:bg-gray-800/30"
                }`}
                aria-current={currentSlide === index ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <div className="absolute top-0 flex p-10 md:py-40 md:px-72 justify-between items-center w-full z-30">
            <button
              type="button"
              className="focus:outline-none group"
              onClick={handlePrev}
            >
              <span className="text-xl inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </span>
            </button>

            <button
              type="button"
              className="focus:outline-none group"
              onClick={handleNext}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
