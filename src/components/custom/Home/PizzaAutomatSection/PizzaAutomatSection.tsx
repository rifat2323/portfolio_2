"use client"


import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Smartphone, Shield, Layout, Scissors } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const PizzaAutomatSectionUser = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="w-full bg-white py-20 px-4">
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Pizza Automat
          </h2>
          <p className="text-2xl text-slate-700 font-medium">
            A Fully Customizable Point Of Sale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <Layout className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Universal Application</h3>
                    <p className="text-slate-600">
                      Universally applicable and designed for easy setup both indoors and outdoors, 
                      providing maximum flexibility for your business location.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <Scissors className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Customizable Design</h3>
                    <p className="text-slate-600">
                      Offers individual customization options to design the machine according to 
                      your ideas, helping establish your unique brand identity.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <Smartphone className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">High Visibility Display</h3>
                    <p className="text-slate-600">
                      Features a 55-inch display for advertising content, ensuring high visibility 
                      and ease of use for all customers, including those with disabilities.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">Durable & Safe</h3>
                    <p className="text-slate-600">
                      Equipped with tempered glass to ensure durability and safety, 
                      providing a secure and long-lasting investment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:pl-8"
          >
            <div className="relative">
              <Image 
                src="/pizzam.png" 
                alt="Pizza Automat Machine" 
                className="w-full rounded-2xl shadow-2xl"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="text-center mt-12 text-slate-600"
        >
          EraVend GmbH & Co. KG
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PizzaAutomatSectionUser;