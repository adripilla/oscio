"use client"; // Asegúrate de que este archivo sea tratado como un Client Component

import { useEffect } from 'react';

export default function Loading() {
  useEffect(() => {
    // Este efecto garantiza que el script de TailwindCSS se cargue correctamente
    const script = document.createElement('script');
    script.src = "https://cdn.tailwindcss.com?plugins=forms,typography";
    script.defer = true;
    script.onload = () => console.log('TailwindCSS cargado');
    document.body.appendChild(script);

    const scriptUnlazy = document.createElement('script');
    scriptUnlazy.src = "https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js";
    scriptUnlazy.defer = true;
    scriptUnlazy.setAttribute('init', '');
    document.body.appendChild(scriptUnlazy);

    return () => {
      // Limpiar los scripts cuando el componente se desmonta
      document.body.removeChild(script);
      document.body.removeChild(scriptUnlazy);
    };
  }, []);

  return (
    <div className="relative flex bg-card text-card-foreground rounded-lg shadow-lg p-6 max-w-lg mx-auto my-8 bg-gradient-to-r from-blue-500 to-purple-500 h-[74vh]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-16 w-16 animate-spin"></div>
      </div>
    </div>
  );
}
