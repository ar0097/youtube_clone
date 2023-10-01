import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50
  },
  headers: {
    "X-RapidAPI-Key": "a272172e49msh2fcfe41a98bfdc6p1a85cfjsne464e283bdd8",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
