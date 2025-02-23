export interface FormValues{
    firstName:string
    lastName:string
    email:string
    mobile:string
    preferences:string
    age:number
    breed:string
    country:string
    petType:string
    size:string
    gender:string

}
export interface DropdownOption<T>{
    label:string
    value:T
}
export interface DropdownProps<T>{
    name:string
    options:DropdownOption<T>[]
    onChange:(value:T)=>void
    value:T
    error?:string
}
export type AgeDropdownProps=DropdownProps<number>
export type BreedDropdownProps=DropdownProps<string>
export type PetTypeDropdownProps=DropdownProps<string>
export type SizeDropdownProps=DropdownProps<string>
export type GenderDropdownProps=DropdownProps<string>
export type CounryDropdownProps=DropdownProps<string>