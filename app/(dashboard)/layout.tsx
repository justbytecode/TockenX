import Navbar from '@/components/Navbar'
import React from 'react'

const LayoutPage = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='bg-gray-800 min-h-screen'>
      
        <Navbar />
        {children}
      
    </div>
  )
}

export default LayoutPage