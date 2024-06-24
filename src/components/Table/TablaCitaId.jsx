import { useEffect } from "react";
import useCitasStore from "../../store/useCitas";
import { useParams } from "react-router-dom";

const TablaCitaId = () => {
  const { clientId } = useParams(); // Obtenemos clientId de los parámetros de la URL
  const { citas, fetchCitasByClientId } = useCitasStore((state) => ({
    citas: state.citas,
    fetchCitasByClientId: state.fetchCitasByClientId,
  })); // Accedemos al estado y a la acción para obtener citas por clientId

  useEffect(() => {
    if (clientId) {
      fetchCitasByClientId(clientId); // Llamamos a la acción para obtener citas por clientId al montar el componente
    }
  }, [fetchCitasByClientId, clientId]); // Dependencias del efecto

  return (
    <div>
      <h2>Citas del Cliente {clientId}</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            {/* Otros encabezados de columnas según tus datos */}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {citas.map((cita) => (
            <tr key={cita.id}>
              <td className="px-6 py-4 whitespace-nowrap">{cita.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cita.client.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cita.fecha}</td>
              <td className="px-6 py-4 whitespace-nowrap">{cita.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCitaId;
