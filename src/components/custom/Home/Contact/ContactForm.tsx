"use client"

import React from 'react';
import { motion } from 'motion/react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';


const ContactForm = () => {
  return (
    <section className="py-6 px-4 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-2 text-gray-600">Get in touch with our team</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input id="firstName" placeholder="John" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input id="lastName" placeholder="Doe" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="postal">Postal Code</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input id="postal" placeholder="12345" />
                </motion.div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <Input id="city" placeholder="Your City" />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Country</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Language</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <motion.div whileHover={{ scale: 1.01 }}>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  className="h-32 resize-none"
                 
                />
                </motion.div> 
              </div>
            
            

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I accept the processing of my data by EraVend
              </Label>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;