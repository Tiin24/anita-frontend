import { useEffect, useState } from "react";
import useCitasStore from "../../store/useCitas";
import Modal from "../../components/Modal/ModalCita";

const TablaCitas = () => {
  const { citas, fetchCitas, updateCita } = useCitasStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCita, setCurrentCita] = useState(null);

  useEffect(() => {
    fetchCitas();
  }, [fetchCitas]);

  const handleEditClick = (cita) => {
    setCurrentCita(cita);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentCita(null);
  };

  const handleModalSubmit = (updatedCita) => {
    updateCita(updatedCita);
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      <table className="w-1/2 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              ID
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Fecha
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Estado
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Cliente
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Servicios
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {cita.id}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {new Date(cita.fecha).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {cita.estado}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {cita.client.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {cita.servicios.map((servicio) => servicio.nombre).join(", ")}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleEditClick(cita)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                >
                  Modificar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {currentCita && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
          cita={currentCita}
        />
      )}
    </div>
  );
};

export default TablaCitas;
