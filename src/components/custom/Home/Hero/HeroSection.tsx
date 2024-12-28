'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, Clock, Pizza, Zap, Users} from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 pt-10 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <motion.div 
            className="flex-1 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                Next Generation Pizza Vending
              </motion.div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
                The Future of
                <span className="block mt-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Pizza Automat
                </span>
              </h1>
            </div>
            
            <p className="text-gray-600 text-xl max-w-xl">
              Experience the revolution in pizza delivery with our state-of-the-art automated system, available 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="group flex justify-center items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg shadow-orange-200/50">
              <a href='#contact_form' className=' w-full h-full flex justify-center items-center'>

                Explore Features
              </a>
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="px-6 py-3 rounded-full text-lg font-semibold border-2 border-orange-200 hover:bg-orange-50 text-orange-600">
                Watch Demo
                <Pizza className="ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8">
              <StatItem icon={<Clock className="h-6 w-6 text-orange-500" />} value="2 min" label="Cooking Time" />
              <StatItem icon={<Zap className="h-6 w-6 text-orange-500" />} value="24/7" label="Availability" />
              <StatItem icon={<Users className="h-6 w-6 text-orange-500" />} value="100%" label="Automated" />
            </div>
          </motion.div>

          {/* Right Content - Single Large Image */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-orange-100 rounded-full blur-3xl opacity-30"></div>
            <div 
              className="relative z-10"
             
            >
              <Image
                src="/pizzam.png"
                alt="Pizza Automat Machine"
                className="rounded-3xl "
                width={600}
                height={600}
              />
              <FloatingBadge 
                icon={<Star className="text-yellow-500 h-6 w-6" />}
                text="Premium Quality"
                className="absolute -right-4 top-1/4 rotate-2"
              />
              <FloatingBadge 
                icon={<Clock className="text-orange-500 h-6 w-6" />}
                text="24/7 Service"
                className="absolute -left-4 bottom-1/4 rotate-2"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, value, label }:{icon:React.ReactNode, value:string, label:string}) => (
  <motion.div 
    className="flex items-center space-x-3"
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 400 }}
  >
    <div className="bg-orange-100 p-3 rounded-full">{icon}</div>
    <div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </motion.div>
);

const FloatingBadge = ({ icon, text, className }:{icon:React.ReactNode,text:string, className:string}) => (
  <motion.div 
    className={`absolute z-20 bg-white p-4 rounded-xl shadow-lg ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.5 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {icon}
    <p className="text-sm font-medium mt-1">{text}</p>
  </motion.div>
);

export default HeroSection;

