// src/store/useCitasAtendidas.js
import create from 'zustand';

const useServicios = create((set) => ({
  servicios: [],
  fetchServicios: async () => {
    try {
      const response = await fetch('http://localhost:4000/servicios');
      if (!response.ok) {
        throw new Error('Failed to fetch attended servicios');
      }
      const data = await response.json();
      set({ servicios: data });
    } catch (error) {
      console.error('Error fetching attended servicios:', error);
    }
  },
}));

export default useServicios;