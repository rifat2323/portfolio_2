"use client"
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { 
  Snowflake, 
 
  AlertTriangle,
  Leaf,
  QrCode
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CStorage = () => {
  const features = [
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Temperature Control",
      description: "Regulated between -5 and 5°C with adjustable settings",
      color: "text-blue-500"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Safety Monitoring",
      description: "Alarm system for temperature limit monitoring",
      color: "text-amber-500"
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly",
      description: "R290 gas refrigeration unit meeting environmental standards",
      color: "text-green-500"
    },
    {
      icon: <QrCode className="w-6 h-6" />,
      title: "Smart Inventory",
      description: "Advanced expiration date tracking system",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true,amount:0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Smart Cold Storage Technology
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Advanced temperature control and inventory management system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true,amount:0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-30" />
            <Image
              src="/pizzam.png"
              alt="Cold Storage Unit"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              width={800}
              height={700}
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true,amount:0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true,amount:0.4 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true,amount:0.4 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="font-semibold text-gray-900 mb-3">
                Smart Waste Reduction
              </h3>
              <p className="text-gray-600">
                Our innovative technology automatically detects and prioritizes pizzas approaching expiration, effectively reducing food waste through intelligent inventory management.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CStorage;