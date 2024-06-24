// src/store/useClients.js
import create from 'zustand';

const useClients = create((set) => ({
  clients: [],
  fetchClients: async () => {
    try {
      const response = await fetch('http://localhost:4000/client');
      if (!response.ok) {
        throw new Error('Failed to fetch clients');
      }
      const data = await response.json();
      set({ clients: data });
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  },
  addCliente: async (newCliente) => {
    try {
      const response = await fetch('http://localhost:4000/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCliente),
      });
      if (!response.ok) {
        throw new Error('Failed to add client');
      }
      const addedCliente = await response.json();
      set((state) => ({
        clientes: [...state.clientes, addedCliente],
      }));
    } catch (error) {
      console.error('Error adding client:', error);
    }
  },

}));

export default useClients;
