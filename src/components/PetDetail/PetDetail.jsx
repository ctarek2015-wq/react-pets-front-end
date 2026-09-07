const PetDetail = ({ selectedPet, handleFormView, handleDeletePet }) => {
  if (!selectedPet) {
    return (
      <div className="details-container">
        <h1>NO DETAILS</h1>
      </div>
    );
  }
  return (
    <div className="details-container">
      <h1>{selectedPet.name}</h1>
      <h2>Breed: {selectedPet.breed}</h2>
      <h2>
        Age: {selectedPet.age} year{selectedPet.age > 1 ? "s" : ""} old
      </h2>
      <div className="button-container">
        <button onClick={() => handleFormView(selectedPet)}>Edit Pet</button>

        <button onClick={() => handleDeletePet(selectedPet._id)}>
          Delete Pet
        </button>
      </div>
    </div>
  );
};

export default PetDetail;
