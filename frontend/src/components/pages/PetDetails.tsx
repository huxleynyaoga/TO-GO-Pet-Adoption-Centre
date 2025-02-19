import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { usePetDetail } from "../../hooks/usePets";
import Button from "../common/Button";
import {  useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io"
import { useNavigate } from "react-router-dom";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

    const showToastMessage = (message:string,type:"success" | "error" = "success") => {
        if(type==="success") {
            toast.success(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });


        } else{
            toast.error(message,{
                position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
        }
      };
    

const PetDetailss=()=>{
  const navigate=useNavigate()
    const{id}=useParams<{id:string }>();
     const{loading,pet,error}=usePetDetail(id || "");
     if(loading)
        return <div className='p-3 bg-slate-500 rounded-md mx-auto max-w-xl mt-4 text-center text-white'>
            <p>Data is Being Fetched Please Wait a bit</p>
        </div>
        if(error)
            return <div className="p-3 bg-red-600 rounded-md mx-auto max-w-xl mt-4 text-center text-white">Please Try Again Later:{error}
            </div>
            if(!pet) return(
                <div>No Pet Details Exist</div>
            )
            const uniqueBehaviour = Array.from(
                new Map(pet.behaviour?.map((item) => [item.temperament, item])).values()
              );
            
            return (
<section className=" py-14">

    <Header/>
   <div className="flex items-center justify-between">
   <IoMdArrowRoundBack className="md:w-10 md:h-10 w-5 h-5 hover:cursor-pointer py-2 mt-6" onClick={()=>navigate("/petlisting")}/>
   <h1 className="text-4xl text-blue-600 mt-10 mb-4 text-center mx-auto font-bold">Pet Details</h1>
  
    </div>  


  

   
    <div className=" flex flex-col md:flex-row items-center justify-between gap-8 max-w-4xl mx-autop-4 md:mt-10 mt-0"  key={pet.id}>
    <div className="md:w-1/2 w-full flex justify-center ">
<img src={pet.photos} alt={pet.name}  className="w-[300px] h-[300px] object-cover rounded-md" />
</div>
<div className="md:w-1/2 w-full  mx-auto justify-center items-center">
   <div className="grid grid-cols-2 gap-4 ">
    <div className="space-y-4">
    <h2 className="text-lg">Name:{pet.name}</h2>
    <h2 className="text-lg">Size:{pet.size==="M" && "Medium"}</h2>
    <h2 className="text-lg">Gender:{pet.gender==="M" ? "Male" : "Female"}</h2>

    <h2 className="text-lg">Location: {pet.adoption && pet.adoption[0] ? pet.adoption[0].location : "N/A"}</h2>
    </div>
    <div className="space-y-4">

    <h2 className="text-lg">Age:{pet.age}</h2>
    <h2 className="text-lg">Breed:{pet.breed}</h2>
    <h2 className="text-lg">Weight:{pet.weight}</h2>

        </div>
   </div>
   <div className="flex mt-5 ">
           
            <Button buttonLabel="Adopt" backgroundColor="purple" />
            <Button 
  buttonLabel="Add to Wishlist" 
  backgroundColor="blue" 
  action={() => {
    const savedPets=JSON.parse(localStorage.getItem("pets") || "[]")
    const newPet={
        id:pet.id,
        images:pet.photos,
        name:pet.name,
        age:pet.breed,
    };
    if (!savedPets.some((p: { id: string }) => p.id === newPet.id)) {
        const updatedPets = [...savedPets, newPet];
        localStorage.setItem("pets", JSON.stringify(updatedPets)); // Save immediately
        showToastMessage("🦄 Pet added to wishlist!"); 
        
} else{
 showToastMessage("🐾 Pet is already in your wishlist!", "error")
}



  }}

/>


            </div>
    
</div>



</div>

<section className="py-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
        <div>
        <h2 className="text-center text-2xl font-bold mb-4 ">Personality and Temprament </h2>
        <div className="w-[310px] h-[220px] bg-[#FFE5E8] p-2 rounded-md border border-black space-y-2 hover:shadow-lg hover:scale-105 transition-transform">
            {uniqueBehaviour.map((behaviour,index)=>(
                <div key={index} className="space-y-2">
 <p className="text-black flex items-center gap-2">
  🐾 Temperament: {behaviour.temperament ?? "N/A"}
</p>
<p className="text-black flex items-center gap-2"> 🏃 Activity Level:{behaviour.activity_level ?? "N/A"}</p>
<p className="text-black flex items-center gap-2"> 🤝Compatibility:{behaviour.compatibility ?? "N/A"}</p>
                </div>

            ))}
        
        </div>
        
        </div>
        <div>
        <h2 className="text-center text-2xl font-bold mb-4">Pet’s Story / Background</h2>

        <div className="w-[310px] h-[220px] bg-[#FFE5E8] p-4 rounded-md border border-black hover:shadow-lg hover:scale-105 transition-transform overflow-y-auto">
            
            <p>Description:{pet.description}</p>
            
        </div>
        

        </div>
        <div>
        <h2 className="text-center text-2xl font-bold mb-4">Health And Special Need  </h2>
        <div className="w-[310px] h-[220px] bg-[#E2F1F8] p-2 rounded-md border border-black space-y-2 hover:shadow-lg hover:scale-105 transition-transform">

            {pet.health.length===0 ?  (
                <div>
                    <p className="text-center text-2xl text-red-700 mx-auto">No Health Data is Provied</p> 
                </div>
            ) : (
                pet.health?.map((health,index)=>(
                    <div key={index} className="space-y-2">
                    <p className="text-black">💉 Vaccinated Status: {health.vaccinated ? "✔Yes" : "❌No"}</p>
                    <p className="text-black">✂️ Spayed/Neutered: {health.neutered ? "✔Yes" :"❌No"}</p>
                    <p className="text-black">🐛 Deworming Status: {health.dewormed ? "✔Yes" : "❌No"}</p>
                  
               </div>
            ))
                )}
           
           
            
            
        </div>
        

        </div>
        <div>
        <h2 className="text-center text-2xl font-bold mb-4 ">Adoption Info </h2>
        <div className="w-[310px] h-[160px] bg-[#FFE5E8] p-2 rounded-md border border-black space-y-2 hover:shadow-lg hover:scale-105 transition-transform">
            {pet.adoption?.map((adoption,index)=>(
                <div key={index} className="space-y-2">
                <p className="text-black">💰 Adoption Fee: {adoption.adoption_fee} $$</p>
                <p className="text-black">📅 Availability: {adoption.availability === "A" ? "Available" : "Not Available"}</p>
                <p className="text-black">📍 Location: {adoption.location}</p>
              </div>
            ))}
            
            
        </div>
        

        </div>
    </div>
</section>


   <Footer/>      
</section>
            )
}
export default PetDetailss