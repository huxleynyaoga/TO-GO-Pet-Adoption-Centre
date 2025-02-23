import Footer from "../layout/Footer"
import donate from "../../assets/images/donate.jpeg"
import Header from "../layout/Header"

const Donate:React.FC=()=>{
    return(
<section className='bg-[#FCF2E5] w-full py-20'>
    <Header/>
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto px-6">
      
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className='text-2xl md:text-3xl text-blue-600 font-bold mt-6 md:mt-0 '>
        Make a Difference – Choose a Donation Tier
        </h1>
        <p className='font-light max-w-md w-full mx-auto md:mx-0 mt-4 leading-7'></p>
        Every contribution helps provide food, shelter, and medical care for pets in need. Select a tier and make an impact!
        
     
      </div>
  
      {/* Image Section */}
      <div className='md:w-1/2 w-full flex justify-center'>
        <img 
          src={donate} 
          alt="donation image" 
          className='w-[190px]  h-[190px] md:w-[270px] md:h-[270px] rounded-md'
        />
      </div>
  
    </div>
    <Footer/>
  </section>
    )
}
export default Donate
