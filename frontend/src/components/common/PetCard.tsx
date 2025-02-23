import { PetData } from "../types/pets"
import Button from "./Button"
import { useNavigate } from "react-router-dom";
const Petcard:React.FC<PetData>=(pets)=>{
    const navigate=useNavigate();
    return(
        <div className="md:w-[290px] w-[350px] h-[350px] md:h-[260px] p-4 rounded-md bg-[#FFE0E4] border border-black/5 hover:shadow-lg hover:scale-105 transition-transform">
<div className=" flex flex-col md:flex-row items-center justify-between gap-4 ">
<div className="md:w-1/2 w-ful flex justify-center">
<img src={pets.photos} alt={pets.name}  className="w-full h-[130px] object-cover rounded-t-md"/>
            </div>
            <div className="md:w-1/2 ">
            <div className="py-3">
            <h3 className="text-lg ">Name:{pets.name}</h3>
            <p className="text-md  ">Age:{pets.age}</p>
            <p className="text-md  ">Breed:{pets.breed}</p>
            <p className="text-md  ">Species:{pets.species}</p>
            </div>
    </div>
        </div> 
        <div className="flex items-center justify-between gap-2 md:mt-7 mt-4">
            <Button buttonLabel="View More" backgroundColor="blue" 
            action={() => {
  navigate(`/petdetail/${pets.id}`);
}}
            />
            <Button buttonLabel="Adopt" backgroundColor="purple"/>
            </div>
        </div>
    
    )
}

export default Petcard