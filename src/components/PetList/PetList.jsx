const PetList = ({ pets }) => {
  if (!pets.length)
    return (
      <>
        <h1>Pet List</h1>
        <p>No pets available</p>
      </>
    );

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
