import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
   <div className="flex-cols md:flex md:p-2 justify-center items-center bg-secondary">
    <div className='flex justify-center items-center'>
    <Link to="#" className="facebook md:my-5 md:p-3 my-2 p-1 text-neutral"><FontAwesomeIcon icon={faFacebookF}  className='w-6 h-6'/>Facebook</Link>
    </div>
    <div className='flex justify-center items-center'>
      <Link to="#" className="twitter md:my-5 my-2 p-1 md:p-3 text-neutral"><FontAwesomeIcon icon={faTwitter} className='w-6 h-6'/> twitter</Link>

    </div>
    <div className='flex justify-center items-center'>
      <Link to="#" className="instagram md:my-5 md:p-3 my-2 p-1 text-neutral"><FontAwesomeIcon icon={faInstagram} className='w-6 h-6'/> Instagram</Link>
    </div>
    </div>
  )
}

export default Footer