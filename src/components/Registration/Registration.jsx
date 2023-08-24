import React, { useContext, useState } from "react";
import {Link} from 'react-router-dom'
import { AuthContext } from "../provider/AuthProvider";





const Registration = ()=>{
  // const auth = getAuth(app)
 const {user,createUser} = useContext(AuthContext)
 console.log(createUser)
 
  const [error,setError] = useState("")
  const [success,setSuccess] = useState("")

  const handleSubmit=(event)=>{
    event.preventDefault();
    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value
    const url = event.target.photo_url.value

    if(password.length<6){
      setError("password to short")
    }

    createUser(email,password)
    .then(result=>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setError("")
      event.target.reset()
      setSuccess("Registration Complete")
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
      setSuccess("")
  })
  }
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  // const [name,setName] = useState("")
  // const [url,setUrl] = useState("")

 

  const handleEmailChange= (event)=>{
    console.log(event.target.value)
  }

  const handlePasswordBlur= (event)=>{
    console.log(event.target.value)
  }
  const handleNameChange= (event)=>{
    console.log(event.target.value)
  }
  const handleUrlChange= (event)=>{
    console.log(event.target.value)
  }

  return (
        <div className="flex justify-center items-center w-11/12">
          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  name="name" 
                  // value=""
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  // value=""
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  // value=""
                  onChange={handlePasswordBlur}
                  // minLength="6"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="photo_url">
                  Photo URL
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="photo_url"
                  type="text"
                  placeholder="Enter the URL for your profile photo"
                  name="photo_url"
                  // value=""
                  onChange={handleUrlChange}
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit" value="register"
                >
                  Register
                </button>
                <Link
                  to="/login"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                  Already have an account? Login here.
                </Link>
              </div>
            </form>

        {error && 
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
        </div>
        }
        
        {
          success &&
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success: </strong>
            <span className="block sm:inline">{success}</span>
        </div>
        }
        
         
        
        
            
          </div>
        </div>
      );
}

export default Registration
