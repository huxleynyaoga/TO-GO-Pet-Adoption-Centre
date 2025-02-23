export interface MainLayoutProps {
  children: React.ReactNode;
}
export interface ButtonProps{
  buttonLabel:string
backgroundColor:"purple"| "blue"
buttonSize?:string
action?:()=>void

}
export interface FAQItem{
  question:string
  answer:string
}
export interface FAQProps{
FAQ:FAQItem[]
}
export interface TestimonialProps{
  
  image:string
  title:string
  name:string
  description:string
}
export interface ServiceCardProps{
  description:string
  image:string
} 

