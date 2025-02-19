import useForm from "../hooks/useForm";
import React from "react";
import contactForm from "../assets/images/contactForm.jpeg"
import Button from './common/Button';
const ContactForm=()=>{
    const { values, handleChange, resetForm } = useForm({
        name: "",
        email:"",
        phone:"",
        message: "",
    });
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault();
resetForm();
    };
    return(
        <section className='py-12'>
             <div className=" mx-auto flex flex-col-reverse md:flex-row max-w-4xl max-w-s p-6 items-center justify-between">
             <div className="w-full md:w-1/2 p-4">
             <h3 className="text-blue-600 font-bold text-3xl md:text-4xl mb-6 text-center ">
              Get In Touch
            </h3>
            <form onSubmit={handleSubmit} className='max-w-lg mx-auto rounded-md p-9 '>
            <div className="mb-4 ">
                <label htmlFor="name">Full Name</label>
            <input
                type="text"
                name="name"
                value={values.name}
                required
                 className='w-full border border-[#9A9898] p-2 rounded-md'
                placeholder='Abebe Dawa'
                onChange={handleChange}
            />
            </div>
            <div className="mb-4 ">
                <label htmlFor="email">Email Address</label>
            <input
                type="email"
                name="email"
                className='w-full border border-[#9A9898] p-2 rounded-md'
                placeholder='dagmawi123@gmail.com'
                required
                value={values.email}
                onChange={handleChange}
            />
            </div>
            
           
            <div className="mb-4 ">
            <label htmlFor="phone">Phone Number</label>
            <input
                type="text"
                name="phone"
                value={values.phone}
               className='w-full border border-[#9A9898] p-2 rounded-md'
                placeholder='+251912345678'
                required
                onChange={handleChange}
            />
            </div>
        

            
            <div className="mb-4 ">
            <label htmlFor="text-area">Message Box</label>
            <textarea name="text-area" id="text-area" value={values.message}
             className='w-full border border-[#9A9898] p-2 rounded-md'
             placeholder='Type your Message Here'
             required
             onChange={handleChange}
            >

            </textarea>

            <div className='mt-4'>
<Button buttonLabel='Send Now' buttonSize='md' backgroundColor='purple'/>
            </div>
            </div>
           </form>
             </div>
             <div className="w-full md:w-1/2 mt-6 md:ml-10 md:mt-0">
          <img
            src={contactForm}
            alt="Contact Me Illustration"
            className="rounded-lg w-[125] h-[220px] md:w-[360px] mx-auto  md:h-[360px] "
          />
        </div>
             </div>

        </section>
    )
}
export default ContactForm