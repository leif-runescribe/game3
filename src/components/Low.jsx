import React from 'react'

const Low = () => {
  return (
    <div className='bg-black pb-20 md:pb-0'>

        <div className="flex flex-col lg:flex-row ">
        
        <div className="image-container w-full pt-20 md:p-40">
          <img src="/7.jpg" className="inset-0 object-cover w-full h-full " />
        </div>
        
        <div className="text-container  text-white px-20 flex-grow">
          <p className="text-3xl  mt-40 mb-4">
          No/Low Code integration 
          </p>
          <br />
          <p className="text-xl">
          Aadi comes with simple and easy to use SDKs and APIs, all in the backend, with zero impact on the game experience. 
          </p>
          <button
            type="button"
            class="mb-10 text-2xl md:ml-40 mt-6 relative animation-pulse focus:outline-none"
          >
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default Low