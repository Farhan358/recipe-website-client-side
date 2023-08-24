import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'


const Chef = (props) => { 
  

  


  const {id,chef_name,profile_image,recipe,experience,chef_rating} = props
  // console.log(id, chef_name,)
return(<>
 
   
  <div className='card w-full md:w-72 bg-base-100 shadow-md shadow-secondary items-center'>
      <figure><img src={profile_image} alt="" className='rounded-md h-64' /></figure>
      <div className='card-body'>
        <h1 className='card-title font-extrabold bg-secondary p-2 text-neutral'>{chef_name}</h1>
        
          <div className='font-semibold'>
            <p>{experience} years of experience</p>
            <p className=''>special recipes from the chef: {recipe.map(data=>{return(<li>{data.japanese_food_name}</li>)})} </p>
          </div>
      <div>
        <p className='text-neutral  font-bold text-lg'><span className='mx-2'><FontAwesomeIcon icon={faThumbsUp} /></span><span>{chef_rating}k</span></p>
      </div>

      </div>
      <Link to={`/chefdetails/${id}`} className='btn  btn-secondary p-3 mb-5'>View Recipes</Link>
      
  </div> 
    


</>
  
)
}

export default Chef;