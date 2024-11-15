import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_q1oomuj', 
      'template_h7t4geh', 
      form.current,
      'WvTca2_Igoe3uLlbN' 
    )
    .then((result) => {
        console.log('Message sent successfully:', result.text);
        alert('Your message has been sent!');
        form.current.reset();
    })
    .catch((error) => {
        console.log('Failed to send message:', error.text);
        alert('An error occurred. Please try again.');
    });
  };

  return (
    <div name='contact' className='w-full p-4 pb-44 text-white h-fit bg-gradient-to-b from-black to-gray-800'>
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        <div className='pt-44'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Submit the form below to get in touch with me</p>
        </div>
        <div className='flex items-center justify-center'>
          <form 
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col w-full md:w-1/2'>
            <input 
              type="text" 
              name='name' 
              placeholder='Enter your name' 
              className='p-2 text-white bg-transparent border-2 rounded-md focus:outline-none' 
              required 
            />
            <input 
              type="email" 
              name='email' 
              placeholder='Enter your email' 
              className='p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none' 
              required 
            />
            <textarea 
              name="message" 
              placeholder='Enter your message'
              rows="10" 
              className='p-2 bg-transparent border-2 focus:outline-none' 
              required
            ></textarea>
            <button 
              type="submit"
              className='flex items-center px-6 py-3 mx-auto my-8 text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
