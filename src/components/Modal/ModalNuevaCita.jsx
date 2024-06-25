/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import useClients from "../../store/useClient";
import useServicios from "../../store/useServicios";
import useCitas from "../../store/useCitas"

const ModalNuevaCita = ({ isOpen, onClose }) => {
  const { addCita } = useCitas()
  const { clients } = useClients();
  const { servicios,fetchServicios } = useServicios();

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    fetchServicios();
  }, [fetchServicios]);

  if (!isOpen) return null;

  const handleCheckboxChange = (serviceId) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.includes(serviceId)) {
        return prevSelectedServices.filter(id => id !== serviceId);
      } else {
        return [...prevSelectedServices, serviceId];
      }
    });
  };

  const handleSelectChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newCita = {
      fecha,
      estado: "pendiente",
      clientId: selectedClient,
      citaServicio: selectedServices,
    };
    try {
      await addCita(newCita);
    onClose();
    } catch (error) {
      console.error('Error updating cita:', error);
    }
    
  };
  

  

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
            {servicios.map((servicio) => (
              <div key={servicio.id}>
                <label>
                  <input
                    type="checkbox"
                    value={servicio.id}
                    onChange={() => handleCheckboxChange(servicio.id)}
                    checked={selectedServices.includes(servicio.id)}
                  />
                  {servicio.nombre} - ${servicio.price}
                </label>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Seleccionar Cliente</label>
            <select 
              value={selectedClient} 
              onChange={handleSelectChange} 
              className="mt-2 w-full border rounded p-2"
            >
              <option value="">Seleccione un cliente</option>
              {clients.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.name}
                </option>
              ))}
            </select>
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
