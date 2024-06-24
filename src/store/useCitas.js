import create from 'zustand';

const useCitasStore = create((set) => ({
  citas: [],
  fetchCitas: async () => {
    try {
      const response = await fetch('http://localhost:4000/citas');
      const data = await response.json();
      set({ citas: data });
    } catch (error) {
      console.error('Error fetching citas:', error);
    }
  },
  updateCita: (updatedCita) => set((state) => ({
    citas: state.citas.map(cita => cita.id === updatedCita.id ? updatedCita : cita)
  })),
  addCita: async (newCita) => {
    try {
      const response = await fetch('http://localhost:4000/citas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCita),
      });
      if (!response.ok) {
        throw new Error('Failed to add cita');
      }
      const addedCita = await response.json();
      set((state) => ({
        citas: [...state.citas, addedCita],
      }));
    } catch (error) {
      console.error('Error adding cita:', error);
    }
  },
  fetchCitasByClientId: async (clientId) => {
    try {
      const response = await fetch(`http://localhost:4000/citas/cliente/${clientId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch citas by client ID');
      }
      const data = await response.json();
      set({ citas: data });
    } catch (error) {
      console.error('Error fetching citas by client ID:', error);
      throw error;
    }
  },
}));

export default useCitasStore;
