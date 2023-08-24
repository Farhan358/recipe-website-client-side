import React from 'react'


const Error = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100 ">
      <div className="text-center">
        <img src="./images/error.jpg" className="mx-auto h-2/3 w-1/3" />
        <p className="mt-4 text-4xl text-accent font-extrabold">404: address not found</p>
      </div>
    </div>
  );
}


export default Error