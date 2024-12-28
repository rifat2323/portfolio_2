"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  Banknote,
  CreditCard,
  Bitcoin,
  Wallet,
  ChevronRight
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const PaymentMethodsSection = () => {
  const paymentMethods = [
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Cash",
      description: "Coins and banknotes accepted",
      color: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Cards",
      description: "Eurocard, Mastercard and Visa",
      color: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Contactless",
      description: "Quick tap-to-pay options",
      color: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "Crypto",
      description: "Bitcoin and other cryptocurrencies",
      color: "bg-orange-50",
      textColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-neutral-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900">Payment Methods</h2>
          <p className="mt-4 text-gray-600">
            Multiple payment options for your convenience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 ${method.color}`}>
                <CardContent className="p-6">
                  <div className={`${method.textColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600">{method.description}</p>
                  <ChevronRight className={`w-5 h-5 mt-4 ${method.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentMethodsSection;