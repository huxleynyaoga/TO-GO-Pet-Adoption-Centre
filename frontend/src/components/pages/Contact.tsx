import React from 'react';
import Header from '../layout/Header';
import contact from "../../assets/images/contact.jpeg"
import { FaPhone} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import ContactForm from '../ContactForm';
import Footer from '../layout/Footer';

const Contact:React.FC = () => {
    return (
        <>
       <Header/>
       <section className='py-16'>
       <div className="w-full mx-auto flex flex-col items-center md:flex-row md:justify-between justify-center gap-8">
       <div className="md:w-1/2 w-full relative md:mt-12 mt-10  ">
       <img src={contact} alt={contact} className="md:w-[380px] md:h-[380px] w-[320px] h-[320px] mx-auto rounded-lg"/>
       <div className='p-4 rounded-md mx-auto bg-[#D9D9D9] bg-opacity-50 shadow-md shadow-black/25 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
       <h1 className='font-bold text-center md:text-2xl text-xl'>Get in Touch with Us!</h1>
       <p>Have questions about adoption, donations, or pet care? We're here to help!</p>
       </div>
       </div>
       <div className="md:w-1/2 w-full px-5 md:text-left text-center    ">
        <div className="flex flex-col items-center md:items-start space-y-4  gap-6 mx-auto">
            
            <div className='bg-[#FFF7EC] p-3 border border-[#BBB7B7] rounded-md  md:w-[300px] w-[240px] h-auto md:max-w-3xl'>
            <div className='flex items-center justify-center gap-7'>
            <FaPhone/>
            <p className='font-bold text-black  text-sm '>393-436-8976</p>

</div>

            </div>

<div className='bg-[#FFF7EC] p-3 border border-[#BBB7B7] rounded-md  md:w-[300px] w-[240px] h-auto md:max-w-3xl'>
<div className='flex items-center justify-center gap-7'>
   
    <BiLogoGmail/>
    
   
<p className='font-bold text-black  text-sm  '>Mike90@yahoo.com</p>
</div>

</div>
<div className='bg-[#FFF7EC] p-3 border border-[#BBB7B7] rounded-md  md:w-[300px] w-[240px] h-auto md:max-w-3xl'>
<div className='flex items-center justify-center gap-7'>
   <FaLocationArrow/>

   <p className='font-bold text-black  text-sm  '>142 Langosh Crossing, Cristinaside 87284</p>
</div>
</div>
        </div> 
        <div className="w-full mx-auto justify-center md:justify-start   flex items-center gap-6 py-6">
  {/* WhatsApp Icon */}
  <div className="rounded-full w-10 h-10 border border-black flex items-center justify-center p-2">
    <IoLogoWhatsapp className="w-6 h-6" />
  </div>

  {/* Twitter (X) Icon */}
  <div className="rounded-full w-10 h-10 border border-black flex items-center justify-center p-2">
    <FaXTwitter className="w-6 h-6" />
  </div>

  {/* Instagram Icon */}
  <div className="rounded-full w-10 h-10 border border-black flex items-center justify-center p-2">
    <FaInstagram className="w-6 h-6" />
  </div>

  {/* Facebook Icon */}
  <div className="rounded-full w-10 h-10 border border-black flex items-center justify-center p-2">
    <FaFacebookF className="w-6 h-6" />
  </div>
</div>



       </div>
       </div>
       {/*Maps*/}
         

       <ContactForm/>
       <div className="w-full h-[400px]  mx-auto rounded-lg overflow-hidden shadow-lg mb-9">
        <h2 className='md:text-3xl text-2xl text-blue-600 font-bold text-center mb-6'>Explore Our Map</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0444802017!2d-118.74140117455275!3d34.020608392949974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1739231532381!5m2!1sen!2sus" width="100%" height="100%" style={{border:0,width:"100%",height:"100%"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <Footer/>
       

       </section>
        </>
        
    );
};

export default Contact;
