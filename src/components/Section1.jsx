import React from "react";

const Section1 = () => {
  const items = [
    {
      id: 1,
      src: "/5.jpg",
      link: "Get Engaged Users",
      title: "Reduce CAC by up to 70%",
      description: "Aadi’s cost per engagement model reduces CAC by up to 70%"
    },
    {
      id: 2,
      src: "/6.jpg",
      link: "Increase Engagement",
      title: "Increased Engagement ",
      description: "More engaged players with global contests increasing retention by 30%"
    },
    {
      id: 3,
      src: "/8.jpg",
      link: "Generate more Revenue",
      title: "More Revenue",
      description: "More engaged players lead to move revenues & higher profit"
    },
   
  ];
  return (
    <>
      <div
        
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white py-44 text-center md:text-left"
      >
        <div className=" px-40 flex flex-col  w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-10 sm:px-5">
            {items.map(({ id, src, link, title, description }) => (
              <div
                key={id}
                className="relative shadow-md shadow-gray-500 rounded-lg overflow-hidden w-full h-full"
              >
                <img
                  src={src}
                  alt={title || "Image description"}
                  className="w-full h-full object-cover opacity-70 rounded-lg"
                />
                <div className="p-4 absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-75 z-10 flex flex-col items-center justify-center">
                  <h3 className="text-white text-2xl font-extrabold mb-2">
                    {title}
                  </h3>
                  <p className="text-white text-l font-extrabold mb-4">{description}</p>
                  <button
                    type="button"
                    className="relative animation-pulse focus:outline-none text-white px-6 py-2 rounded-full"
                  >
                    {link}
                  </button>
                </div>
              </div>
              
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Section1;
