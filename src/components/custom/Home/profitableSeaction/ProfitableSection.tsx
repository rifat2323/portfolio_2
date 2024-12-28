"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, DollarSign, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProfitableSection = () => {
 

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true,amount:0.4 }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-slate-800 mb-4"
            initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3}}
          >
            Profitable Investment
          </motion.h2>
          <motion.p 
            className="text-slate-600 max-w-2xl mx-auto"
            initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3}}
          
          >
            Turn your space into a profitable venture with our automated pizza solution
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3}} >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-blue-500" />
                  Low Investment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Save on premises, equipment, and staff. Pay only about 1/15th of usual rental costs with no service staff needed.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3}}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  Quick ROI
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Break-even at just 7 pizzas per day. With 32 daily sales, investment returns in 9 months.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ filter:"blur(4px)" }} whileInView={{ filter:"blur(0px)" }} viewport={{once:true, amount:0.2}} transition={{duration:0.3}}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  High Margins
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  €1.60 production cost, €8.50 selling price. Exceptional profit margins per unit sold.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button 
            size="lg" 
            className="bg-black hover:bg-slate-800 text-white px-8"
          >
            Get Free Project Study →
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfitableSection;