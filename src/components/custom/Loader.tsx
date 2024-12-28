import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className=' w-full flex flex-col min-h-dvh justify-center items-center'>
        <Image
        src={'/loader.webp'}
        width={500}
        height={600}
        className='w-24 h-24 animate-spin transition-all'
        alt='loader'
        />

    </div>
  )
}

export default Loader