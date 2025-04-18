"use client";
import React from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = "service_647gs9b";
const TEMPLATE_ID = "template_9286of6";
const PUBLIC_KEY = "kGD9MQ4qOffUEhQpK";  
const Contact = () => {
    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      console.log("Sending email...");
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)

        .then((result) => {
          alert('Message Sent Successfully')
        }, (error) => {
          console.log(error.text);
          alert('Something went wrong!')
        });
        (form as HTMLFormElement).reset();

    };

  
  return (
    <div className="flex h-screen">
      {/* right half of page */}
    <div className="w-1/2 flex flex-col justify-start items-start h-screen px-32 py-72">
    <div className="header">Contact Us</div>

    <p className="improve">Let us know how we can improve our site, questions, etc!</p>

    <p className="gmail"><a href="mailto:codecade@gmail.com">codecade@gmail.com</a></p>

    <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSebMap-KWLzFTyUwEiSXQZZlQP5JxQCAKDUDOAc7u6xWewwSQ/viewform?pli=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fill out our Pre Survey Form!
      </a>
    <br></br>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScY5fL6YfcwUQwRDici41Bgtbe_fccSuEtrEHLDHJKNXMHvIA/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fill out our Post Survey Form!
      </a>
      <br></br>

    </div>

    {/* left half of page */}
    <div className="w-1/2 flex flex-col justify-start items-end h-screen px-48 py-48">
    {/* Form to send email */}
    <form className="contactForm" onSubmit={handleOnSubmit}>
      <div className="max-w-4xl mx-auto p-4 border-2 border-blue-500 rounded-xl shadow-lg bg-sky-200 space-y-6">
      <h1 className="formName">Get In Touch</h1>

      {/* Flex first and last name */}
      <div className="flex justify-between space-x-6">
      <div className="flex-grow">
      <input type="text"
        name="first"
        id="first"
        className="block py-4 px-4 w-full text-base text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-start" 
        placeholder="First Name" required />
       </div>

      <div className="flex-grow">
      <input type="text"
        name="last"
        id="last"
        className="block py-4 px-4 w-full text-base text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer text-start"
        placeholder="Last Name" required />
        </div>

      </div>

      {/* User Email Input */}
      <input type="email"
        name="email"
        id="email"
        className="block py-4 px-3 w-full text-base text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Your Email" required />
    
      {/* User Phone Number Input */}
      <input type="tel"
        name="phone"
        id="phone" className="block py-4 px-3 w-full text-base text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Phone Number" required />
      
      {/* User Message Input */}
      <textarea
        name="message" 
        id="message" 
        className="block py-4 px-3 w-full text-base text-gray-900 bg-white border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer min-h-[100px] text-start" 
        placeholder="How can we help?" required />
      
      {/* Submit Button */}
      <button
        type="submit"
        className="w-1/3 mx-auto bg-[#06D6A0] text-[#073B4C] font-bold py-3 rounded-lg hover:bg-blue-700 transition block text-center border-0 border-b-2 border-gray-300 rounded-lg appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
          Submit
        </button>
        
      </div>

    </form>
    </div>

    </div>
  )
}
  

export default Contact