import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);

  const handleSelectPet = (pet) => {
    setSelectedPet(pet);
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
      <PetList pets={pets} handleSelectPet={handleSelectPet} />
      <PetDetail pet={selectedPet} />
    </>
  );
}

export default App;
