// src/components/TablaClients.jsx
import { useEffect } from "react";
import useClients from "../../store/useClient";
import { Link } from "react-router-dom";

const TablaClients = () => {
  const { clients, fetchClients } = useClients();

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              ID
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Name
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Email
            </th>
            <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-center">
              Telefono
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td className="py-2 px-4 border-b text-center">{client.id}</td>
              <td className="py-2 px-4 border-b text-center">
                <Link to={`/clients/${client.id}`}>{client.name}</Link>
              </td>
              <td className="py-2 px-4 border-b text-center">{client.email}</td>
              <td className="py-2 px-4 border-b text-center">
                {client.telefono}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaClients;
