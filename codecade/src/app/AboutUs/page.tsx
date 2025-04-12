import React from 'react'
import '../styles/aboutus.css'

const page = () => {
  return (

    <div className="flex">
    
    {/* Right Side - Team Info */}
    <div className="w-1/2 flex flex-col justify-start items-start h-screen px-24 py-32">
    <div className="header">Meet Our Team</div>
    <p className="info">
      At CodeCade, our mission is to make coding fun, approachable, and within reach for every child.

      We are a team of Computer Science students at the University of Central Florida, brought together by our shared passion for coding and a desire to make it more approachable for kids. Although we are all at different stages in our academic journeys, we came together through a UCF program called Project Launch (a program of the student organization KnightHacks) to build something meaningful. <br></br> <br></br>

      Over the past three months, we've worked together to create CodeCade: an interactive website designed to introduce children to coding through play. Our platform features a dual-screen setup where kids can play a game on one side while seeing the code behind it on the other. We designed it this way to help bridge the mental gap between the games they love and the code that powers them so they can start to see coding not as something abstract but as something exciting and within reach. We hope to spark their curiosity and inspire them to explore more.

      We believe early exposure to computer science can foster creativity, build confidence, and open doors to endless possibilities. We’ve all felt how overwhelming coding can be when you're starting, and we wanted to create something that makes it just a little less scary.

      <br></br>
      </p>
      <p className = "team">
        Meet the team: Katrina, Reece, Fernando, Camya, Tyler, and Simone.
      
      </p>
    
    {/* Left Side - Our Photo */}
    </div>
    <div className="flex items-center justify-center min-h-screen py-32">
    <img src="/images/IMG_5177.PNG" alt="Team Photo" className="border-8 border-blue-500 rounded-lg shadow-lg" />
</div>



    </div>

  
  )
  }
  

export default page