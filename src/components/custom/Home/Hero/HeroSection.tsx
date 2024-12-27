"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Clock, Pizza } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="w-full min-h-dvh bg-gradient-to-br from-orange-50 via-yellow-50/40 to-orange-100/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 lg:text-left text-center">
            <div className="relative inline-block">
              <span className="absolute -top-3 -right-6 md:-right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                New Generation
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                The Future of
                <span className="block mt-2 text-5xl lg:text-6xl bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Pizza Automat
                </span>
              </h1>
            </div>
            
            <p className="text-gray-600 text-lg max-w-xl mx-auto lg:mx-0">
              Experience the future of pizza delivery with our state-of-the-art automated system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-200">
                More Information
                <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-8 py-6 rounded-xl text-lg font-semibold border-2 hover:bg-orange-50">
                Watch Demo
                <Pizza className="ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">2min</div>
                <div className="text-sm text-gray-600">Cooking Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-600">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-sm text-gray-600">Automated</div>
              </div>
            </div>
          </div>

          {/* Right Content - Single Large Image */}
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-orange-100 rounded-full blur-2xl"></div>
            <div className="relative">
              <Image
                src="/pizzam.png"
                alt="Pizza Automat Machine"
                className="relative z-10 rounded-2xl  hover:scale-105 transition-transform duration-500"
                width={600}
                height={600}
              />
              {/* Floating badges */}
              <div className="absolute z-10 -right-4 top-1/4 bg-white p-4 rounded-xl shadow-lg transform rotate-0 hover:rotate-6 transition-transform">
                <Star className="text-yellow-500 h-6 w-6" />
                <p className="text-sm font-medium mt-1">Premium Quality</p>
              </div>
              <div className="absolute z-10  -left-4 bottom-1/4 bg-white p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform">
                <Clock className="text-orange-500 h-6 w-6" />
                <p className="text-sm font-medium mt-1">24/7 Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;