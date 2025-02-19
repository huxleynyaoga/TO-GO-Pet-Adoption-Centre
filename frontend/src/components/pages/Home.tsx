import Hero from "../../assets/images/hero.png";
import Button from "../common/Button";
import cat from "../../assets/images/cat.png";
import dog from "../../assets/images/dog.png";
import other from "../../assets/images/otherfurries.png";
import mission from "../../assets/images/MissionImage.png";
import petadopt from "../../assets/icons/pet-adopt.png";
import voluunter from "../../assets/icons/volunteer.png";
import stat from "../../assets/icons/stat-dollar.png";
import dogimage from "../../assets/images/dog-image.png";
import catimage from "../../assets/images/catdonate.png";
import rabbitimage from "../../assets/images/rabbit.png";
import parrot from "../../assets/images/parrot.png";
import volunterpet from "../../assets/images/volunterpet.jpg";
import donationpet from "../../assets/images/donatepet.jpg";
import petevent from "../../assets/images/petevent.jpg";
import { TestimonialProps  } from "../../interfaces";
import testimonyone from "../../assets/images/testimonyone.png";
import testimonytwo from "../../assets/images/testimonytwo.png";
import testimonythre from "../../assets/images/testimonythre.png";
import testimonialfour from "../../assets/images/testmonialfour.png";
import testimonialfive from "../../assets/images/testimonialfive.png";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Home: React.FC = () => {
  const navigate=useNavigate()
  const[adopt,setAdopt]=useState(0);
  const finalcountpet=5000;
  const finalcountvolunteer=300;
  const finalcountdonation=1000000;
  const[volunteer,setVolunteer]=useState(0);
  const[donation,setDonation]=useState(0);
 
  useEffect(()=>{
    const interval=setInterval(()=>{
      setAdopt((prev)=>prev<finalcountpet?prev+10:prev);
      setDonation((prev)=>prev<finalcountdonation?prev+1000:prev);
      setVolunteer((prev)=>prev<finalcountvolunteer?prev+10:prev);
      if(adopt>=finalcountdonation &&volunteer>=finalcountvolunteer &&donation>=finalcountdonation){
        clearInterval(interval)
      }
      
     
    },100)
   
  },[adopt,volunteer,donation])
  const Testmonial:TestimonialProps[]=[
    {
image:testimonyone,
name:"Lynn Cruickshank",
title:"A Second Chance for Bella",
description:"When we first met Bella at the adoption center, she was shy and hesitant. But within days of bringing her home, she blossomed into the most loving and playful pup. Adopting her was the best decision we ever made—she is now our best friend and a constant source of joy! Emily & Jake",
    },
    {
      image:testimonytwo,
      name:"Sarah L",
title:" Max Found His Forever Home",
description:"We wanted to adopt a senior cat, and Max stole our hearts instantly. He may be older, but he has so much love to give! Every evening, he curls up on our laps, purring away. We can't imagine life without him. Adopting instead of shopping was the best choice we ever made.Sarah L"
    },
    
          {
            image:testimonythre,
            name:"Mike & Laura",
            title:"From Shelter to Superstar – Meet Rocky!",
            description:"Rocky was a stray, scared and unsure of people. But with patience and love, he transformed into the happiest, most affectionate dog. Now, he joins us on hikes, loves car rides, and wags his tail non-stop. It's amazing what a little kindness can do! Mike & Laura",
                },
            
                {
                  image:testimonialfour,
                  name:"Jessica & Tom",
title:"Lynn Cruickshank",
description:"When we first met Bella at the adoption center, she was shy and hesitant. But within days of bringing her home, she blossomed into the most loving and playful pup. Adopting her was the best decision we ever made—she is now our best friend and a constant source of joy! Emily & Jake",
    },
    {
      image:testimonialfive,
      name:"Jessica & Tom",
title:"Lynn Cruickshank",
description:"When we first met Bella at the adoption center, she was shy and hesitant. But within days of bringing her home, she blossomed into the most loving and playful pup. Adopting her was the best decision we ever made—she is now our best friend and a constant source of joy! Emily & Jake",
},
  ]
  return (
    <>
    <div className=" flex flex-col ">
      <Header />
      <div className="flex- bg-[#f8f6f6]">
        <section
          className="h-screen bg-cover bg-center"
          style={{
            backgroundImage: `url(${Hero} )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="  h-full   flex flex-col justify-center items-center   md:items-start text-center">
            <h1 className="text-3xl md:leading-14 leading-10 max-w-[550px] text-white  md:text-5xl font-bold mb-8">
              Find Love, Save Life Make a Difference
            </h1>
            <div className="px-12 flex justify-center md:justify-start gap-7 items-center md:items-start">
              <Button buttonLabel="Adpot " backgroundColor="blue" buttonSize="text-lg" action={()=>navigate("/petlisting")} />
              <Button buttonLabel="Donate" backgroundColor="purple" buttonSize="text-lg" />
            </div>
          </div>
        </section>

        <section className="py-12 mx-auto ">
          <h2 className="text-center font-semibold md:text-3xl text-xl text-[#5BCBFF] ">Meet Our Adorable Friends Waiting For Home</h2>
          <div className="py-10 flex justify-center items-center gap-12 flex-wrap text-center">
            <div className="p-2  bg-white rounded-md shadow-md border border-[#FC7A8D] hover:shadow-[#5BCBFF] transition duration-300 transform hover:scale-105">
              <img src={cat} className="w-[150px] h-[150px]" alt="Cat" />
              <h3 className="text-2xl font-semibold ">Cats </h3>
            </div>
            <div className="p-2 text-white  bg-[#5BCBFF] rounded-md shadow-md border border-[#5BCBFF] hover:shadow-[#5BCBFF] transition duration-300 transform hover:scale-105">
              <img src={dog} className="w-[150px] h-[150px]" alt="Cat" />
              <h3 className="text-2xl font-semibold ">Dogs </h3>
            </div>
            <div className="p-2  bg-white rounded-md shadow-md border border-[#FC7A8D] hover:shadow-[#5BCBFF] transition duration-300 transform hover:scale-105">
              <img src={other} className="w-[150px] h-[150px]" alt="Cat" />
              <h3 className="text-2xl font-semibold ">Other Furries</h3>
            </div>
          </div>




        </section>
        <section className=" py-6">

          <h2 className="text-center font-semibold md:text-3xl text-xl text-[#5BCBFF] mb-5">Discover Our Mission and Values</h2>
          <div className=" flex flex-col md:flex-row items-center justify-between gap-7 md:gap-4">
            <div className="md:w-1/2 w-full flex justify-center">
              <img src={mission} alt="Mission" className="rounded-lg " />
            </div>
            <div className="md:w-1/2 text-center   bg-[#FCF2E5] p-8  rounded-lg shadow-md">
              <h3 className="text-3xl font-semibold text-[#5BCBFF] mb-5 font-lobster">Intro To Our Mission</h3>
              <p className="text-sm md:text-[15px] leading-6 text-black">At our pet adoption center, our mission is to provide a loving and safe environment for homeless animals while connecting them with compassionate families. We strive to promote responsible pet ownership, educate the community about the importance of animal welfare, and ensure that every pet finds a forever home where they can thrive and be cherished</p>
              <div className="mt-5">
                <Button buttonLabel="Learn More" backgroundColor="purple" buttonSize="text-lg" />
              </div>


    
          </div>
      </div>



    </section><section className="py-12">
        <div className="text-center mb-10">
          <h2 className="md:text-3xl text-2xl font-bold text-blue-600">🐾 Our Impact in Numbers</h2>
          <p className="text-gray-600 mt-2">Making a difference, one paw at a time!</p>
        </div>

        <div className="flex flex-wrap justify-center space-x-12 mx-auto items-center gap-14">

          {/* Pets Adopted */}
          <div className="flex flex-col items-center justify-center rounded-full p-6 w-40 h-40 border-2 border-blue-300 shadow-lg hover:scale-105 transition-transform">
            <img src={petadopt} alt="Pets Adopted" className="w-16 h-16 mb-2" />
            <h2 className="text-2xl font-bold text-blue-600">{adopt}+</h2>
            <p className="text-gray-700 text-md">Pets Adopted</p>
          </div>

          {/* Volunteers */}
          <div className="flex flex-col items-center justify-center rounded-full p-6 w-40 h-40 border-2 border-blue-300 shadow-lg hover:scale-105 transition-transform">
            <img src={voluunter} alt="Volunteers" className="w-16 h-16 mb-2" />
            <h2 className="text-2xl font-bold text-blue-600">{volunteer}+</h2>
            <p className="text-gray-700 text-md">Volunteers</p>
          </div>

          {/* Donations */}
          <div className="flex flex-col items-center justify-center rounded-full p-6 w-40 h-40 border-2 border-blue-300 shadow-lg hover:scale-105 transition-transform">
            <img src={stat} alt="Donations" className="w-16 h-16 mb-2" />
            <h2 className="text-2xl font-bold text-blue-600">{donation}+</h2>
            <p className="text-gray-700 text-md">Donations</p>
          </div>

        </div>
      </section><section className="py-14">
        <h2 className="md:text-3xl text-blue-600 text-center mb-9 font-bold  text-2xl ">🧫 Your Support Save Lives</h2>
        <div className="flex flex-wrap justify-center space-x-12 mx-auto items-center gap-14">
          <div className="flex flex-col items-center justify-center  hover:scale-105 transition-transform">
            <div className="relative hover:opacity-100 transition-opacity duration-500 ">
              <img src={rabbitimage} alt={rabbitimage} className="w-40 h-40" />
              <p className="absolute text-white bottom-0 left-0 w-full text-center opacity-0 hover:opacity-100 transition-opacity">
                $50 feeds a rabbit for 1 Month
              </p>
            </div>
            <div className="mt-4">
              <Button buttonLabel="Donate" backgroundColor="purple" buttonSize="text-lg"  />
            </div>

          </div>
          <div className="flex flex-col items-center justify-center  hover:scale-105 transition-transform">
            <div className="relative hover:opacity-100 transition-opacity duration-500 ">
              <img src={catimage} alt={catimage} className="w-40 h-40" />
              <p className="absolute text-white bottom-0 left-0 w-full text-center opacity-0 hover:opacity-100 ">
                $50 feeds a rabbit for 1 Month
              </p>
            </div>


            <div className="mt-4">
              <Button buttonLabel="Donate" backgroundColor="purple" buttonSize="text-lg" />
            </div>

          </div>

          <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform ">
            <div className="relative hover:opacity-100 transition-opacity duration-500 ">
              <img src={dogimage} alt={dogimage} className="w-40 h-40 " />
              <p className="absolute text-white bottom-0 left-0 w-full text-center opacity-0 hover:opacity-100 ">
                $50 feeds a rabbit for 1 Month
              </p>
            </div>
            <div className="mt-4">

              <Button buttonLabel="Donate" backgroundColor="purple" buttonSize="text-lg" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform">

            <div className="relative hover:opacity-100 transition-opacity duration-500 ">
              <img src={parrot} alt={parrot} className="w-40 h-40" />
              <p className="absolute text-white bottom-0 left-0 w-full text-center opacity-0 hover:opacity-100 ">
                $50 feeds a cat for 1 Month
              </p>
            </div>

            <div className="mt-4">
              <Button buttonLabel="Donate" backgroundColor="purple" buttonSize="text-lg" />


            </div>
          </div>
        </div>

      </section><section className="md:py-8 py-5">
        <h1 className="md:text-3xl text-2xl text-blue-600 font-bold text-center md:mb-12 md:mt-6 mb-8 mt-3">Join Our Mission to Save Lives and Create Families</h1>
        <div className="flex md:flex-nowrap flex-wrap  justify-center gap-12 mx-auto items-center">

          {/* Pet Adoption Event */}
          <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <img src={petevent} alt="Pet Adoption Event" className="rounded-md w-60 h-60" />
            <div className="mt-4 p-2 text-center">
              <h1 className="md:text-2xl text-md font-semibold">Find Your New Best Friend</h1>
              <p className="text-gray-600 mt-3 md:text-[17px] max-w-sm ">Join our pet adoption event and meet loving animals waiting for a forever home.</p>
            </div>
            <Button buttonLabel="Learn More" backgroundColor="purple" buttonSize="text-lg" />
          </div>

          {/* Pet Donation Campaign */}


          {/* Volunteer Program */}
          <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <img src={volunterpet} alt="Pet Volunteer Program" className="rounded-md w-60 h-60" />
            <div className="mt-4 p-2 text-center">
              <h1 className="md:text-2xl text-md font-semibold">Become a Volunteer</h1>
              <p className="text-gray-600 mt-3 md:text-[17px] max-w-sm ">Join our team and help make a difference in the lives of rescued animals.</p>
            </div>
            <Button buttonLabel="Learn More" backgroundColor="purple" buttonSize="text-lg" />
          </div>
          <div className="flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <img src={donationpet} alt="Pet Donation Campaign" className="rounded-md w-60 h-60" />
            <div className="mt-4 p-2 text-center">
              <h1 className="md:text-2xl text-md font-semibold">Support Our Furry Friends</h1>
              <p className="text-gray-600 mt-3 md:text-[17px] max-w-sm">Your donations help provide food, shelter, and medical care to pets in need.</p>
            </div>
            <Button buttonLabel="Learn More" backgroundColor="purple" buttonSize="text-lg" />
          </div>
        </div>
      </section><section className="py-10">
        <h1 className="md:text-3xl text-2xl text-blue-600 font-bold text-center mb-4  ">Our Happy Tails</h1>
        <Swiper
          className="max-w-4xl mx-auto"
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >

          {Testmonial.map((testimony, index) => (
            <SwiperSlide key={index} className="flex flex-col items-center text-center p-6 ">
              <img src={testimony.image} alt={testimony.name} className="md:w-60 md:h-60 mx-autow-40 h-40 mx-auto  rounded-md object-cover" />
              <h2 className="md:text-3xl text-2xl text-blue-600 font-bold mb-4">{testimony.title}</h2>
              <p className="text-sm md:text-md">{testimony.description}</p>
              <p className="mt-2 font-bold">"{testimony.name}"</p>
            </SwiperSlide>
          ))}

        </Swiper>
      </section>
     
    </div>
<Footer />
    </div>
    </>
    
      );
    };

   
    
      
    
export default Home;
