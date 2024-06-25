import { useEffect, useState } from "react";
import useCitasStore from "../../store/useCitas";
import { useParams } from "react-router-dom";

const TablaCitaId = () => {
  const { clientId } = useParams();
  const { citas, fetchCitasByClientId } = useCitasStore((state) => ({
    citas: state.citas,
    fetchCitasByClientId: state.fetchCitasByClientId,
  }));

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (clientId) {
      fetchCitasByClientId(clientId)
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }, [fetchCitasByClientId, clientId]);

  return (
    <div>
      <h2>Citas del Cliente {clientId}</h2>
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : citas.length === 0 ? (
        <h1>{"No se encontraron citas para este cliente"}</h1>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
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
      )}
    </div>
  );
};

export default TablaCitaId;
