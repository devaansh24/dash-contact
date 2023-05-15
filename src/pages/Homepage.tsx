import React from 'react'
import CreateContact from './CreateContact'

const Homepage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center min-h-screen bg-gray-100 md:h-screen sm:h-screen">
      <CreateContact />
    </div>
  );
}

export default Homepage