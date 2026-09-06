const PetList = ({ pets, handleSelectPet }) => {
  if (!pets.length)
    return (
      <div>
        <h1>Pet List</h1>
        <h2>No pets available</h2>
      </div>
    );

  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <ul>
          {pets.map((pet) => (
            <li
              key={pet._id}
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => handleSelectPet(pet)}
            >
              {pet.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PetList;
