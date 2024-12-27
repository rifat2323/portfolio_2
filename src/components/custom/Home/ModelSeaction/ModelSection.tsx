"use client"
import React from 'react';
import { ArrowRight, Box, PizzaIcon, DoorOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Image1 from '../../../../../public/9.png'
import Image2 from '../../../../../public/pizzam.png'

const ModelsSection = () => {
  const models = [
    {
      name: "PM27",
      image: Image1,
      specs: [
        { 
          icon: <Box className="h-5 w-5" />,
          label: "Stored Pizzas",
          value: "72"
        },
        { 
          icon: <PizzaIcon className="h-5 w-5" />,
          label: "Deck Oven",
          value: "1"
        },
        { 
          icon: <DoorOpen className="h-5 w-5" />,
          label: "Delivery Hatch",
          value: "1"
        }
      ]
    },
    {
      name: "PM32",
      image:Image2,
      specs: [
        { 
          icon: <Box className="h-5 w-5" />,
          label: "Stored Pizzas",
          value: "69"
        },
        { 
          icon: <PizzaIcon className="h-5 w-5" />,
          label: "Deck Oven",
          value: "1"
        },
        { 
          icon: <DoorOpen className="h-5 w-5" />,
          label: "Delivery Hatch",
          value: "1"
        }
      ]
    }
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-orange-50 py-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Two Pizza Vending Machine Models
            <span className="text-orange-500"> Are Available</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect automated pizza solution for your location
          </p>
        </div>

        {/* Models Display */}
        <div className="space-y-32">
          {models.map((model, index) => (
            <div key={index} className="relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-yellow-100/30 rounded-3xl -rotate-1 transform hover:rotate-0 transition-transform duration-300" />
              
              {/* Content Container */}
              <div className="relative p-8">
                {/* Model Name */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-gray-800">
                    Model {model.name}
                  </h3>
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                    Available Now
                  </span>
                </div>

                {/* Main Image - Full Width */}
                <div className="mb-8">
                  <Image
                    src={model.image}
                    alt={`Pizza Automat ${model.name}`}
                    className="w-full rounded-xl  hover:scale-105 transition-transform duration-500 object-contain h-[500px]"
                    width={1200}
                    height={800}
                  />
                </div>

                {/* Specifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {model.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="bg-orange-100 p-3 rounded-lg text-orange-500">
                        {spec.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{spec.label}</p>
                        <p className="text-xl font-bold">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300 group">
                    Learn More About {model.name}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelsSection;