const PetDetail = ({ selectedPet, handleFormView }) => {
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
      <div>
        <button onClick={() => handleFormView(selectedPet)}>Edit Pet</button>
      </div>
    </div>
  );
};

export default PetDetail;
