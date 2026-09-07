const PetList = ({ pets, handleSelectPet, handleFormView, isFormOpen }) => {
  if (!pets.length)
    return (
      <div>
        <h1>Pet List</h1>
        <h2>No pets available</h2>
      </div>
    );

  return (
    <div className="sidebar-container">
      <h1>Pet List</h1>
      <div className="list-container">
        <ul>
          {pets.map((pet) => (
            <li
              key={pet._id}
              style={{ cursor: "pointer", color: "#646CFF" }}
              onClick={() => handleSelectPet(pet)}
            >
              {pet.name}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleFormView}>
        {isFormOpen ? "Close Form" : "New Pet"}
      </button>
    </div>
  );
};

export default PetList;
