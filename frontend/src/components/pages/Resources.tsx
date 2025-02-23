import React from 'react'
import Header from '../layout/Header'
import resoure from "../../assets/images/resource.png"
import Footer from '../layout/Footer'
import learnCat from "../../assets/images/learn-cat.jpeg";
import learnDog from "../../assets/images/learn-dog.jpeg";
import smallPet from "../../assets/images/small-pet.jpeg";
import learnBird from "../../assets/images/learn-bird.jpeg";
import nutrition from "../../assets/images/dog-nutrition.jpeg";
import health from "../../assets/images/health.jpeg";
import training from "../../assets/images/training.jpeg"
import Button from '../common/Button';
import paw from "../../assets/images/paw.png"
import smallpaw from "../../assets/images/smallpaw.png"
import dogCare from "../../assets/images/dogCare.jpeg"
import FAQ from '../FAQ';
import { FAQItem } from '../../interfaces';
 const faqData: FAQItem[] = [
    {
      question: "How do I adopt a pet?",
      answer: "To adopt a pet, visit our adoption center, choose a pet, and complete the adoption process.",
    },
    {
      question: "What are the basic needs of a pet?",
      answer: "Pets need proper food, clean water, shelter, medical care, and regular exercise for a healthy life.",
    },
    {
      question: "How often should I take my pet to the vet?",
      answer: "A pet should visit the vet at least once a year for a check-up and vaccinations.",
    },
    {
      question: "What is the best diet for my pet?",
      answer: "A balanced diet depends on the type of pet, but generally includes proteins, healthy fats, and essential vitamins.",
    },
    {
      question: "How can I train my pet effectively?",
      answer: "Use positive reinforcement, consistency, and patience to train your pet effectively.",
    },
  ];

