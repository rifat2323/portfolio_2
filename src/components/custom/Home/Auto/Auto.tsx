'use client'

import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import { ChefHat, Timer, Flame, Gauge, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PizzaAutomatSection = () => {
  const features = [
    {
      text: "Advanced Temperature Control",
      icon: <Gauge className="w-5 h-5" />,
      description: "Precise heat management for perfect crust"
    },
    {
      text: "Precision Cooking Timer",
      icon: <Timer className="w-5 h-5" />,
      description: "Consistent cooking times, every time"
    },
    {
      text: "Smart Grill Activation",
      icon: <Flame className="w-5 h-5" />,
      description: "Automated grilling for perfect toppings"
    },
    {
      text: "Perfect Gratin Timing",
      icon: <ChefHat className="w-5 h-5" />,
      description: "Restaurant-quality finish guaranteed"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl blur-2xl opacity-20" />
            <div className="relative aspect-square">
              <Image
                src="/pizzam.png"
                alt="Pizza Automat"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Pizza Automat
                <span className="block text-orange-500 mt-2">
                  Authentic Italian Experience
                </span>
              </h2>
              <p className="text-lg text-gray-600">
                Experience authentic Italian craftsmanship combined with cutting-edge technology, 
                delivering restaurant-quality pizzas at the touch of a button.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div initial={{filter:"blur(10px)", opacity:0}} whileInView={{filter:"blur(0px)",opacity:1}} viewport={{ once: true,amount: 0.2 }}
                     transition={{ duration: 0.6, delay: index*0.1 }}
                      className="p-2 rounded-lg bg-white shadow-sm text-orange-500 group-hover:scale-110 transition-transform duration-300 group-hover:translate-y-3">
                      {feature.icon}
                    </motion.div>
                    <div>
                      <motion.h3 initial={{filter:"blur(10px)", opacity:0}} whileInView={{filter:"blur(0px)",opacity:1}} viewport={{ once: true,amount: 0.2 }}
                     transition={{ duration: 0.6, delay: index*0.1 }} className="font-semibold text-gray-900 mb-1">
                        {feature.text}
                      </motion.h3>
                      <motion.p initial={{ opacity:0}} whileInView={{opacity:1}} viewport={{ once: true,amount: 0.2 }}
                     transition={{ duration: 0.6, delay: index*0.1 }} className="text-sm text-gray-600">
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                className="group"
                size="lg"
              >
                Discover More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PizzaAutomatSection;

