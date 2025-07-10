import axios from "axios";

export const uploadImage = async () => {
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API}`
  );
  return data;
};
