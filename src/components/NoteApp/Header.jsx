import React from 'react'

export default function Header() {
  return (
    <div className='header p-2 bg-info d-flex gap-2 align-items-center'  style={{backgroundImage:"linear-gradient(to right, #f2709c, #ff9472)"}}>
    <h3 className='ms-4'>📝</h3>
<h1 className='text-white fs-4'>Note Taker</h1>
    </div>
  )
}
