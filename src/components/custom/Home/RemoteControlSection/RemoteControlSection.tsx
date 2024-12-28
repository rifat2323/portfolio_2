'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, BarChart2, Settings2, Database, RefreshCcw, WrenchIcon, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      text: "Automatic software updates"
    },
    {
      icon: <WrenchIcon className="w-4 h-4" />,
      text: "Remote maintenance and troubleshooting"
    },
    {
      icon: <AlertCircle className="w-4 h-4" />,
      text: "Automated malfunction detection"
    }
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple And Fast Remote Control
          </h2>
          <p className="text-lg text-gray-600">
            EV Web dashboard provides complete control of your Pizzamat from anywhere
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-200 group"
                >
                  <motion.div initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}} className="text-orange-500 mb-4 group-hover:scale-110 transition-all">
                    {feature.icon}
                  </motion.div>
                  <motion.h3  initial={{ filter:"blur(4px)",opacity:0 }} whileInView={{ filter:"blur(0px)",opacity:1 }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}}  className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </motion.h3>
                  <motion.p initial={{ filter:"blur(4px)",opacity:0 }} whileInView={{ filter:"blur(0px)",opacity:1 }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}} className="text-sm text-gray-600">
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="font-semibold text-gray-900 mb-4">
                Technical Support Features
              </h3>
              <div className="space-y-4">
                {techFeatures.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors duration-200 group"
                    initial={{ filter:"blur(4px)",opacity:0 }} whileInView={{ filter:"blur(0px)",opacity:1 }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}}
                  >
                    <motion.div initial={{ filter:"blur(4px)",opacity:0 }} whileInView={{ filter:"blur(0px)",opacity:1 }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}} className="text-orange-500 group-hover:scale-110 transition-all">{feature.icon}</motion.div>
                    <span className="text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
              <Button 
                variant="ghost" 
                className="w-full mt-6 text-orange-500 hover:text-orange-600 hover:bg-orange-50"
              >
                Learn More About Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <Image
              src="/pizzam.png"
              alt="Pizzamat Machine Interface"
              className="rounded-2xl object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RemoteControlSection;

