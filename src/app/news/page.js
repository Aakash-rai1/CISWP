"use client";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Menu } from '@headlessui/react'

const page = () => {
  return (
    <div>
      <button className='block p-4 border-secondaryO border-3 outline-secondaryLight'> Dropdown</button>
      <div className='bg-secondaryLight p-8 w-fit rounded-xl'>
        <a>a</a>
        <a>b</a>
      </div>
      <div className="container mt-12 mx-auto px-16 py-4">
      </div>
      <div className="container mt-12 mx-auto px-16 py-4">
      </div>
      <Footer />

    </div>
  )
}

export default page