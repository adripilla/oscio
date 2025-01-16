"use client"; // Asegúrate de que este archivo es tratado como Client Component

import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';

export default function Peliculas() {
  const [movie, setMovie] = useState(null);
  const [movieId, setMovieId] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      let fetchedMovie = null;
      let id = getRandomMovieId(); // Obtener un ID aleatorio entre 1 y 939243

      // Intentar obtener los detalles de la película
      while (!fetchedMovie) {
        fetchedMovie = await fetchMovieDetails(id);
        if (!fetchedMovie) {
          id = getRandomMovieId(); // Si no se encuentra una película, intenta con otro ID
        }
      }
      setMovie(fetchedMovie);
      setMovieId(id); // Establecer movieId aquí
    };

    fetchMovie();
  }, []);

  // Función para generar un número aleatorio entre 1 y 939243
  function getRandomMovieId() {
    const min = 1;
    const max = 939243;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Obtener los detalles de la película de la API
  async function fetchMovieDetails(movieId) {
    const API_KEY = 'f1a7b7ebeaf57570288229207d8d0989'; // Reemplaza con tu clave de API
    const BASE_URL = 'https://api.themoviedb.org/3';

    try {
      const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
      const data = await res.json();
      // Verificar si la película no tiene contenido para adultos
      if (data.title && !data.adult && data.popularity > 20.00) {
        return data;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error al obtener los detalles de la película:', error);
      return null;
    }
  }

  if (!movie || !movieId) {
    return <p>Cargando...</p>; // Mostrar mensaje de carga si no se ha obtenido la película
  }

  return (
    <div className="container mx-auto p-2">
      {/* Mostrar el movieId aquí */}
      <MovieCard
        title={movie.title}
        releaseYear={new Date(movie.release_date).getFullYear()} // Extraer el año
        duration={`${movie.runtime} min`}
        poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        description={movie.overview}
        movieId={movieId}
      />
    </div>
  );
}
