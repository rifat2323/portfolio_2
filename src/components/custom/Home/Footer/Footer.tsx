"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image'

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-slate-50 py-12 px-4">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Image 
                  src="/footer.webp" 
                  alt="Der Pizzamat Logo" 
                  className="h-12"
                  width={100}
                  height={100}
                />
                <span className="font-bold text-xl text-slate-800">DER PIZZAMAT</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">HERSTELLUNG & VERTRIEB</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-medium text-lg text-slate-800">EraVend GmbH & Co. KG</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Güldenstr. 9, 86343 Königsbrunn</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+4982120969113" className="hover:text-blue-600 transition-colors">
                  +49 821 20969113
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:info@eravend.com" className="hover:text-blue-600 transition-colors">
                  info@eravend.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8" />

        <motion.div 
          className="text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} DER PIZZAMAT. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;