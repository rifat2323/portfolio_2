'use client'

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Snowflake, AlertTriangle, Leaf, QrCode } from 'lucide-react';

const CStorage = () => {
  const features = [
    {
      icon: <Snowflake className="w-5 h-5" />,
      title: "Temperature Control",
      description: "-5 to 5°C, adjustable",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Safety Monitoring",
      description: "Real-time temperature alerts",
    },
    {
      icon: <Leaf className="w-5 h-5" />,
      title: "Eco-Friendly",
      description: "R290 gas refrigeration",
    },
    {
      icon: <QrCode className="w-5 h-5" />,
      title: "Smart Inventory",
      description: "Expiration date tracking",
    }
  ];

  return (
    <section className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true,amount:0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Smart Cold Storage Technology
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced temperature control and inventory management for our pizza machines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true,amount:0.4 }}
            className="relative"
          >
            <Image
              src="/pizzam.png"
              alt="Pizza Machine Cold Storage Unit"
              className="rounded-lg  w-full"
              width={600}
              height={400}
            />
          </motion.div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true,amount:0.4 }}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm group"
                >
                  <div className="flex-shrink-0 mr-3 text-orange-500  duration-300  group-hover:scale-110  transition-all">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div
             
              className="mt-8 p-5 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <motion.h3 initial={{ opacity: 0, filter: "blur(5px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.3 }} viewport={{ once: true,amount:0.2 }}  className="font-semibold text-gray-800 mb-2">
                Smart Waste Reduction
              </motion.h3>
              <motion.p initial={{ opacity: 0, filter: "blur(5px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.4 }} viewport={{ once: true,amount:0.2 }} className="text-gray-600 text-sm">
                Our system prioritizes pizzas nearing expiration, reducing food waste through intelligent inventory management. This ensures that every pizza served is at its freshest, maintaining the highest quality for our customers.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CStorage;

