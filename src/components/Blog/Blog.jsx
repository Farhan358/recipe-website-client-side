import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Pdf from 'react-to-pdf'



const Blog = () => {

  const blogData = useLoaderData();

  const ref = React.createRef();


  

  return (
    <div className='w-full bg-gray-100'>
      <div className='flex justify-between m-5 p-4 bg-neutral rounded text-primary'>
        <h1 className='font-extrabold text-3xl' >Blog Page</h1>
        {/* <button className='btn btn-secondary' ></button> */}
        <Pdf targetRef={ref} filename="blogs.pdf" x={0} y={0} scale={.62}>
        {({ toPdf }) => <button className='btn btn-secondary' onClick={toPdf}>Download Pdf</button>}
      </Pdf>
        
      </div>
      <div ref={ref}>
      {
        blogData.map(data=>{
          return(
            <div className='card bg-secondary m-3 md:m-10'>
              <div className='card-body'>
              <h1 className='card-title text-neutral'>{data.title}</h1>
              <p className='bg-white md:m-5 p-4 rounded-md text-justify text-neutral'>{data.content}</p>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Blog