const Resources:React.FC= () => {
  return (
    <div>
         <Header />
     <div className=" bg-[#f8f6f6]">
     <section
        className="w-full  h-[498px]  bg-cover bg-center"
        style={{
          backgroundImage: `url(${resoure} )`,
          backgroundRepeat: "no-repeat",
        
          backgroundSize: "cover",
        }}
      >
         <div className="absolute inset-0 bg-black bg-opacity-30"></div>
         <div className="relative z-10 text-white h-full">
       <div className="  h-full  flex flex-col justify-center m-4  items-center">
       
        <h1 className="text-3xl  text-blue-600  md:text-5xl font-bold mb-8">
          Learn How to Care for Your Pet
          </h1>
          <p className='text-xl max-w-md text-[#FBFBFB] font-light'>Find expert tips and guides to keep your pets happy and healthy.</p>
       
         </div>
         </div>
    
        </section>

        <section className="py-14">
  <h2 className="md:text-3xl text-blue-600 text-center mb-9 font-bold  text-2xl ">Learn To  Care For Your Pet</h2>
  <div className="flex flex-wrap justify-center space-x-12 mx-auto items-center gap-14">
  <div className="flex flex-col items-center justify-center  hover:scale-105 transition-transform">
    <div className='w-[197px] h-[146px] border border-black rounded-md shadow-md-[#807F7F40]'>
    <div className="relative  ">
      <img src={learnDog} alt={learnDog} className="w-full h-[144px]  object-cover" />
      <p className="absolute text-black bottom-0 left-0 w-full text-center font-bold text-2xl ">
    Dogs
  </p>
  </div>
    </div>
    </div>
  
      
  <div className="flex flex-col items-center justify-center  hover:scale-105 transition-transform">
  <div className="relative ">
  <div className='w-[197px] h-[146px] border border-black rounded-md shadow-md-[#807F7F40]'>
  <img src={learnCat} alt={learnCat} className="w-full h-[144px]  object-cover" />
  
  <p className="absolute text-black bottom-0 left-0 w-full text-center font-bold text-2xl ">
    Cats
  </p>

  
  </div>
  </div>
</div>
 
      
      
    
    <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform ">
    <div className="relative  ">
  
    <div className='w-[197px] h-[146px] border border-black rounded-md shadow-md-[#807F7F40]'>
  <img src={learnBird} alt={learnCat}  className="w-full h-[144px]  object-cover" />
  <p className="absolute text-black bottom-0 left-0 w-full text-center font-bold text-2xl ">
   Birds
  </p>
  </div>
 
  </div>
      
    </div>
    <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform">
   
    <div className="relative ">
    <div className='w-[197px] h-[146px] border border-black rounded-md '>
  <img src={smallPet} alt={smallPet} className="w-full h-[144px]  object-cover" />
  <p className="absolute text-black bottom-0 left-0 w-full text-center font-bold text-2xl ">
Small Pet
  </p>
  </div>
  </div>
  
      
</div>
</div>

</section>

<section className='py-10 '>
    <h1 className='text-center md:text-4xl text-3xl mb-5 font-bold text-blue-600 '>Our Blogs</h1>
 {/* Blog Content */}
 <div className="flex flex-col md:flex-row gap-6 md:grid grid-cols-1 md:grid-cols-3 md:place-items-center items-center justify-center mt-6">
            {/* Card 1 */}
            <div className="w-[320px] min-h-[320px]   border border-gray-300 rounded-md bg-[#FFE5E8] shadow-lg flex flex-col items-center text-center ">
             
                <img
                  src={nutrition}
                  alt="creativity"
                  className="w-full h-40 object-cover"
                />
             <div className='p-4'>
             <h3 className="text-[20px] font-semibold mt-1 ">Nutrition</h3>
              <p className="text-[15px] text-parablack  leading-6">
              Ensure your pet gets a balanced diet with the right nutrients for optimal health and energy.
              </p>
              <div>
              <Button buttonLabel="Download PDF" backgroundColor="purple" buttonSize="text-sm" />
              </div>
           
             </div>
             
            </div>

            {/* Card 2 */}
            <div className="w-[320px] min-h-[320px]  border border-gray-300 rounded-md bg-[#E2F1F8] shadow-lg flex flex-col items-center justify-start text-center ">
             
                <img
                  src={health}
                  alt="strategy"
                  className="w-full h-40 object-cover"
                />
              <div className='p-4'>
              <h3 className="text-[20px] font-semibold mt-1">Health</h3>
              <p className="text-[15px] text-black  leading-6">
              Keep your pet in top shape with regular checkups, vaccinations, and disease prevention tips.
              </p>
              <Button buttonLabel="Download PDF" backgroundColor="purple" buttonSize="text-sm" />
              </div>
             
            </div>

            {/* Card 3 */}
            <div className="w-[320px] min-h-[320px]   border border-gray-300 rounded-md bg-[#FCF2E5] shadow-lg flex flex-col items-center text-center ">
              
                <img
                  src={training}
                  alt="growth"
                  className="w-full h-40 object-cover"
                />
             <div className='p-4'>
             <h3 className="text-[20px] font-semibold mt-1">Growth</h3>
              <p className="text-[15px] text-black leading-6">
                We deliver data-driven solutions to boost traffic, conversions,
                and measurable success.
              </p>
              <Button buttonLabel="Download PDF" backgroundColor="purple" buttonSize="text-sm" />
             </div>
             
            </div>
          </div>
</section>
<section className='bg-[#FCF2E5] w-full '>
  
<div className=' flex md:justify-start justify-center mt-3'>
      <img src={smallpaw} alt="Paw Icon" className="w-12 h-12 mx-auto md:mx-0 mt-4 " />
      
      </div>
  
 
  

  {/* Guide Pet Section */}
  <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto px-6">
    
    {/* Text Section */}
    <div className="md:w-1/2 w-full text-center md:text-left">
      <h1 className='text-2xl md:text-3xl text-blue-600 font-bold leading-normal'>
        Your Guide to Better Pet Parenting
      </h1>
      <p className='font-light max-w-md w-full mx-auto md:mx-0 mt-4 leading-7'></p>
        From first-time pet owners to seasoned caregivers, our blogs provide essential knowledge for responsible pet care.
       /p
      <div className='mx-auto flex md:justify-start justify-center'>
      <img src={paw} alt="Paw Icon" className="w-20 h-20  md:mx-0 mt-4 " />
      
      </div>
   
    </div>

    {/* Image Section */}
    <div className='md:w-1/2 w-full flex justify-center'>
      <img 
        src={dogCare} 
        alt="dogCare" 
        className='w-[190px] h-[180px] md:w-[270px] md:h-[350px] rounded-md shadow-lg'
      />
    </div>

  </div>
</section>

<section className='py-10 w-full max-w-6xl mx-auto'>
  {/* FAQ Section*/}
  <FAQ FAQ={faqData}/>
</section>

 
    </div>
    <Footer/>
    </div>
  )
}

export default Resources