import React from 'react'

export default function Footer() {
    const year=new Date().getFullYear()
  return (
   <footer className='bg-info p-2 position-fixed bottom-0 vw-100' style={{backgroundImage:"linear-gradient(to right, #f2709c, #ff9472)"}}>
    <p className='text-white text-center'>Copyright ©️ {year}</p>
   </footer>
  )
}
