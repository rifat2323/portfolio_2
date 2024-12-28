import React from 'react';
import {
  AlarmClock,
  CreditCard,
  Microwave,
  Pizza,
  Plug,
  Settings,
  ThermometerSun,
  Umbrella,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Sales = () => {
  const features = [
    {
      title: 'Flexible Installation',
      description: 'Indoor or outdoor placement options available',
      icon: <Umbrella size={24} />,
      color: 'bg-gradient-to-br from-blue-50 to-blue-100',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200',
    },
    {
      title: 'Massive Variety',
      description: 'Store up to 72 pizzas with 250+ recipe options',
      icon: <Pizza size={24} />,
      color: 'bg-gradient-to-br from-green-50 to-green-100',
      textColor: 'text-green-700',
      borderColor: 'border-green-200',
    },
    {
      title: 'Temperature Control',
      description: 'Serve both hot and cold options perfectly',
      icon: <ThermometerSun size={24} />,
      color: 'bg-gradient-to-br from-red-50 to-red-100',
      textColor: 'text-red-700',
      borderColor: 'border-red-200',
    },
    {
      title: '24/7 Service',
      description: 'Never miss a sale with round-the-clock operation',
      icon: <AlarmClock size={24} />,
      color: 'bg-gradient-to-br from-amber-50 to-amber-100',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200',
    },
    {
      title: 'Universal Payments',
      description: 'Accept all payment methods including crypto',
      icon: <CreditCard size={24} />,
      color: 'bg-gradient-to-br from-purple-50 to-purple-100',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200',
    },
    {
      title: 'Restaurant-Grade Oven',
      description: 'Professional cooking quality in every slice',
      icon: <Microwave size={24} />,
      color: 'bg-gradient-to-br from-orange-50 to-orange-100',
      textColor: 'text-orange-700',
      borderColor: 'border-orange-200',
    },
    {
      title: 'Smart Connected',
      description: 'Real-time monitoring and management',
      icon: <Plug size={24} />,
      color: 'bg-gradient-to-br from-cyan-50 to-cyan-100',
      textColor: 'text-cyan-700',
      borderColor: 'border-cyan-200',
    },
    {
      title: 'Complete Control',
      description: 'Manage everything from our powerful app',
      icon: <Settings size={24} />,
      color: 'bg-gradient-to-br from-pink-50 to-pink-100',
      textColor: 'text-pink-700',
      borderColor: 'border-pink-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-red-100 opacity-20" />
        <div className="relative px-6 py-16 sm:px-8 md:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">The Future of</span>
              <span className="block text-orange-600">Pizza Vending</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Experience the revolution in automated pizza service. Our smart vending machines 
              deliver restaurant-quality pizzas 24/7, bringing convenience and quality together.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-12 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group transition-all duration-300 hover:scale-105 ${feature.color} border-2 ${feature.borderColor} shadow-lg hover:shadow-xl`}
            >
              <CardHeader>
                <div className={`flex items-center justify-center h-12 w-12 rounded-lg ${feature.textColor} mx-auto`}>
                  {feature.icon}
                </div>
                <CardTitle className={`text-center text-lg font-semibold mt-4 ${feature.textColor}`}>
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-center text-sm ${feature.textColor} opacity-90`}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sales;