import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

const NavBar = () => {
  return (
    <div className=' border-b-[1px] sm:border-b-0 pb-4 sm:pb-0 w-full pt-3 container flex-col sm:flex-row gap-3 sm:gap-0 flex mx-auto justify-between items-center '>
        <Image src={'/image1.png'} width={120} height={120} alt='logo' className='  object-contain rounded p-3'/>
        <div className=' flex gap-2 justify-center items-center'>
            <Button variant={'outline'} className=' text-base shadow-none flex justify-center items-center gap-1'>
            <Phone />
            +1 234 567 890
            </Button>
            <Button variant={'default'} className=' text-base shadow-none flex justify-center items-center gap-1'>
             Contact
            </Button>

        </div>

    </div>
  )
}

export default NavBar