import Link from 'next/link'
import { IoMdTime } from "react-icons/io";
import React from 'react'

const NewsContent = ({title, date}) => {
  return (
    
    <Link href={"/"}>
      <div className="mb-4">
        <h3 className="text-title font-semibold mb-2 ">
          {title}
        </h3>
        <div className="flex flex-row gap-1">
          <IoMdTime style={{color: '#000000' }}/>
          <p className="text-[#5E5C5C] text-xs font-medium">{date}</p>
        </div>
      </div>
    </Link>
  )
}

export default NewsContent