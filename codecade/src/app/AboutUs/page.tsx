import React from 'react'
import '../styles/aboutus.css'

const page = () => {
  return (

    <div className="flex">
    
    {/* Right Side - Team Info */}
    <div className="w-1/2 flex flex-col justify-start items-start h-screen px-32 py-72">
    <div className="header">Meet Our Team</div>
    <p className="info">We are a team of Computer Science Majors currently attending the University of Central Florida. Hope you enjoy the site!</p>
    
    {/* Left Side - Our Photo */}
    </div>
    <div className="flex items-center justify-center min-h-screen">
    <img src="/images/IMG_2313.jpg" alt="CodeWade" className="border-8 border-blue-500 rounded-lg shadow-lg" />
</div>



    </div>

  
  )
  }
  

export default page