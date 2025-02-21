import Header from "../layout/Header";
import AdoptionForm from "../AdoptionForm";
import adoption from "../../assets/images/adoption.jpeg"
const Adoption: React.FC = () => {
    return (
      <section className="min-h-screen  bg-[#f8f6f6]">
        {/* Header */}
        <Header />
  
       
        <div className="bg-[#FFECEC] mx-auto max-w-[994px] w-full overflow-x-hidden ">
            <img src={adoption} alt="adoption-image" className="w-full h-[320px] object-cover"/>
<h1 className="text-center mt-3 mb-7 text-blue-600 md:text-4xl text-2xl font-bold">Dog adoption application</h1>
<AdoptionForm/>
            </div>
            </section>
    );
}
    export default Adoption