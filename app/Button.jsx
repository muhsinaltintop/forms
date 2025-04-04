import Link from 'next/link'
import React from 'react'

const Button = ({label, path}) => {
  return (
    <div className='w-fit bg-green-950 text-white rounded-md p-2 hover:bg-green-800 transition-all duration-300'>
        <Link href={path}>{label}</Link>
    </div>
  )
}

export default Button