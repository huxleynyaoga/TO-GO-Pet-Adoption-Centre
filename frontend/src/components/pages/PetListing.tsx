import React from 'react'
import Header from '../layout/Header'
import petlisting from "../../assets/images/petlisting.jpeg"
import Petcard from '../common/PetCard'
import {usePets} from '../../hooks/usePets'
import Footer from '../layout/Footer'
const PetListing:React.FC= () => {
    const{loading,petList,error}=usePets();
    if(loading)
        return <div className='p-3 bg-slate-500 rounded-md mx-auto max-w-xl mt-4 text-center text-white'>
            <p>Data is Being Fetched Please Wait a bit</p>
        </div>
        if(error)
            return <div>Please Try Again Later:{error}
            </div>

  return (
<section className="min-h-screen flex flex-col">
<Header />
<section
         className="w-full  h-[498px]  bg-cover bg-center"
          style={{
            backgroundImage: `url(${petlisting} )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
            <div className="  h-full  flex flex-col justify-center m-4  items-center">
            <h1 className="text-3xl md:leading-14 leading-10 max-w-[550px] text-blue-600  md:text-5xl font-bold md:mb-8 mb-3">
            Meet Your Best Friend 
            </h1>
            <p className='md:text-xl text-md md:max-w-md max-w-sm text-[#FBFBFB] font-light'>Find Pets Ready To Bring Love And Joy Into Your  Home </p>
            <div className="mb-4 flex md:justify-start md:items-start items-center justify-center ">
                
            <input
                type="text"
                name="name"
                
                 className='w-full px-10 py-3 border border-[#9A9898] mt-4 md:mt-0  rounded-md'
                placeholder='Search Pets By Breads...'
                
            />
            </div>
            </div>


            </section>
            
   <section className='py-12'>
   <h1 className='text-center mb-8 text-blue-600 text-3xl font-bold md:text-5xl'>Trending Pets</h1>
   <div className=" flex flex-col md:flex-row items-center justify-between gap-3 md:gap-5">
   <div className="md:w-1/2 w-full ">

   </div>
   </div>

    
   
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        {petList.map((pets) => (
          <Petcard key={pets.id} {...pets} />
        ))}
      </div>
   </section>
<Footer/>
</section>
  )
}

export default PetListing