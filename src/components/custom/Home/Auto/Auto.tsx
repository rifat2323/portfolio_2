"use client"
import React from 'react';
import Image from "next/image";
import { motion } from 'framer-motion';
import {
  ChefHat,
  Timer,
  Flame,
  Gauge,
  ArrowRight
} from 'lucide-react';

const PizzaAutomatSection = () => {
  const features = [
    {
      text: "Advanced Temperature Control",
      icon: <Gauge className="w-5 h-5" />,
      color: "text-rose-600"
    },
    {
      text: "Precision Cooking Timer",
      icon: <Timer className="w-5 h-5" />,
      color: "text-amber-600"
    },
    {
      text: "Smart Grill Activation",
      icon: <Flame className="w-5 h-5" />,
      color: "text-orange-600"
    },
    {
      text: "Perfect Gratin Timing",
      icon: <ChefHat className="w-5 h-5" />,
      color: "text-red-600"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_transparent_65%,_#FEE2E2_100%)]" />
      
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-100 to-orange-100 rounded-2xl blur-2xl opacity-40" />
            <Image
              src="/pizzam.png"
              alt="Pizza Automat"
              width={500}
              height={500}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent mb-6">
              Pizza Automat: The Future of Authentic Italian Cuisine
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Experience a slice of Italy through our innovative Pizzamat machines. Each unit combines 
              traditional Italian craftsmanship with cutting-edge technology, delivering authentic 
              trattoria-quality pizzas at the touch of a button.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true, amount: 0.5 }}
                className="group"
              >
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`${feature.color} bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <button className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-rose-600 to-orange-600 text-white rounded-xl hover:shadow-lg transition-all duration-300">
              <span>Discover More</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PizzaAutomatSection;