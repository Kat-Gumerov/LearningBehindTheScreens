import React from 'react'
import '../styles/contact.css'

const page = () => {
  return (
    <div className="flex h-screen">
      {/* right half of page */}
    <div className="w-1/2 flex flex-col justify-start items-start h-screen px-32 py-72">
    <div className="header">Contact Us</div>

    <p className="improve">Let us know how we can improve our site, questions, etc!</p>

    <p className="gmail"><a href="mailto:codecade@gmail.com">codecade@gmail.com</a></p>

    </div>

    {/* left half of page */}
    <div className="w-1/2 flex flex-col justify-start items-end h-screen px-48 py-48">

    {/* Form to send email */}
    <form action="send_email.php" method="POST">
      <div className="max-w-lg mx-auto p-4 border-2 border-blue-500 rounded-lg shadow-lg bg-sky-200 space-y-4">
      <h1 className="formName">Get In Touch</h1>

      {/* Flex first and last name */}
      <div className="flex space-x-4">
      <div>
      <input type="text"
        name="first"
        id="first"
        className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder="First Name" required />
       </div>

      <div>
      <input type="text"
        name="last"
        id="last"
        className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Last Name" required />
        </div>

      </div>

      {/* User Email Input */}
      <input type="email"
        name="email"
        id="email"
        className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Your Email" required />
    
      {/* User Phone Number Input */}
      <input type="tel"
        name="phone"
        id="phone" className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone Number" required />
      
      {/* User Message Input */}
      <textarea
        name="message" 
        id="message" 
        className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer min-h-[100px] text-start" 
        placeholder="How can we help?" required />
      
      {/* Submit Button */}
      <button
        type="submit"
        className="w-1/3 mx-auto bg-[#06D6A0] text-white py-2 rounded-lg hover:bg-blue-700 transition block text-center">
          Submit
        </button>
        
      </div>

    </form>
    </div>

    </div>
  )
  }
  

export default page