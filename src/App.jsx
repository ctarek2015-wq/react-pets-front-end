import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

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
      <PetList pets={pets} />
    </>
  );
}

export default App;
