import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-primary text-neutral p-2'>
        <Image src='/logo.png' height='200' width='200' alt='yildiz-logo'/>
    </div>
  )
}

export default Header