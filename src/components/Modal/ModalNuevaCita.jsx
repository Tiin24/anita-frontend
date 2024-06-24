/* eslint-disable react/prop-types */
// src/components/ModalNuevaCita.jsx
import { useState } from 'react';
import useCitas from '../../store/useCitas';

const ModalNuevaCita = ({ isOpen, onClose }) => {
  const { addCita } = useCitas();
  const [fecha, setFecha] = useState('');
  const [citaServicio, setCitaServicio] = useState('');
  const [clientId, setClientId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCita = {
      fecha,
      estado:"pendiente",
      citaServicio,
      clientId
    };
    await addCita(newCita);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl font-bold mb-4">Nueva Cita</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Fecha</label>
            <input
              type="datetime-local"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Cita Servicio</label>
            <input
              type="number"
              value={citaServicio}
              onChange={(e) => setCitaServicio(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Client ID</label>
            <input
              type="number"
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              className="mt-1 p-2 w-full border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalNuevaCita;