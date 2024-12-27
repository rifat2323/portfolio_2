import React from 'react';
import Image from 'next/image';
const Brief = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            Pizza{ "Automat's"}
            <span className="text-red-600"> industry-standard </span>
            technology provides reliable 24/7 operation.
          </h2>
          <div className="w-24 h-1 bg-red-600 rounded-full"></div>
          <Image
            src="/pizza1.png"
            alt="Pizza Automat"
            className="object-contain hover:scale-105 transition-transform duration-300 rounded-lg"
            width={100}
            height={100}
          />
        </div>

        {/* Right content */}
        <div className="flex-1 space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              Designed to serve pizzas of outstanding restaurant quality, this unique machine, the Pizzamat | Pizza Automat, is characterized by its ability to cook perfect pizzas in just 2 minutes - matching the quality of top restaurants.
            </p>
            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-red-600 text-4xl font-bold">2</span>
                <span className="ml-2 text-gray-600">Minutes<br/>Cook Time</span>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="flex items-center">
                <span className="text-red-600 text-4xl font-bold">24/7</span>
                <span className="ml-2 text-gray-600">Available<br/>Operation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brief;