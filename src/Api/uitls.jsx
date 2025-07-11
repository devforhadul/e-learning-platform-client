import axios from "axios";

export const imageUpload = async (imgData) => {
  const imgFormData = new FormData();
  imgFormData.append("image", imgData);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_KEY}`,
    imgFormData
  );

  return data?.data?.display_url;
};
