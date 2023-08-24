import React from 'react'


const Hero = () => {
  return (
    <div className='mt-3'>
      <div className="bg-[url('./images/banner.jpg')] bg-center bg-cover flex-col  justify-center items-center text-center p-10">
        <h1 className='text-2xl md:text-5xl mt-5 p-5 pb-2 font-bold'>Enjoy Our <span className='text-secondary'>Fresh</span> and <span className='text-secondary'>Delicious</span> <br/>Couisines</h1>
        <p className='text-sm md:text-2xl  p-3 font-medium'>From savory sushi to umami-packed ramen, experience the true taste of Japan with every bite</p>
      </div>

    </div>
  )
}

export default Hero