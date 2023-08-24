import React from 'react'

const Order = () => {
  return (
    <div className='md:flex justify-center items-center m-auto my-10 gap-5'>
      <div>
        <img src="./images/order_banner.jpeg" className='rounded-md' alt="" srcset="" />
      </div>
      
        <div className='p-5'>
          <h1 className='py-5 text-lg text-justify font-medium text-neutral'>We offers a warm and inviting atmosphere, along with an exceptional menu featuring a variety of delicious dishes. Whether you're craving sushi, steak, or vegetarian options, our menu has something for everyone. Come dine-in with us and let us treat you to a wonderful meal!</h1>
          <button className='btn btn-secondary text-neutral'>Order Now</button>
        </div>
      </div>
  )
}

export default Order