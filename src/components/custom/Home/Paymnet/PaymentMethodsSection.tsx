'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Banknote, CreditCard, Bitcoin, Wallet } from 'lucide-react';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Cash",
      description: "Coins and banknotes accepted",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Cards",
      description: "Eurocard, Mastercard and Visa",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Contactless",
      description: "Quick tap-to-pay options",
    },
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "Crypto",
      description: "Bitcoin and other cryptocurrencies",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Methods
          </h2>
          <p className="text-lg text-gray-600">
            Choose your preferred way to pay
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {paymentMethods.map((method, index) => (
            <div
              key={index}
            
              className="group relative bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative">
                <motion.div initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}} className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white shadow-sm mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </motion.div>
                <motion.h3 initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}} className="font-semibold text-gray-900 mb-2">
                  {method.title}
                </motion.h3>
                <motion.p  initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3, delay: index * 0.1}} className="text-sm text-gray-600">
                  {method.description}
                </motion.p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;

