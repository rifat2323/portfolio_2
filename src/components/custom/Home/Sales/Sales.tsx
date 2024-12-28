'use client'

import React from 'react';
import { motion } from 'motion/react';
import { AlarmClock, CreditCard, Microwave, Pizza, Plug, Settings, ThermometerSun, Umbrella } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Flexible Installation',
    description: 'Indoor or outdoor placement options',
    icon: <Umbrella size={24} />,
  },
  {
    title: 'Massive Variety',
    description: '72 pizzas with 250+ recipe options',
    icon: <Pizza size={24} />,
  },
  {
    title: 'Temperature Control',
    description: 'Serve both hot and cold options',
    icon: <ThermometerSun size={24} />,
  },
  {
    title: '24/7 Service',
    description: 'Round-the-clock operation',
    icon: <AlarmClock size={24} />,
  },
  {
    title: 'Universal Payments',
    description: 'Accept all payment methods',
    icon: <CreditCard size={24} />,
  },
  {
    title: 'Restaurant-Grade Oven',
    description: 'Professional cooking quality',
    icon: <Microwave size={24} />,
  },
  {
    title: 'Smart Connected',
    description: 'Real-time monitoring and management',
    icon: <Plug size={24} />,
  },
  {
    title: 'Complete Control',
    description: 'Manage from our powerful app',
    icon: <Settings size={24} />,
  },
];

const Sales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Future of <span className="text-orange-600">Pizza Vending</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the revolution in automated pizza service. Restaurant-quality pizzas available 24/7.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl font-bold text-center mb-12 text-gray-900"
          >
            Why Choose Our Pizza Vending Machines?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
              
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 flex flex-col items-center text-center group"
              >
                <motion.div initial={{filter:"blur(10px)"}} whileInView={{filter:"blur(0px)"}} transition={{duration:0.4,delay:index*0.1}} viewport={{once:true,amount:0.4}} className="text-orange-500 mb-4 group-hover:scale-x-105">
                  {feature.icon}
                  </motion.div>
                <motion.h3 initial={{filter:"blur(10px)"}} whileInView={{filter:"blur(0px)"}} transition={{duration:0.3,delay:index*0.1}} viewport={{once:true,amount:0.4}} className="text-lg font-semibold mb-2">{feature.title}</motion.h3>
                <motion.h3 initial={{filter:"blur(10px)"}} whileInView={{filter:"blur(0px)"}} transition={{duration:0.3,delay:index*0.1}} viewport={{once:true,amount:0.4}} className="text-gray-600 text-sm">{feature.description}</motion.h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sales;