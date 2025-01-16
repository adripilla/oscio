"use client"; // Asegúrate de que este archivo es tratado como Client Component

import { useState, useEffect } from 'react';
import Peliculas from '../components/Peliculas';

export default function HomePage() {


  return (
    <div className="container mx-auto p-2">
       <Peliculas />
      
    </div>
  );
}
