import React from 'react'
import Sidenav from '../Sidenav/Sidenav';

const Hero = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-10 ">ADMIN PANEL</h1>

      {/* Container */}
      <div className="flex w-full max-w-6xl">
        {/* Sidebar */}
        <Sidenav/>
        {/* Main Content */}
        <div className="w-4/5 p-8 flex flex-col items-center justify-center">
          <p className="text-xl font-bold mb-4 text-center">Team details sent for approval</p>
          <p className="text-xl font-bold text-center">The details will be uploaded shortly</p>
          <div className="mt-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
