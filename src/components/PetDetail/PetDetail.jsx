const PetDetail = ({ pet }) => {
  if (!pet) {
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{pet.name}</h1>
      <h2>Breed: {pet.breed}</h2>
      <h2>
        Age: {pet.age} year{pet.age > 1 ? "s" : ""} old
      </h2>
    </div>
  );
};

export default PetDetail;
