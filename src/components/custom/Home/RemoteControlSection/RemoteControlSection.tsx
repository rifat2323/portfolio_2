"use client"
import React from 'react';
import { motion } from 'framer-motion';

import {
  Smartphone,
  BarChart2,
  Settings2,
  Database,
  
  RefreshCcw,
  WrenchIcon,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const RemoteControlSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Access Anywhere",
      description: "Control your Pizzamat 24/7 from any device"
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Sales Analytics",
      description: "Real-time access to sales statistics"
    },
    {
      icon: <Settings2 className="w-5 h-5" />,
      title: "Recipe Management",
      description: "Customize ingredients, timing, and pricing"
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Inventory Control",
      description: "Monitor stock levels and expiration dates"
    }
  ];

  const techFeatures = [
    {
      icon: <RefreshCcw className="w-4 h-4" />,
      text: "Automatic updates"
    },
    {
      icon: <WrenchIcon className="w-4 h-4" />,
      text: "Remote maintenance"
    },
    {
      icon: <AlertCircle className="w-4 h-4" />,
      text: "Automated malfunction detection"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true,amount:0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Simple And Fast Remote Control</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            EV Web dashboard provides complete control of your Pizzamat from anywhere
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true,amount:0.4 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="text-blue-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <h3 className="font-medium text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true,amount:0.4 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h3 className="font-medium text-gray-900 mb-4">Technical Capabilities</h3>
              <div className="space-y-3">
                {techFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-gray-600">
                    <div className="text-blue-500">{feature.icon}</div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true,amount:0.4 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl blur-2xl opacity-30" />
            <Image
              src="/pizzam.png"
              alt="Pizzamat Machine"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              width={800}
              height={800}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RemoteControlSection;