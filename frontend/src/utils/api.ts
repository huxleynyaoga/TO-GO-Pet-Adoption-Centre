import { PetData } from "../components/types/pets";
import { PetDetails } from "../components/types/pets";
import axios from "axios";
 
export const fetchPetListing=async():Promise<PetData[]>=>{
    try{
        const response=await axios.get<PetData[]>("http://127.0.0.1:8000/api/pets/")
        return response.data
    } catch(err:unknown){
        if(err instanceof Error)
        console.error("error Fetching Pet Data",err.message)
     else {
console.error("Unkown Error")
    }
    throw err
}
}
export const fetchPetDetail=async(petID:string):Promise<PetDetails>=>{
    try{
        const response=await axios.get<PetDetails>(`http://127.0.0.1:8000/api/pets/${petID}`)
        return response.data
    } catch(err:unknown){
        if(err instanceof Error){
            console.error("Erro Fetchin Details of Pets",err)
        } else{
console.error("Unkown Error")
        }
        throw null
    }

    
}

