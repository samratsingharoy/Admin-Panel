import React from 'react'
import Sidenav from '../Sidenav/Sidenav';

const Password = () => {
  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-10 ">ADMIN PANEL</h1>

      {/* Container */}
      <div className="flex w-full max-w-6xl">
        <Sidenav/>
        {/* Main Content */}
      
        <div className="bg-gray-700 rounded-lg shadow-lg p-10 w-80">
          <h2 className="text-white text-center text-xl font-semibold mb-6">Change Password</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="p-3 rounded-lg bg-gray-200 text-black focus:outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-3 rounded-lg bg-gray-200 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold p-3 rounded-lg hover:bg-gray-900"
            >
              Change Password
            </button>
          </form>
        </div>
        </div>
        </div>
    
  )
}

export default Password

