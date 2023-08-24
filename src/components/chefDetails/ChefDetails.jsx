import React,{useState,useEffect} from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";
import LazyLoad from 'react-lazy-load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ChefDetails = () => {

  const [loading,setLoading]= useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  const data = useLoaderData()
  // console.log(data)
  const {id} = useParams()
  // console.log(id)
  const {chef_name, bio, banner_image, profile_image, recipe,  experience, chef_rating} = data
  

  // const [isToast,setToast] = useState(false);
  // const [disable, setDisable] = useState(false);
  // const notify = (data) => {
  //   setToast(true)
  //   if (isToast) {
  //     toast("added to favourite");
  //     console.log("toast")
  //     setToast(false);
  //   }
  //   setDisable(true)
  // }

  // const [disable, setDisable] = useState(false);

  const handleDisable =(event)=> {
    event.currentTarget.disabled = true;
    toast("added to favourite");
  }

  const [isToast,setToast] = useState(false);



    

  return (
    <>
    {
      loading? 
      ( <div className='loader flex justify-center items-center h-screen'>
      <ClipLoader color='#92c156' size={50} aria-label="Loading Spinner" data-testid="loader"/>
  </div>) 
      : 
      (
      <div className='bg-gray-100 grid grid-cols-1'>
      
        <div className=''>
          <LazyLoad height={400}>
            <img src={banner_image} alt=""  className='rounded-sm contain w-full h-64 md:h-96'/>
          </LazyLoad>
          </div>


        <div className='flex  m-5 justify-center items-center gap-5'>
            <img src={profile_image} alt="" className='w-48 h-48 rounded-full border-2 border-secondary' />
            <div>
            <h1 className='text-3xl  font-bold mb-2'>{chef_name}</h1>
            <p className='text-sm  font-medium pr-10'>{bio}</p>
          </div>
          </div>
          
          <div>
            {
              recipe.map((data,index)=>{
                return(
                  <div className='border rounded-md m-3 border-neutral md:flex '>
                    <div>
                    <img src={data.image} alt="" className=' w-full md:w-48 h-48 rounded-sm p-3'/>
                    </div>
                    <div className='m-3'>
                      <h1 className='text-3xl font-extrabold'>{data.japanese_food_name}</h1>
                      <div className='mt-3'>
                        <span> <span className='text-lg font-bold'>Ingredients :</span> 
                        {
                          data.ingredients.map(item=>{
                            return( <p className='inline ml-3 text-sm'>{item}</p>)
                          })
                        }
                        </span>
                      </div>
                      <p className='text-sm'><span className='text-lg font-bold mr-3'>Cooking Method :</span>{data.cooking_method}</p>
                      <p className='text-sm'><span className='text-lg font-bold mr-3'>Rating :</span>{data.food_rating}</p>
                      <div className='mt-2'>
                        <button onClick={(event)=>handleDisable(event)}   className='btn btn-secondary lowercase font-bold text-neutral'>
                          <FontAwesomeIcon icon={faHeart} className='mr-2' />favourite</button>
                        <ToastContainer 
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                        />
                    </div>
                    </div>
                    
                  </div>
                )
              })
            }
            </div>
          

    </div>
    )
    }
    </>
    
  )
}

export default ChefDetails