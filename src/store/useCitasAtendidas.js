// src/store/useCitasAtendidas.js
import create from 'zustand';

const useCitasAtendidas = create((set) => ({
  citasAtendidas: [],
  fetchCitasAtendidas: async () => {
    try {
      const response = await fetch('http://localhost:4000/citas/aceptadas');
      if (!response.ok) {
        throw new Error('Failed to fetch attended citas');
      }
      const data = await response.json();
      set({ citasAtendidas: data });
    } catch (error) {
      console.error('Error fetching attended citas:', error);
    }
  },
}));

export default useCitasAtendidas;