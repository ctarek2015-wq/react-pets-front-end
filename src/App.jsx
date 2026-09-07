import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";
import PetForm from "./components/PetForm/PetForm";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
    setIsFormOpen(false);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const data = await petService.index();
        if (data.error) {
          throw new Error(data.error);
        }
        setPets(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchPets();
  }, []);

  return (
    <>
      <PetList
        pets={pets}
        handleSelectPet={handleSelectPet}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? <PetForm /> : <PetDetail selectedPet={selectedPet} />}
    </>
  );
}

export default App;
