import React from 'react'
import Container from '../Container'

export default function TopBar() {
  return (
    <Container>
      <div className='py-2'>
        <div className='flex justify-between items-center'>
          {/* left */}
          <div className='flex'>
            <p>Welcome to Learnisty</p>
            {/* <p>Call +88 01612929275</p> */}
            {/* <p>Follow Us</p> */}
          </div>
          {/* Right */}
          <div className='flex items-center justify-end gap-2'>
            <button className='py-1 px-5 bg-Primary text-white rounded-3xl cursor-pointer'>Login</button>
            <button className='py-1 px-5 bg-Primary text-white rounded-3xl cursor-pointer'>Register</button>
          </div>
        </div>
      </div>
    </Container>
  )
}
