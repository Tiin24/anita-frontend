import { useAuth0 } from "@auth0/auth0-react";

const NuevoCliente = () => {
  const { isAuthenticated } = useAuth0();
  return (
    (isAuthenticated && (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Nuevo Cliente Page</h1>
        <p>Welcome to the Clients page!</p>
      </div>
    )) || (
      <div className="flex justify-center items-center ">
        <h2>Error: Debes logiarte para ingresar a este sitio</h2>
      </div>
    )
  );
};

export default NuevoCliente;
