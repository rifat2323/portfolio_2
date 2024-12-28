'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Smartphone, Shield, Layout, Scissors, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const PizzaAutomatSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Universal Application",
      description: "Perfect for both indoor and outdoor locations, maximizing business flexibility",
      color: "text-blue-500",
      gradient: "from-blue-500/10 to-transparent"
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Customizable Design",
      description: "Tailor the machine's appearance to match your brand identity",
      color: "text-purple-500",
      gradient: "from-purple-500/10 to-transparent"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "High Visibility Display",
      description: "55-inch display for maximum impact and accessibility",
      color: "text-orange-500",
      gradient: "from-orange-500/10 to-transparent"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Durable & Safe",
      description: "Built with tempered glass for long-lasting performance",
      color: "text-green-500",
      gradient: "from-green-500/10 to-transparent"
    }
  ];

  return (
    <section className="relative py-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="container relative mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pizza Automat
          </h2>
          <p className="text-xl text-gray-600">
            A Fully Customizable Point Of Sale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6  hover:shadow-sm transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                <div className="relative flex gap-4">
                  <motion.div           initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3,delay:index*0.1}} className={`${feature.color} p-3 rounded-xl  group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </motion.div>
                  <div>
                    <motion.h3 initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3,delay:index*0.1}} className="font-semibold text-gray-900 mb-2 text-lg">
                      {feature.title}
                    </motion.h3>
                    <motion.p initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3,delay:index*0.1}} className="text-gray-600">
                      {feature.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6"
            >
              <Button 
                className="group"
                variant="outline"
                size="lg"
              >
                Request More Information
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-3xl blur-2xl opacity-20" />
            <Image
              src="/pizzam.png"
              alt="Pizza Automat Machine"
              className="relative rounded-2xl  object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16 text-gray-500 font-medium"
        >
          EraVend GmbH & Co. KG
        </motion.div>
      </div>
    </section>
  );
};

export default PizzaAutomatSection;

