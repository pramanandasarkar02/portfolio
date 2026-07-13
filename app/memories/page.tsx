import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-[50vw] mx-auto min-h-screen border-l-2 border-r-2 border-border-color bg-white flex flex-col">
        <Navbar />

        
      </div>
    </div>
  )
}

export default page