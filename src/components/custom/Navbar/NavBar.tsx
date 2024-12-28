'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const NavBar = () => {
  return (
    <nav className="w-full border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/image1.png" width={60} height={60} alt="Logo" className="object-contain" />
          </Link>
          <div className="hidden sm:flex items-center space-x-4">
            <Button variant="outline" className="text-sm font-medium flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +1 234 567 890
            </Button>
            <Button variant="default" className="text-sm font-medium">
              Contact Us
            </Button>
          </div>
          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  <Button variant="outline" className="text-sm font-medium flex items-center gap-2 justify-center">
                    <Phone className="h-4 w-4" />
                    +1 234 567 890
                  </Button>
                  <Button variant="default" className="text-sm font-medium">
                    Contact Us
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

