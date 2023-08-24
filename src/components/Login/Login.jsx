import React, { useState,useContext } from 'react'
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import {Link} from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import app from '../../configs/firebase.config';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth(app);
  // console.log(app)

  const {signIn}= useContext(AuthContext)

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

   const handleGoogleLogin = () =>{
    popUpsignInsignInWithPopup(auth,googleProvider) 
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log('error: ', error.message)
    })
   }

 const handleGitHubLogin = () =>{
    signInWithPopup(auth,githubProvider) 
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>{
      console.log('error: ', error.message)
    })
   }

  const handleEmailLogin = () => {
    signIn(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };




 
  return (
    <div className="flex flex-col items-center justify-center w-11/12 bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password:
          </label>
          <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="flex flex-col">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline" onClick={handleEmailLogin}>Login with email</button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline" onClick={handleGoogleLogin}>Login with Google</button>
          <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline" onClick={handleGitHubLogin}>Login with GitHub</button>
          <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Dont have an account? Register here.
            </Link>
        </div>
      </div>
    </div>
  );
};


export default Login