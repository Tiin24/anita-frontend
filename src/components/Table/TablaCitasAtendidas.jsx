// src/components/TablaCitasAtendidas.jsx
import { useEffect } from 'react';
import useCitasAtendidas from '../../store/useCitasAtendidas';

const TablaCitasAtendidas = () => {
  const { citasAtendidas, fetchCitasAtendidas } = useCitasAtendidas();

  useEffect(() => {
    fetchCitasAtendidas();
  }, [fetchCitasAtendidas]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg mx-auto" style={{ width: '50%' }}>
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">ID</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">Fecha</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">Estado</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">Cliente</th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">Servicios</th>
          </tr>
        </thead>
        <tbody>
          {citasAtendidas.map((cita) => (
            <tr key={cita.id}>
              <td className="py-2 px-4 border-b text-center">{cita.id}</td>
              <td className="py-2 px-4 border-b text-center">{new Date(cita.fecha).toLocaleDateString()}</td>
              <td className="py-2 px-4 border-b text-center">{cita.estado}</td>
              <td className="py-2 px-4 border-b text-center">{cita.client.name}</td>
              <td className="py-2 px-4 border-b text-center">
                {cita.servicios.map((servicio) => servicio.nombre).join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCitasAtendidas;
