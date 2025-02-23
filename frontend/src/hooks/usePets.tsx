import { useState,useEffect } from "react";
import { PetData, PetDetails } from "../components/types/pets";
import { fetchPetListing } from "../utils/api";
import { fetchPetDetail } from "../utils/api";


export const usePets=()=>{
    const[petList,setPetList]=useState<PetData[]>([]);
    const[loading,setLoading]=useState<boolean>(true)
    const[error,setError]=useState<string| null>(null)
        useEffect(()=>{
          
            const loadPetList=async()=>{
                try{
                    const data=await fetchPetListing();
                    setPetList(data)
                } catch(err){
                    setError(err instanceof Error ? err.message : " Failed to Fetch PetList")
                } finally{
                    setLoading(false)
                }
            };
            loadPetList()
          
        },[])
        return{error,loading,petList}     
};
export const usePetDetail=(id:string)=>{
    const [pet, setPet] = useState<PetDetails | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=>{
        const loadPetDetails=async()=>{
            try{
                const petdetail=await fetchPetDetail(id)
                setPet(petdetail)
            } catch(err){
                setError(err instanceof Error ? err.message : " Failed to Fetch PetDetails")
            } finally{
                setLoading(false)
            }
        };
      loadPetDetails()
    
    },[id])
    return{error,loading,pet}     
};
        