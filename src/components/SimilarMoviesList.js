"use client"; // Asegúrate de que este archivo es tratado como Client Component

import { useState, useEffect } from 'react';
import axios from 'axios';
import SimilarMovieCard from '../components/SimilarMovieCard';

export default function SimilarMoviesList({ movieId, isVisible }) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isVisible) return; // No cargar si no está visible

    const fetchSimilarMovies = async () => {
        console.log("el di es "+movieId);
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/similar`,
          {
            params: {
              api_key: 'f1a7b7ebeaf57570288229207d8d0989',
            },
          }
        );
        setSimilarMovies(response.data.results.slice(0, 3)); // Limitar a 5 resultados
      } catch (err) {
        setError('Error al cargar las películas similares');
      } finally {
        setLoading(false);
      }
    };

    fetchSimilarMovies();
  }, [movieId, isVisible]); // Dependencia de isVisible

  if (!isVisible) return null; // No mostrar nada si no está visible
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {similarMovies.map((movie) => (
        <SimilarMovieCard
          key={movie.id}
          title={movie.title}
          releaseYear={new Date(movie.release_date).getFullYear()}
          duration={movie.runtime || 'Desconocida'}
          poster={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        />
      ))}
    </div>
  );
}
