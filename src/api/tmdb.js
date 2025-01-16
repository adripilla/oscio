import axios from 'axios';

const API_KEY = 'f1a7b7ebeaf57570288229207d8d0989'; // Reemplaza esto con tu clave de API
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
