const PetList = ({ pets }) => {
  return (
    <div>
      <h1>Pet List</h1>
      <div>
        <ul>
          {pets.map((pet) => (
            <li key={pet._id}>{pet.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PetList;
