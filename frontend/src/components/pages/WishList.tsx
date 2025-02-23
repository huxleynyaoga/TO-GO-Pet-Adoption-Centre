import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Button from "../common/Button";
import { Pet } from "../types/pets";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const deletToast=()=>{
    toast.error(
        "😢Pet Deleted From WishList", {
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

const WishList: React.FC<Pet>= () => {
  const navigate = useNavigate();
  const [petsaved, setSavedPets] = useState<Pet[]>(() => {
    try {
      const savedPets = JSON.parse(localStorage.getItem("pets") || "[]");
      return Array.isArray(savedPets) ? savedPets : [];
    } catch (error) {
      console.error("Error parsing localStorage pets", error);
      return [];
    }
  });

  const deletePet = (id: string) => {
    const updatedPets = petsaved.filter((pet) => pet.id !== id);
    setSavedPets(updatedPets);
    localStorage.setItem("pets", JSON.stringify(updatedPets));
    deletToast()
  };

  if (petsaved.length === 0) {
    return (
      <section className="min-h-screen flex flex-col">
        <Header />
        <div className="bg-white shadow-md rounded-md w-full h-[303px] flex items-center justify-center">
          <h1 className="text-3xl text-center text-blue-600 px-4">
            🐾 No pets in wishlist. <br />
            <button
              onClick={() => navigate("/petlisting")}
              className="text-purple-600 underline mt-2 text-xl hover:text-purple-700"
            >
              Browse Pets
            </button>
          </h1>
        </div>
        <Footer />
      </section>
    );
  }

  return (
    <section className="min-h-screen flex flex-col">

      <Header />
      <div className="md:py-10 py-8 md:my-6 my-0">
  <h1 className="text-3xl mt-10 text-center mx-auto text-blue-600 font-bold">
    🧡 Your Wishlist Pet. <span className="text-sm font-bold text-black">({petsaved.length}) Total</span>
  </h1>
  <p className="text-lg mx-auto maw-w-sm md:max-w-md text-center mt-5 text-black">If You Believe the detail of the Pets Matches your interest, please Click the  <span className="font-bold text-blue-600">Adopt</span> BUtton to make them yours  </p>
</div>
     
      <div className="flex-1">
        {petsaved.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded-lg max-w-4xl w-full mx-auto p-6 mt-4 ">
          
            <div className="bg-[#FFE0E4] rounded-lg p-6 shadow-inner">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2 w-full flex justify-center">
                  <img
                    src={pet.images}
                    alt={`Image of ${pet.name}, a ${pet.breed}`}
                    className="w-full max-w-[300px] h-48 object-cover rounded-xl shadow-lg border-4 border-white"
                  />
                </div>
                <div className="md:w-1/2 w-full space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Name</h3>
                    <p className="text-gray-900 font-medium">{pet.name}</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Age</h3>
                    <p className="text-gray-900 font-medium">{pet.age} years</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-700">Breed</h3>
                    <p className="text-gray-900 font-medium capitalize">{pet.breed}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Button buttonLabel="Delete" backgroundColor="purple" action={() => deletePet(pet.id)} />
                <Button buttonLabel="Start Adoption Process" backgroundColor="blue" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default WishList;