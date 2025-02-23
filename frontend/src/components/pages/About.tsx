import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import petCat from "../../assets/images/petCat.png";
import petDog from "../../assets/images/petDog.png";
import petChicken from "../../assets/images/petChicken.png";
import petParrot from "../../assets/images/petParrot.png";
import rabbit from "../../assets/images/rabbit.png";
import paw from "../../assets/images/paw.png";
import position from "../../assets/images/positionimage.png";

import petwithhuman from "../../assets/images/petwithhuman.jpeg";
import pug from "../../assets/images/pug.webp";
import ourpets from "../../assets/images/ourpets.jpg"
import smallpaw from "../../assets/images/smallpaw.png";
import { ServiceCardProps } from '../../interfaces';
import hospital from "../../assets/icons/hospital.png";
import animalshelter from "../../assets/icons/animal-shelter.png";
import guide from "../../assets/icons/guide.png";
import pets from "../../assets/icons/pets.png";
import community from "../../assets/images/community.jpeg";
import transparency from "../../assets/images/transparency.jpeg";
import compassion from "../../assets/images/compassion.jpeg";
import teamone from "../../assets/images/teamone.png";
import teamtwo from "../../assets/images/teamtwo.png";
import teamthree from "../../assets/images/teamthree.png";
import teamfour from "../../assets/images/teamfour.png";
const Service:ServiceCardProps[]=[
  {
image:pets,
description:"We rescue animals from shelters, streets, and abusive environments"
  },
  {
    image:hospital,
    description:" Provide them with medical care"
      },
      {
        image:animalshelter,
        description:"Match them with loving families"
          },
          {
            image:guide,
            description:"We educate the community on responsible pet care and the need for spaying/neutering."
              },

  
]
const About: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="bg-[#f8f6f6]">

        {/* Hero Section */}
        <div className="w-full p-10 md:p-16 bg-[#D1DBEA]">
          <div className="w-full mx-auto flex flex-col items-center md:flex-row md:justify-between gap-8">

            {/* Left Section - Text Content */}
            <div className="md:w-1/2 w-full px-5 text-center md:text-left ">
              <img src={paw} alt="Paw Icon" className="w-20 h-20 mx-auto md:mx-0 mt-9" />
              <h1 className="font-bold text-2xl md:text-4xl mb-5 mt-3 text-blue-600">
                Who We Are and Why We Care
              </h1>
              <p className="text-md md:max-w-sm text-gray-600 mb-6 font-light">
                We are passionate about giving abandoned and rescued animals a second chance at a loving home.
              </p>
              <div className='md:mt-8 mt-0'>
                <h2 className='font-semibold text-blue-600 md:text-2xl text-xl mb-6'>Building a Community of Pet Lovers</h2>
                <p className="text-md md:max-w-sm text-gray-600 font-light">
                  Our goal is to create a world where no pet is left behind, where love knows no bounds, and where every wagging tail and purring friend gets the life they deserve. Together, we can make a difference, one adoption at a time.
                </p>
                <div className="flex md:justify-end md:items-end justify-center items-center">

                </div>
                <img src={smallpaw} alt={smallpaw} className="w-20 h-20" />

              </div>
            </div>

            {/* Right Section - Pet Images */}
            <div className="md:w-1/2 w-full flex flex-wrap justify-center gap-4">

              <img src={petParrot} alt="Pet Parrot" className="rounded-md max-w-[140px] md:mt-7 w-full h-auto object-cover transition duration-300 hover:scale-90" />
              <img src={petDog} alt="Pet Dog" className="rounded-md max-w-[160px] md:mt-7 w-full h-auto object-cover transition duration-300 hover:scale-90" />
              <img src={petChicken} alt="Pet Chicken" className="rounded-md max-w-[260px] md:mt-7 w-full h-auto object-cover transition duration-300 hover:scale-90" />

              <img src={rabbit} alt="Rabbit" className="rounded-md max-w-[150px] md:mt-7 w-full h-auto object-cover transition duration-300 hover:scale-90" />
              <img src={petCat} alt="Pet Cat" className="rounded-md max-w-[160px] md:mt-7 w-full h-auto object-cover transition duration-300 hover:scale-90" />


            </div>
          </div>
        </div>

        {/* About Us Section */}
        <section className='py-10'>
          <div className='flex flex-col md:flex-row items-center gap-7'>

            <div className='md:w-1/2 w-full px-10'>
              <h1 className='text-2xl md:text-3xl text-blue-600 font-bold text-center md:text-left mb-4'>
                Introduction to Our Organization
              </h1>
              <p className="text-md leading-7">
                At <span className='text-blue-600 font-bold italic'>TO-GO Adoption Center</span>, we are dedicated to finding loving homes for abandoned, stray, and rescued animals. Our mission is to create a world where every pet is cherished and no animal is left behind.
              </p>
            </div>

            {/* Rotated Image Section */}
            <div className="md:w-1/2 w-full flex justify-center items-center relative overflow-hidden">
              <div className="bg-[#FFECEC] w-[350px] md:w-[420px] h-[310px] rounded-md rotate-12 flex justify-center items-center">
                <img src={position} alt="Positioned Image" className="w-[200px] md:w-[310px] h-auto rounded-md rotate-20 object-cover " />
              </div>
              <img src={pug} alt="Cat" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[290px] h-auto rounded-md object-cover" />
            </div>

          </div>
        </section>

        {/* Mission And Vision Section */}
        <section className='py-10'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-7'>

            <div className="md:w-1/2 w-full flex justify-center">
              <img src={petwithhuman} alt="Pet with human" className='md:w-[320px] w-[280px] h-[350px] md:h-[440px]  mx-auto rounded-md' />
            </div>

            <div className='md:w-1/2 w-full px-20 md:px-0'>
              <h1 className='text-2xl md:text-3xl text-blue-600 font-bold mb-6'>
                Our Mission and Vision
              </h1>

              <div className='mt-4'>
                <h3 className='text-lg md:text-2xl font-bold mb-2'>Our Mission</h3>
                <p className='font-light max-w-md'>To rescue, rehabilitate, and rehome animals in need while promoting responsible pet ownership.</p>
              </div>

              <div className='mt-4'>
                <h3 className='text-lg md:text-2xl font-bold mb-2'>Our Vision</h3>
                <p className='font-light max-w-md'>A future where every animal has a safe, loving, and forever home.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Our Story Section */}
        <section className='py-10'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-7'>

            <div className='md:w-1/2 w-full px-10'>
              <div className='bg-[#E5F0F8] md:p-18 p-10 rounded-md'>
                <h1 className='text-2xl md:text-3xl text-blue-600 font-semibold mb-6'>Our Story</h1>
                <p className='font-light leading-8'>
                  Founded in 2015, <span className='font-semibold text-blue-600 italic'>TO-GO ADOPTION CENTER</span> began with a small group of animal lovers who wanted to make a difference. Inspired by Buddy, a rescued stray dog, we committed ourselves to providing a safe haven for animals in need.
                </p>
              </div>
            </div>

            {/* Story Image */}
            <div className='md:w-1/2 w-full flex justify-center'>
              <div className='bg-[#FFECEC] border border-[#EE78BF] w-[390px] md:w-[480px] lg:w-[510px] h-auto rounded-md'>
                <img src={ourpets} alt="Our Pets" className='w-[320px] md:w-[470px]  mx-auto my-3 rounded-md object-cover' />
              </div>
            </div>

          </div>
        </section>
        {/* What We Do */}
        <section className='mx-auto py-8'>
          <h1 className='md:text-3xl text-2xl mb-3 md:mb-10 text-center text-blue-600 font-bold'> What You Do
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 '>
          {Service.map((service, index) => 
          (
<div 
           key={index} 
           className={`${index % 2 === 0 ? "bg-[#FFECEC] hover:border border-[#dfa7a7] " : "bg-[#dbd2fd] hover:border border-[#8a75e0]"} p-4 m-7 max-w-xl rounded-md text-center shadow-md`}
         >
                  <img src={service.image} alt={service.image} className='w-20 h-20 mx-auto' />
                  <p className='text-center'>{service.description}</p>
                </div>
          ))}
  
           
          </div>
            
        </section>
        
        {/* Core Values  */}
        <section className='py-10'>
          <h2 className='md:text-3xl text-blue-600 text-2xl font-bold text-center mb-4 '>Core Values</h2>
        <div className="flex flex-col justify-center mx-auto md:max-w-6xl w-full items-center lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={compassion}
              alt="compassion"
              className="w-full lg:w-[480px] max-w-[350px] h-[247px] rounded-[32px] object-cover mb-5 lg:mb-0"
            />

            {/* Blog Content */}
            <div className="flex flex-col justify-center md:justify-start space-y-4 space-x-5 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-semibold leading-tight">
              Compassion
              </h1>
              <p className="md:text-md md:max-w-xl  max-w-sm text-[14px] leading-6 text-center md:text-left text-gray-600">
              Our commitment is to care for every animal with compassion and dignity. We believe that every pet deserves a loving home, and we strive to make that a reality for every animal we rescue.{" "}
            
              </p>
             
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-8 mt-9">
            <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left  font-semibold leading-tight">
                Transparency
              </h1>
              <p className="md:text-md max-w-sm md:max-w-lg  text-[14px] leading-6 text-center md:text-left text-gray-600">
              We’re all about being real and straightforward! We believe in transparency and honesty in everything we do. We’re committed to being open and honest with our community, our donors, and our partners.{" "}
              </p>
              
            </div>
            {/* Blog Image */}
            <img
              src={transparency}
              alt="transparency"
              className="w-full lg:w-[480px] mx-auto max-w-[350px] h-[247px] rounded-[32px] object-cover mb-5 mt-3 lg:mb-0"
            />

            {/* Blog Content */}
          </div>
          <div className="flex flex-col justify-center items-center  lg:flex-row lg:space-x-5 mb-10">
            {/* Blog Image */}
            <img
              src={community}
              alt="community"
              className="w-full lg:w-[480px] max-w-[340px] h-[247px] rounded-[32px] mx-auto object-cover mb-5 lg:mb-0"
            />

            {/* Blog Content */}
            <div className="flex flex-col justify-center space-x-5  md:justify-start space-y-4 md:items-baseline items-center mx-auto">
              <h1 className="md:text-[35px] text-[27px] text-center md:text-left font-semibold leading-tight">
                Community
              </h1>
              <p className="md:text-md md:max-w-xl max-w-sm text-[14px] leading-6 text-center md:text-left text-gray-600">
              We believe in the power of people coming together to make a difference. We’re committed to building a community of pet lovers who share our passion for animals and our mission to save lives.{" "}

              </p>
             
            </div>
          </div>
          
          
          </section>
          {/* Our Team */}
          <section className='py-8'>
<h1 className='md:text-4xl text-3xl text-center md:mb-10 mb-5 font-bold text-blue-600 '>Meet Our Team</h1>
<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:space-y-4 space-y-0 '>
<img src={teamone} alt="teamone" className="rounded-md  mx-auto md:max-w-[450px] max-w-[350px]   object-cover transition duration-300 hover:scale-90" />
              <img src={teamtwo} alt="teamtwo" className="rounded-md  mx-auto md:max-w-[450px] max-w-[350px]   object-cover transition duration-300 hover:scale-90" />
              <img src={teamthree} alt="teamthree" className="rounded-md   mx-auto md:max-w-[450px] max-w-[350px]  object-cover transition duration-300 hover:scale-90" />

              <img src={teamfour} alt="teamfour" className="rounded-md  mx-auto md:max-w-[450px] max-w-[350px]  object-cover transition duration-300 hover:scale-90" />

</div>
          </section>
          
          
       
     </div>
      <Footer />
    </section>
    
  );
};

export default About;
