import React, { useContext } from 'react'
import ActiveLink from '../components/ActiveLink/ActiveLink'
import { Link } from 'react-router-dom'
import { AuthContext } from '../components/provider/AuthProvider'

const Nav = () => {
const {user,logOut} = useContext(AuthContext)


const handleLogOut =() =>{
  logOut()
  .then()
  .catch(error=>{
    console.log(error)
  })
}

  return (
    <div className='flex p-2 mt-5 justify-between border-t-2 border-b-2 '>
    <div className='w-auto'>
      <h1 className='text-4xl font-mono font-bold'><span className='text-secondary'>M</span>omo <span className='text-secondary'>M</span>iso  </h1>
    </div> 
    <div className='flex justify-between w-auto'>
    <div className='mt-2'>
      <ul className='text-2xl font-bold'>
        <ActiveLink to="/" className=''>Home</ActiveLink>
        <ActiveLink to="/blog" className='mr-10'>Blog</ActiveLink>
      </ul>
    </div>
    <div className='flex'>
      {user?
       (<div className='flex'>
       <img src={user?.photoURL} alt="user" className='h-8 w-8 rounded-full ml-5' srcset="" />
       <button onClick={handleLogOut} className='btn btn-secondary text-primary ml-5'>LogOut</button>
     </div>):
      (<div>
        <Link to="/login" className='btn btn-secondary text-primary'>Login</Link>
      </div>)
     
    }
    </div>

    </div>

  </div>

  )
}

export default Nav