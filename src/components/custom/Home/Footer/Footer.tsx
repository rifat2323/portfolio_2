'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, content: "Güldenstr. 9, 86343 Königsbrunn", href: "https://goo.gl/maps/your-address" },
    { icon: <Phone className="w-5 h-5" />, content: "+49 821 20969113", href: "tel:+4982120969113" },
    { icon: <Mail className="w-5 h-5" />, content: "info@eravend.com", href: "mailto:info@eravend.com" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {/* Logo and Social Links */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3">
                <Image 
                  src="/footer.webp" 
                  alt="Der Pizzamat Logo" 
                  className="h-16 w-auto"
                  width={64}
                  height={64}
                />
                <div>
                  <h2 className="font-bold text-2xl text-gray-800 group-hover:text-orange-500 transition-colors">DER PIZZAMAT</h2>
                  <p className="text-sm text-gray-600 mt-1">HERSTELLUNG & VERTRIEB</p>
                </div>
              </div>
            </Link>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-xl text-gray-800">Contact Us</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-gray-600 hover:text-orange-500 transition-colors group"
                  whileHover={{ x: 3 }}
                >
                  <span className="text-orange-500 group-hover:text-orange-600 transition-colors">{item.icon}</span>
                  <span>{item.content}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-semibold text-xl text-gray-800">Stay Updated</h3>
            <p className="text-gray-600">Get the latest updates on our delicious pizzas!</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          © {new Date().getFullYear()} DER PIZZAMAT. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

