import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 text-white flex justify-center items-center p-4 h-16">
        <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!
        </p>
    </footer>
  )
}

export default Footer