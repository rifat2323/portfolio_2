'use client'

import React from 'react';
import { ArrowRight, Box, PizzaIcon, DoorOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Image1 from '../../../../../public/9.png'
import Image2 from '../../../../../public/pizzam.png'
import { cn } from '@/lib/utils';

const ModelsSection = () => {
  const models = [
    {
      name: "PM27",
      image: Image1,
      specs: [
        { icon: <Box className="h-4 w-4" />, label: "Stored Pizzas", value: "72" },
        { icon: <PizzaIcon className="h-4 w-4" />, label: "Deck Oven", value: "1" },
        { icon: <DoorOpen className="h-4 w-4" />, label: "Delivery Hatch", value: "1" }
      ]
    },
    {
      name: "PM32",
      image: Image2,
      specs: [
        { icon: <Box className="h-4 w-4" />, label: "Stored Pizzas", value: "69" },
        { icon: <PizzaIcon className="h-4 w-4" />, label: "Deck Oven", value: "1" },
        { icon: <DoorOpen className="h-4 w-4" />, label: "Delivery Hatch", value: "1" }
      ]
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-orange-50  pt-8">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your <span className="text-orange-500">Pizza Vending Machine</span>
        </motion.h2>

        <div className=" w-full container mx-auto flex flex-col sm:flex-row justify-center items-center gap-4">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className=""
            >
              <Card className={cn(" shadow-none border-none overflow-hidden max-w-sm md:max-w-md hover:shadow-lg transition-all duration-300 transform  ",{
                "ring-2  ring-orange-300": index === 0,
              })}>
                <div className=" flex flex-col">
                  <Image
                    src={model.image}
                    alt={`Pizza Automat ${model.name}`}
                   
                  
                    className="transition-transform duration-300 hover:scale-105 aspect-square"
                    width={500}
                    height={700}
                  />
                
                  <div className=" p-6 ">
                    <h3 className="text-2xl font-bold">Model {model.name}</h3>
                    <p className="text-sm">Advanced Pizza Vending Solution</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {model.specs.map((spec, idx) => (
                      <div key={idx} className=" group flex flex-col items-center text-center">
                        <div className="text-orange-500 group-hover:-translate-y-full transition-all duration-300 mb-2">{spec.icon}</div>
                        <p className="text-lg font-semibold">{spec.value}</p>
                        <p className="text-xs text-gray-600">{spec.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white transition-colors duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;

