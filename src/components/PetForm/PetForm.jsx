import { useState } from "react";

const initialState = {
  name: "",
  age: "",
  breed: "",
};
const PetForm = ({ handleAddPet, selectedPet, handleUpdatePet }) => {
  const [formData, setFormData] = useState(
    selectedPet ? selectedPet : initialState,
  );

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedPet) {
      handleUpdatePet(formData, selectedPet._id);
    } else {
      handleAddPet(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
        />
        <button type="submit">
          {selectedPet ? "Update Pet" : "Add New Pet"}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
