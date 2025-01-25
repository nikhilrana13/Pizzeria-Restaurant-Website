import React from 'react'
import ContactForm from '../Components/ContactForm' 

const Contact = () => {
  return (
    <div className='  flex flex-col items-center mt-5 mb-5 gap-5'>
        <h1 className='text-[2rem] font-[700] md:text-[3rem] lg:text-[4rem] text-red-600 text-center'>Contact us</h1>
      <div className='flex mt-5 mb-5'>
          <ContactForm />
      </div>
      
    </div>
  )
}

export default Contact
