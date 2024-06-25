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
        throw Error('No se Encontraron citas para este cliente');
      }
      const data = await response.json();
      set({ citas: data });
    } catch (error) {
      console.error('Error fetching citas by client ID:', error);
      throw error;
    }
  },
  updateCita: async (id, updatedCita) => {
    try {
      const response = await fetch(`http://localhost:4000/citas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCita),
      });
      if (!response.ok) {
        throw new Error('Failed to update cita');
      }
      const updatedCitaFromServer = await response.json();
      set((state) => ({
        citas: state.citas.map((cita) =>
          cita.id === id ? updatedCitaFromServer : cita
        ),
      }));
    } catch (error) {
      console.error('Error updating cita:', error);
    }
  },
}));

export default useCitasStore;
