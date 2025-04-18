import React from 'react'
import '../styles/aboutus.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
  <Navbar />
  <div className="flex pt-2">
    {/* Left Side - Team Info */}
    <div className="w-1/2 flex justify-center h-screen px-24 mt-1">
      <div className="max-w-2xl self-center"> {/* Changed to self-center for vertical centering */}
        <div className="header mb-3 text-left w-full">Meet Our Team</div>
        <p className="info text-sm text-left w-full [text-align:left]"> {/* Added explicit CSS */}
          At CodeCade, our mission is to make coding fun, approachable, and within reach for every child.
          <br /><br />
          We are a team of Computer Science students at the University of Central Florida, brought together by our shared passion for coding and a desire to make it more approachable for kids. Although we are all at different stages in our academic journeys, we came together through a UCF program called Project Launch (a program of the student organization KnightHacks) to build something meaningful.
          <br /><br />
          Over the past three months, we've worked together to create CodeCade: an interactive website designed to introduce children to coding through play. Our platform features a dual-screen setup where kids can play a game on one side while seeing the code behind it on the other.
          <br /><br />
          We believe early exposure to computer science can foster creativity, build confidence, and open doors to endless possibilities. We've all felt how overwhelming coding can be when you're starting, and we wanted to create something that makes it just a little less scary.
        </p>
        <p className="team mt-4 text-left w-full [text-align:left]">
          From left to right: Simone, Camya, Katrina, Tyler, Fernando, & Reece 
        </p>
      </div>
    </div>

    {/* Right Side - Our Photo */}
    <div className="w-1/2 flex justify-center items-center h-screen p-10">
      <img 
        src="/images/group-pic.png" 
        alt="CodeCade Team" 
        className="border-8 object-contain border-blue-500 rounded-lg shadow-lg max-h-[80vh]" 
      />
    </div>
  </div>
</div>
    
    )
  }
  

export default page