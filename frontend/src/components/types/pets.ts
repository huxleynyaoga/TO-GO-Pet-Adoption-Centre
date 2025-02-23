export interface PetData{
    id:  string
    name:string
    age:number
    breed:string
    photos:string
    color:string
    species:string
  }
  export interface Pet {
    id: string;
    name: string;
    age: number;
    images: string;
    breed: string;
  }
  export interface Adoption{
    id:string
    location:string
    adoption_fee:number
    availability:string
  }
  export interface Behaviour{
    id:  string
    compatibility:string
    temperament:string
    activity_level:string
  }
  export interface Health{
    vaccinated:boolean
    neutered:boolean
    dewormed:string
  }
  export interface PetDetails extends PetData{
    size:string
    gender:string
    id:  string
    weight:number
   health:Health[]
    description:string
  
    behaviour:Behaviour[]
    adoption:Adoption[]
    adoption_fee:number
    
    
  }