import React from 'react'

const Diet = () => {
  return (
    <div className='md:flex justify-center items-center  my-10 gap-5 p-4'>
      <div className='p-5 '>
        <h1 className='py-5 text-lg text-justify font-medium text-neutral'>We offers a range of healthy and flavorful options that are perfect for anyone looking to eat well and maintain a balanced diet. We recommend trying our miso soup with tofu and seaweed, grilled salmon with brown rice and steamed vegetables, or our vegetable stir-fry with tofu and soba noodles. These dishes are packed with nutrients and flavors, and are sure to satisfy your cravings while keeping you on track with your health goals.</h1>
        <button className='btn btn-secondary text-neutral'>View Menu</button>
      </div>

      <div className=''>
        <img src="./images/diet_platter.jpeg" className='rounded-md' alt="" srcset="" />
      </div>
    </div>
  )
}

export default Diet