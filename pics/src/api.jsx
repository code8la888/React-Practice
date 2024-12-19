import axios from "axios";
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
