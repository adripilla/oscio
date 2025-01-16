"use client"; // Asegúrate de que este archivo es tratado como Client Component

import { useState } from 'react';
import SimilarMoviesList from '../components/SimilarMoviesList'; // Asegúrate de tener este componente

export default function MovieCard({ title, releaseYear, duration, genres, poster, description, movieId }) {
  const [isSimilarVisible, setIsSimilarVisible] = useState(false);

  const handleAction = (actionType) => {
    alert(`${actionType} action`);
  };

  const toggleSimilarVisibility = () => {
    setIsSimilarVisible(!isSimilarVisible); // Alterna la visibilidad de las películas similares
  };

  return (
    <div className="flex bg-card text-card-foreground rounded-lg shadow-lg p-6 max-w-lg mx-auto my-8 line-clamp-3">
      {/* Contenedor principal para la tarjeta de la película */}
      <div className="flex-1">
        <div className="text-lg font-bold">{title}</div>
        <div className="text-sm text-muted mt-2">
          Released: {releaseYear} | Duration: {duration}
        </div>

        <img src={poster} alt={`${title} Poster`} className="mt-4 w-full max-h-96" />

        <p className="text-sm text-zinc-700 mt-4">{description}</p>

        <div className="flex justify-between mt-4">
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            onClick={() => handleAction("Hate")}
          >
            <img
              src="/images/hate.svg"
              alt="Hate Icon"
              className="inline-block w-6 h-6 mr-2"
            />
            Hate
          </button>
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            onClick={() => handleAction("Like")}
          >
            <img
              src="/images/like.svg"
              alt="Like Icon"
              className="inline-block w-6 h-6 mr-2"
            />
            Like
          </button>
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            onClick={() => handleAction("Viewed")}
          >
            <img
              src="/images/visto.svg"
              alt="Viewed Icon"
              className="inline-block w-6 h-6 mr-2"
            />
            Viewed
          </button>
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            onClick={toggleSimilarVisibility} // Cambiar visibilidad de las películas similares
          >
            <img
              src="/images/similar.svg"
              alt="Similar Icon"
              className="inline-block w-6 h-6 mr-2"
            />
            Similar
          </button>
        </div>
      </div>

      {/* Contenedor para las películas similares, alineado a la derecha */}
      <div className="ml-4">
        <SimilarMoviesList movieId={movieId} isVisible={isSimilarVisible} />
      </div>
    </div>
  );
}
