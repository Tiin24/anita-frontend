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
    console.log(citas[0].client.name)
  }, [fetchCitasByClientId, clientId]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-poppins">Citas del Cliente <span className="text-2xl font-poppins"> {citas[0].client.name}</span></h2>
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : citas.length === 0 ? (
        <h1>{"No se encontraron citas para este cliente"}</h1>
      ) : (
        <table className="w-1/2 border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="font-poppins py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
                ID
              </th>
              <th className="font-poppins py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
                Nombre
              </th>
              <th className="font-poppins py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
                Fecha
              </th>
              <th className="font-poppins py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
                Estado
              </th>
              {/* Otros encabezados de columnas según tus datos */}
            </tr>
          </thead>
          <tbody>
            {citas.map((cita) => (
              <tr key={cita.id}>
                <td className="font-poppins border border-gray-300 px-4 py-2 text-center">{cita.id}</td>
                <td className="font-poppins border border-gray-300 px-4 py-2 text-center">{cita.client.name}</td>
                <td className="font-poppins border border-gray-300 px-4 py-2 text-center">{cita.fecha}</td>
                <td className="font-poppins border border-gray-300 px-4 py-2 text-center">{cita.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TablaCitaId;
