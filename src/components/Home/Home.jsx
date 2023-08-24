import React from 'react'
import Hero from './Hero'
import Chef from './Chef'
import { useLoaderData } from 'react-router-dom';
import Order from './Order';
import Diet from './Diet';

const Home = () => {

  const chefData = useLoaderData()
  console.log(chefData)
  return (
    <div className='bg-gray-100'>
      <Hero/>
      <div className='my-10'>
        <div>
          <h1 className='text-center text-3xl md:text-6xl font-extrabold bg-none my-3 mx-12 p-3 text-neutral'><span className='shadow-b-lg shadow-secondary'><span className='shadow-sm shadow-secondary'>O</span>ur <span className='shadow-lg shadow-secondary'>C</span>hefs</span></h1>
          <p className='text-center text-sm md:text-lg font-bold my-3 mx-12 p-3 text-neutral'>exceptionally talented, creative, and dedicated skilled craftsmen who are passionate about their work and strive for perfection in every dish they create</p>
        </div>
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mb-10 mt-10 mx-auto  items-center">
      {
        chefData.map(data=>{
          return(
            <Chef {...data}></Chef>
          )
        })
      }
      </div>
      </div>
      <Order/>
      <Diet/>


    </div>
  )
}

export default Home