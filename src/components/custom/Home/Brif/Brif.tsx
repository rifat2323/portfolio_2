'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Pizza, Star, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Brief = () => {
  return (
    <section className="w-full py-7 bg-gradient-to-br from-white to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the Future of Pizza with
            <span className="text-orange-600"> PizzaAutomat</span>
          </motion.h2>

          <Card className="bg-white shadow-none  rounded-xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                  <motion.p           initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3}} className="text-lg text-gray-700 leading-relaxed">
                    Designed to serve pizzas of outstanding restaurant quality, PizzaAutomat is characterized by its ability to cook perfect pizzas in just 2 minutes - matching the quality of top restaurants.
                  </motion.p>
                  <div className="grid grid-cols-2 gap-4">
                    <FeatureCard icon={<Clock className="w-6 h-6" />} value="2 min" label="Cook Time" />
                    <FeatureCard icon={<Pizza className="w-6 h-6" />} value="24/7" label="Operation" />
                    <FeatureCard icon={<Star className="w-6 h-6" />} value="Top" label="Quality" />
                    <FeatureCard icon={<Zap className="w-6 h-6" />} value="Fast" label="Service" />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <motion.div 
                    className="bg-orange-100 w-48 h-48 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Pizza className="w-24 h-24 text-orange-600" />
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) => (
  <motion.div 
    className="flex items-center flex-col sm:flex-row space-x-3 bg-orange-50 p-3 rounded-xl"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="text-orange-600 bg-white p-2 rounded-full">{icon}</div>
    <div>
      <span className="block text-lg font-bold text-gray-800">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  </motion.div>
);

export default Brief;

