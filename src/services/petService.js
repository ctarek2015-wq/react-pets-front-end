const BASE_URL = `${import.meta.env.VITE_BACKEND_SERVER_URL}/pets`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export { index };
