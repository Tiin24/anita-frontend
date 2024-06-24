/* eslint-disable react/prop-types */
// import React from 'react';

const ModalCita = ({ isOpen, onClose, onSubmit, cita }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedCita = {
      id: cita.id,
      fecha: formData.get('fecha'),
      estado: formData.get('estado'),
      clientId: formData.get('clientId'),
    };
    onSubmit(updatedCita);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Modificar Cita</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
            <input
              type="datetime-local"
              id="fecha"
              name="fecha"
              defaultValue={new Date(cita.fecha).toISOString().slice(0, 16)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="estado" className="block text-sm font-medium text-gray-700">Estado</label>
            <select
              id="estado"
              name="estado"
              defaultValue={cita.estado}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="aceptado">Aceptado</option>
              <option value="pendiente">Pendiente</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="clientId" className="block text-sm font-medium text-gray-700">ID del Cliente</label>
            <input
              type="number"
              id="clientId"
              name="clientId"
              defaultValue={cita.clientId}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md">Cancelar</button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCita;
