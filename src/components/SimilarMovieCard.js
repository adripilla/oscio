// components/SimilarMovieCard.js
"use client"; // Asegúrate de que este archivo es tratado como Client Component

export default function SimilarMovieCard({ title, releaseYear, duration, poster }) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 max-w-gd mx-auto my-4">
      <div className="text-lg font-bold">{title}</div>
      <div className="flex items-center mt-4">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="w-32 h-24 rounded-md"
        />
      </div>

    </div>
  );
}
